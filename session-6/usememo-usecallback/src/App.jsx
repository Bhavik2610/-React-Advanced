import ProductList from "./components/ProductList.jsx";
import PlaylistManager from "./components/PlaylistManager.jsx";
import HeavyList from "./components/HeavyList.jsx";

export default function App() {
  return (
    <main style={styles.page}>
      <h1>useMemo & useCallback</h1>

      <section style={styles.section}>
        <h2>1 & 2 · ProductList + useMemo filter</h2>
        <ProductList />
      </section>

      <section style={styles.section}>
        <h2>3 · PlaylistManager + useCallback</h2>
        <PlaylistManager />
      </section>

      <section style={styles.section}>
        <h2>4 · HeavyList refactor</h2>
        <HeavyList />
      </section>
    </main>
  );
}

const styles = {
  page: { fontFamily: "system-ui, sans-serif", maxWidth: 640, margin: "0 auto", padding: "2rem 1.5rem" },
  section: { marginBottom: "2rem" },
};
