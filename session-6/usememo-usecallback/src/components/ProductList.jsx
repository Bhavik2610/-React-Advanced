import { useMemo, useState, useEffect } from "react";

// Build 1000 products once, outside the component, so it isn't recreated
// on every render.
const PRODUCTS = Array.from({ length: 1000 }, (_, i) => ({
  id: i,
  name: `Product ${i + 1}`,
  price: (Math.random() * 100 + 1).toFixed(2),
}));

export default function ProductList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [mountMs, setMountMs] = useState(null);

  // Task 1: rough measure of initial render+paint time.
  const renderStart = performance.now();
  useEffect(() => {
    setMountMs((performance.now() - renderStart).toFixed(1));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // run once, on mount

  // Task 2: memoize the filtered list. This filter only re-runs when
  // `PRODUCTS` or `searchTerm` changes — NOT on unrelated re-renders.
  const filtered = useMemo(() => {
    const t0 = performance.now();
    const result = PRODUCTS.filter((p) =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    console.log(`Filtered ${PRODUCTS.length} products in ${(performance.now() - t0).toFixed(2)}ms`);
    return result;
  }, [searchTerm]); // PRODUCTS is constant, so only searchTerm matters here

  return (
    <div>
      <p style={styles.meta}>
        {mountMs != null && <>Initial render ≈ <strong>{mountMs} ms</strong> · </>}
        Showing {filtered.length} of {PRODUCTS.length}
      </p>
      <input
        style={styles.input}
        placeholder="Filter products by name…"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul style={styles.list}>
        {filtered.slice(0, 100).map((p) => (
          <li key={p.id} style={styles.item}>
            <span>{p.name}</span>
            <span style={styles.price}>${p.price}</span>
          </li>
        ))}
      </ul>
      {filtered.length > 100 && (
        <p style={styles.meta}>(showing first 100 for display; filtering runs over all 1000)</p>
      )}
    </div>
  );
}

const styles = {
  meta: { color: "#666", fontSize: "0.85rem" },
  input: { width: "100%", padding: "0.6rem 0.8rem", borderRadius: 8, border: "1px solid #ccc", marginBottom: "0.75rem" },
  list: { listStyle: "none", padding: 0, display: "grid", gap: "0.3rem", maxHeight: 260, overflowY: "auto" },
  item: { display: "flex", justifyContent: "space-between", background: "#fff", border: "1px solid #eee", borderRadius: 6, padding: "0.4rem 0.7rem", fontSize: "0.9rem" },
  price: { color: "#2874f0", fontWeight: 600 },
};
