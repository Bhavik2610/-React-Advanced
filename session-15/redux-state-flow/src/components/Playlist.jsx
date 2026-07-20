import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addSong, removeSong } from "../redux/playlistSlice.js";

export default function Playlist() {
  // Task 1: useSelector reads the playlist slice from the store.
  const playlist = useSelector((state) => state.playlist);
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");

  // Task 2: dispatch addSong with a generated unique id.
  function handleAdd(e) {
    e.preventDefault();
    if (!title.trim() || !artist.trim()) return;
    dispatch(addSong({ id: crypto.randomUUID(), title: title.trim(), artist: artist.trim() }));
    setTitle("");
    setArtist("");
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
              <span><strong>{song.title}</strong> — {song.artist}</span>
              <button style={styles.remove} onClick={() => dispatch(removeSong(song.id))}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
const styles = {
  card: { background: "#fff", border: "1px solid #e5e7eb", borderRadius: 12, padding: "1.5rem" },
  h2: { marginTop: 0 },
  row: { display: "flex", gap: "0.5rem", marginBottom: "1rem", flexWrap: "wrap" },
  input: { flex: 1, minWidth: 120, padding: "0.55rem 0.7rem", borderRadius: 8, border: "1px solid #ccc" },
  add: { border: "none", background: "#1db954", color: "#fff", borderRadius: 8, padding: "0.55rem 1.1rem", fontWeight: 700, cursor: "pointer" },
  list: { listStyle: "none", padding: 0, display: "grid", gap: "0.5rem" },
  item: { display: "flex", justifyContent: "space-between", alignItems: "center", background: "#f6f6f6", borderRadius: 8, padding: "0.55rem 0.85rem" },
  remove: { border: "1px solid #e23744", color: "#e23744", background: "#fff", borderRadius: 6, padding: "0.3rem 0.7rem", cursor: "pointer", fontSize: "0.85rem" },
  muted: { color: "#999" },
};
