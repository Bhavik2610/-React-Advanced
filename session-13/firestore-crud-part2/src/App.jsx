import PlaylistEditor from "./components/PlaylistEditor.jsx";
import LiveCommentsFeed from "./components/LiveCommentsFeed.jsx";

export default function App() {
  return (
    <main style={styles.page}>
      <h1>Firestore CRUD — Part 2</h1>
      <div style={styles.grid}>
        <PlaylistEditor />
        <LiveCommentsFeed />
      </div>
    </main>
  );
}
const styles = {
  page: { fontFamily: "system-ui, sans-serif", maxWidth: 820, margin: "0 auto", padding: "2rem 1.5rem" },
  grid: { display: "grid", gap: "1.5rem", gridTemplateColumns: "1fr 1fr" },
};
