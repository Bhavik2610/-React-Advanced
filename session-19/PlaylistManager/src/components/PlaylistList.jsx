import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addSong, editSong, deleteSong } from "../redux/playlistSlice.js";

// Task 4: display all songs; delete via a Remove button. Also supports
// add (Task 3) and inline edit (Task 5).
export default function PlaylistList() {
  const playlist = useSelector((state) => state.playlist);
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [editId, setEditId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editArtist, setEditArtist] = useState("");

  function handleAdd(e) {
    e.preventDefault();
    if (!title.trim() || !artist.trim()) return;
    dispatch(addSong({ id: crypto.randomUUID(), title: title.trim(), artist: artist.trim() }));
    setTitle("");
    setArtist("");
  }

  function saveEdit(id) {
    dispatch(editSong({ id, title: editTitle.trim(), artist: editArtist.trim() }));
    setEditId(null);
  }

  return (
    <div style={styles.card}>
      <h2 style={styles.h2}>Playlist</h2>

      <form onSubmit={handleAdd} style={styles.row}>
        <input style={styles.input} placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input style={styles.input} placeholder="Artist" value={artist} onChange={(e) => setArtist(e.target.value)} />
        <button type="submit" style={styles.add}>Add</button>
      </form>

      {playlist.length === 0 ? (
        <p style={styles.muted}>No songs yet.</p>
      ) : (
        <ul style={styles.list}>
          {playlist.map((song) => (
            <li key={song.id} style={styles.item}>
              {editId === song.id ? (
                <>
                  <input style={styles.input} value={editTitle} onChange={(e) => setEditTitle(e.target.value)} />
                  <input style={styles.input} value={editArtist} onChange={(e) => setEditArtist(e.target.value)} />
                  <button style={styles.save} onClick={() => saveEdit(song.id)}>Save</button>
                  <button style={styles.ghost} onClick={() => setEditId(null)}>Cancel</button>
                </>
              ) : (
                <>
                  <span style={{ flex: 1 }}><strong>{song.title}</strong> — {song.artist}</span>
                  <button style={styles.ghost} onClick={() => { setEditId(song.id); setEditTitle(song.title); setEditArtist(song.artist); }}>Edit</button>
                  <button style={styles.remove} onClick={() => dispatch(deleteSong(song.id))}>Remove</button>
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
  row: { display: "flex", gap: "0.5rem", marginBottom: "1rem", flexWrap: "wrap" },
  input: { flex: 1, minWidth: 100, padding: "0.5rem 0.7rem", borderRadius: 8, border: "1px solid #ccc" },
  add: { border: "none", background: "#1db954", color: "#fff", borderRadius: 8, padding: "0.5rem 1rem", fontWeight: 700, cursor: "pointer" },
  list: { listStyle: "none", padding: 0, display: "grid", gap: "0.5rem" },
  item: { display: "flex", alignItems: "center", gap: "0.5rem", background: "#f6f6f6", borderRadius: 8, padding: "0.55rem 0.8rem" },
  save: { border: "none", background: "#2874f0", color: "#fff", borderRadius: 6, padding: "0.35rem 0.7rem", cursor: "pointer", fontWeight: 700 },
  remove: { border: "1px solid #e23744", color: "#e23744", background: "#fff", borderRadius: 6, padding: "0.35rem 0.7rem", cursor: "pointer" },
  ghost: { border: "1px solid #ccc", background: "#fff", borderRadius: 6, padding: "0.35rem 0.7rem", cursor: "pointer" },
  muted: { color: "#999" },
};
