import { useEffect, useState } from "react";
import { collection, addDoc, updateDoc, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase.js";

// This is the "major component" we code-split with React.lazy in App.jsx.
// It pulls in the Firestore SDK, so lazy-loading it keeps that code OUT of
// the initial bundle until the Watchlist is actually shown.
const moviesRef = collection(db, "movies");

export default function Watchlist() {
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState("");
  const [editId, setEditId] = useState(null);
  const [editTitle, setEditTitle] = useState("");

  useEffect(() => {
    const unsub = onSnapshot(moviesRef, (snap) => {
      setMovies(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
    });
    return () => unsub();
  }, []);

  async function addMovie(e) {
    e.preventDefault();
    if (!title.trim()) return;
    await addDoc(moviesRef, { title: title.trim(), watched: false });
    setTitle("");
  }
  async function toggleWatched(m) {
    await updateDoc(doc(db, "movies", m.id), { watched: !m.watched });
  }
  async function saveTitle(id) {
    if (!editTitle.trim()) return;
    await updateDoc(doc(db, "movies", id), { title: editTitle.trim() });
    setEditId(null);
  }
  async function removeMovie(id) {
    if (window.confirm("Delete this movie?")) await deleteDoc(doc(db, "movies", id));
  }

  return (
    <div style={styles.card}>
      <h2 style={styles.h2}>My Watchlist</h2>
      <form onSubmit={addMovie} style={styles.row}>
        <input style={styles.input} placeholder="Add a movie…" value={title} onChange={(e) => setTitle(e.target.value)} />
        <button type="submit" style={styles.add}>Add</button>
      </form>
      {movies.length === 0 ? <p style={styles.muted}>No movies yet.</p> : (
        <ul style={styles.list}>
          {movies.map((m) => (
            <li key={m.id} style={styles.item}>
              {editId === m.id ? (
                <>
                  <input style={styles.input} value={editTitle} onChange={(e) => setEditTitle(e.target.value)} />
                  <button style={styles.save} onClick={() => saveTitle(m.id)}>Save</button>
                </>
              ) : (
                <>
                  <span style={{ flex: 1, textDecoration: m.watched ? "line-through" : "none", color: m.watched ? "#888" : "#111" }}>
                    {m.title}
                  </span>
                  <button style={styles.ghost} onClick={() => toggleWatched(m)}>{m.watched ? "Watched" : "Mark watched"}</button>
                  <button style={styles.ghost} onClick={() => { setEditId(m.id); setEditTitle(m.title); }}>Edit</button>
                  <button style={styles.remove} onClick={() => removeMovie(m.id)}>Remove</button>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
const styles = {
  card: { background: "#fff", border: "1px solid #e5e7eb", borderRadius: 12, padding: "1.5rem", maxWidth: 560, margin: "0 auto" },
  h2: { marginTop: 0 },
  row: { display: "flex", gap: "0.5rem", marginBottom: "1rem" },
  input: { flex: 1, padding: "0.55rem 0.7rem", borderRadius: 8, border: "1px solid #ccc" },
  add: { border: "none", background: "#1db954", color: "#fff", borderRadius: 8, padding: "0.55rem 1rem", fontWeight: 700, cursor: "pointer" },
  list: { listStyle: "none", padding: 0, display: "grid", gap: "0.5rem" },
  item: { display: "flex", alignItems: "center", gap: "0.4rem", background: "#f6f6f6", borderRadius: 8, padding: "0.5rem 0.75rem" },
  save: { border: "none", background: "#2874f0", color: "#fff", borderRadius: 6, padding: "0.35rem 0.7rem", cursor: "pointer", fontWeight: 700 },
  remove: { border: "1px solid #e23744", color: "#e23744", background: "#fff", borderRadius: 6, padding: "0.35rem 0.6rem", cursor: "pointer", fontSize: "0.82rem" },
  ghost: { border: "1px solid #ccc", background: "#fff", borderRadius: 6, padding: "0.35rem 0.6rem", cursor: "pointer", fontSize: "0.82rem" },
  muted: { color: "#999" },
};
