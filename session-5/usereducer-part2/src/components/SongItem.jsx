import { useState } from "react";

// SongItem is a CHILD component. It receives the song plus the `dispatch`
// function as props (Task 4 hint), so it can send actions to the reducer
// that lives in the parent.

export default function SongItem({ song, dispatch }) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(song.name);

  function saveEdit() {
    const name = draft.trim();
    if (!name) return;
    // Task 4: dispatch EDIT_SONG from the child.
    dispatch({ type: "EDIT_SONG", payload: { id: song.id, name } });
    setEditing(false);
  }

  return (
    <li style={styles.item}>
      {editing ? (
        <>
          <input
            style={styles.input}
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            autoFocus
          />
          <button style={styles.save} onClick={saveEdit}>Save</button>
          <button style={styles.ghost} onClick={() => { setDraft(song.name); setEditing(false); }}>Cancel</button>
        </>
      ) : (
        <>
          <span style={styles.name}>{song.name}</span>
          <button style={styles.ghost} onClick={() => setEditing(true)}>Edit</button>
          {/* Task 3: dispatch REMOVE_SONG from the child. */}
          <button style={styles.del} onClick={() => dispatch({ type: "REMOVE_SONG", payload: song.id })}>
            Delete
          </button>
        </>
      )}
    </li>
  );
}

const styles = {
  item: { display: "flex", alignItems: "center", gap: "0.5rem", background: "#181818", borderRadius: 8, padding: "0.6rem 0.9rem" },
  name: { flex: 1, color: "#fff" },
  input: { flex: 1, padding: "0.4rem 0.6rem", borderRadius: 6, border: "1px solid #444", background: "#0f0f0f", color: "#fff" },
  save: { border: "none", background: "#1db954", color: "#fff", borderRadius: 6, padding: "0.35rem 0.7rem", cursor: "pointer", fontWeight: 700 },
  ghost: { border: "1px solid #555", background: "transparent", color: "#ddd", borderRadius: 6, padding: "0.35rem 0.7rem", cursor: "pointer" },
  del: { border: "none", background: "#e23744", color: "#fff", borderRadius: 6, padding: "0.35rem 0.7rem", cursor: "pointer", fontWeight: 700 },
};
