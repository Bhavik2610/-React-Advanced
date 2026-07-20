import PlaylistCounter from "./components/PlaylistCounter.jsx";
import CartItem from "./components/CartItem.jsx";
import RefactoredCounter from "./components/RefactoredCounter.jsx";

export default function App() {
  return (
    <main style={styles.page}>
      <h1>useReducer — Part 1</h1>

      <section style={styles.section}>
        <h2>1 & 2 · PlaylistCounter (decrement stops at 0)</h2>
        <PlaylistCounter />
      </section>

      <section style={styles.section}>
        <h2>3 · Flipkart-style CartItem</h2>
        <CartItem name="Wireless Headphones" price={79} />
      </section>

      <section style={styles.section}>
        <h2>4 · useState → useReducer refactor</h2>
        <RefactoredCounter />
      </section>
    </main>
  );
}

const styles = {
  page: { fontFamily: "system-ui, sans-serif", maxWidth: 600, margin: "0 auto", padding: "2rem 1.5rem" },
  section: { marginBottom: "1.75rem" },
};
