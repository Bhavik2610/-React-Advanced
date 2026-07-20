import useFetchData from "../hooks/useFetchData.js";
// Task 4: clean component — all fetch plumbing lives in the hook.
export default function FlipkartProductList() {
  const { loading, data, error } = useFetchData("https://fakestoreapi.com/products");
  if (loading) return <p>Loading products…</p>;
  if (error) return <p style={{ color: "#c0392b" }}>Error: {error}</p>;
  return (
    <ul style={styles.list}>
      {data.map((p) => <li key={p.id} style={styles.item}>{p.title}</li>)}
    </ul>
  );
}
const styles = {
  list: { listStyle: "none", padding: 0, display: "grid", gap: "0.4rem" },
  item: { background: "#fff", border: "1px solid #eee", borderRadius: 6, padding: "0.5rem 0.75rem", fontSize: "0.9rem" },
};
