import Playlist from "./components/Playlist.jsx";
import Cart from "./components/Cart.jsx";
export default function App() {
  return (
    <main style={styles.page}>
      <h1>Redux State Flow</h1>
      <div style={styles.grid}>
        <Playlist />
        <Cart />
      </div>
    </main>
  );
}
const styles = {
  page: { fontFamily: "system-ui, sans-serif", maxWidth: 820, margin: "0 auto", padding: "2rem 1.5rem" },
  grid: { display: "grid", gap: "1.5rem", gridTemplateColumns: "1fr 1fr" },
};
