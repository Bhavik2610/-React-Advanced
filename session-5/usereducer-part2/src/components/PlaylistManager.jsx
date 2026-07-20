import { useReducer, useState } from "react";
import { playlistReducer, initialSongs } from "../reducers/playlistReducer.js";
import SongItem from "./SongItem.jsx";

// Task 2: the parent owns the reducer. It renders the list and the add form,
// and passes `dispatch` down to each SongItem child.
export default function PlaylistManager() {
  const [songs, dispatch] = useReducer(playlistReducer, initialSongs);
  const [newSong, setNewSong] = useState("");

  function handleAdd(e) {
    e.preventDefault();
    const name = newSong.trim();
    if (!name) return;
    dispatch({ type: "ADD_SONG", payload: name });
    setNewSong("");
  }

  return (
    <div style={styles.wrap}>
      <form onSubmit={handleAdd} style={styles.form}>
        <input
          style={styles.input}
          placeholder="Add a song…"
          value={newSong}
          onChange={(e) => setNewSong(e.target.value)}
        />
        <button type="submit" style={styles.add}>Add</button>
      </form>

      {songs.length === 0 ? (
        <p style={styles.empty}>No songs yet — add one above.</p>
      ) : (
        <ul style={styles.list}>
          {songs.map((song) => (
            // Pass dispatch to the child so it can remove/edit.
            <SongItem key={song.id} song={song} dispatch={dispatch} />
          ))}
        </ul>
      )}
    </div>
  );
}

const styles = {
  wrap: { background: "#121212", padding: "1.25rem", borderRadius: 14 },
  form: { display: "flex", gap: "0.5rem", marginBottom: "1rem" },
  input: { flex: 1, padding: "0.6rem 0.8rem", borderRadius: 8, border: "1px solid #444", background: "#0f0f0f", color: "#fff", fontSize: "0.95rem" },
  add: { border: "none", background: "#1db954", color: "#fff", borderRadius: 8, padding: "0.6rem 1.2rem", fontWeight: 700, cursor: "pointer" },
  list: { listStyle: "none", padding: 0, display: "grid", gap: "0.5rem" },
  empty: { color: "#888" },
};
