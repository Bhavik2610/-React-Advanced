import PlaylistManager from "./components/PlaylistManager.jsx";
export default function App() {
  return (
    <main style={styles.page}>
      <h1>Redux Fundamentals</h1>
      <PlaylistManager />
    </main>
  );
}
const styles = { page: { fontFamily: "system-ui, sans-serif", maxWidth: 560, margin: "0 auto", padding: "2rem 1.5rem" } };
