import PlaylistManager from "./components/PlaylistManager.jsx";

export default function App() {
  return (
    <main style={styles.page}>
      <h1>Playlist Manager — useReducer Part 2</h1>
      <p style={styles.note}>Add, edit, and delete songs. Delete/Edit are dispatched from the child SongItem.</p>
      <PlaylistManager />
    </main>
  );
}

const styles = {
  page: { fontFamily: "system-ui, sans-serif", maxWidth: 560, margin: "0 auto", padding: "2rem 1.5rem" },
  note: { color: "#666" },
};
