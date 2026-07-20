import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addSong, removeSong } from "../redux/playlistActions.js";

export default function PlaylistManager() {
  // useSelector reads the playlist array from the store; the component
  // re-renders automatically whenever the store changes.
  const playlist = useSelector((state) => state);
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function handleAdd(e) {
    e.preventDefault();
    if (!name.trim()) return;
    dispatch(addSong(name.trim())); // Task 3: dispatch addSong
    setName("");
  }

  return (
    <div style={styles.card}>
      <h2 style={styles.h2}>Playlist Manager</h2>

      <form onSubmit={handleAdd} style={styles.row}>
        <input style={styles.input} placeholder="Add a song…" value={name} onChange={(e) => setName(e.target.value)} />
        <button type="submit" style={styles.add}>Add</button>
      </form>

      {playlist.length === 0 ? (
        <p style={styles.muted}>No songs yet.</p>
      ) : (
        <ul style={styles.list}>
          {playlist.map((song, index) => (
            <li key={index} style={styles.item}>
              <span>{song}</span>
              {/* Task 4: dispatch removeSong with the index */}
              <button style={styles.remove} onClick={() => dispatch(removeSong(index))}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

const styles = {
  card: { background: "#fff", border: "1px solid #e5e7eb", borderRadius: 12, padding: "1.5rem", maxWidth: 420 },
  h2: { marginTop: 0 },
  row: { display: "flex", gap: "0.5rem", marginBottom: "1rem" },
  input: { flex: 1, padding: "0.6rem 0.75rem", borderRadius: 8, border: "1px solid #ccc" },
  add: { border: "none", background: "#1db954", color: "#fff", borderRadius: 8, padding: "0.6rem 1.1rem", fontWeight: 700, cursor: "pointer" },
  list: { listStyle: "none", padding: 0, display: "grid", gap: "0.5rem" },
  item: { display: "flex", justifyContent: "space-between", alignItems: "center", background: "#f6f6f6", borderRadius: 8, padding: "0.55rem 0.85rem" },
  remove: { border: "1px solid #e23744", color: "#e23744", background: "#fff", borderRadius: 6, padding: "0.3rem 0.7rem", cursor: "pointer", fontSize: "0.85rem" },
  muted: { color: "#999" },
};
