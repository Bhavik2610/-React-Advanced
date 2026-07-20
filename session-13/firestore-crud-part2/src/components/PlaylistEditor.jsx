import { useEffect, useState } from "react";
import { collection, addDoc, updateDoc, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase.js";

const playlistsRef = collection(db, "playlists");

export default function PlaylistEditor() {
  const [playlists, setPlaylists] = useState([]);
  const [newName, setNewName] = useState("");
  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState("");

  // Real-time list so updates/deletes reflect instantly.
  useEffect(() => {
    const unsubscribe = onSnapshot(playlistsRef, (snapshot) => {
      setPlaylists(snapshot.docs.map((d) => ({ id: d.id, ...d.data() })));
    });
    return () => unsubscribe();
  }, []);

  async function addPlaylist(e) {
    e.preventDefault();
    if (!newName.trim()) return;
    await addDoc(playlistsRef, { name: newName.trim() });
    setNewName("");
  }

  // Task 1: update a playlist's name by its document ID.
  async function saveEdit(id) {
    if (!editName.trim()) return;
    await updateDoc(doc(db, "playlists", id), { name: editName.trim() });
    setEditId(null);
    setEditName("");
  }

  // Task 2: delete a playlist, confirming first with window.confirm.
  async function handleDelete(id) {
    if (window.confirm("Delete this playlist? This cannot be undone.")) {
      await deleteDoc(doc(db, "playlists", id));
    }
  }

  return (
    <div style={styles.card}>
      <h2 style={styles.h2}>Playlist Editor</h2>

      <form onSubmit={addPlaylist} style={styles.row}>
        <input style={styles.input} placeholder="New playlist name" value={newName} onChange={(e) => setNewName(e.target.value)} />
        <button type="submit" style={styles.add}>Add</button>
      </form>

      <ul style={styles.list}>
        {playlists.map((p) => (
          <li key={p.id} style={styles.item}>
            {editId === p.id ? (
              <>
                <input style={styles.input} value={editName} onChange={(e) => setEditName(e.target.value)} autoFocus />
                <button style={styles.save} onClick={() => saveEdit(p.id)}>Save</button>
                <button style={styles.ghost} onClick={() => setEditId(null)}>Cancel</button>
              </>
            ) : (
              <>
                <span style={{ flex: 1 }}>{p.name}</span>
                <button style={styles.ghost} onClick={() => { setEditId(p.id); setEditName(p.name); }}>Edit</button>
                <button style={styles.del} onClick={() => handleDelete(p.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  card: { background: "#fff", border: "1px solid #e5e7eb", borderRadius: 12, padding: "1.25rem" },
  h2: { marginTop: 0 },
  row: { display: "flex", gap: "0.5rem", marginBottom: "1rem" },
  input: { flex: 1, padding: "0.55rem 0.7rem", borderRadius: 8, border: "1px solid #ccc" },
  add: { border: "none", background: "#1db954", color: "#fff", borderRadius: 8, padding: "0.55rem 1rem", fontWeight: 700, cursor: "pointer" },
  list: { listStyle: "none", padding: 0, display: "grid", gap: "0.5rem" },
  item: { display: "flex", alignItems: "center", gap: "0.5rem", background: "#f6f6f6", borderRadius: 8, padding: "0.55rem 0.8rem" },
  save: { border: "none", background: "#2874f0", color: "#fff", borderRadius: 6, padding: "0.35rem 0.7rem", cursor: "pointer", fontWeight: 700 },
  del: { border: "none", background: "#e23744", color: "#fff", borderRadius: 6, padding: "0.35rem 0.7rem", cursor: "pointer", fontWeight: 700 },
  ghost: { border: "1px solid #ccc", background: "#fff", borderRadius: 6, padding: "0.35rem 0.7rem", cursor: "pointer" },
};
