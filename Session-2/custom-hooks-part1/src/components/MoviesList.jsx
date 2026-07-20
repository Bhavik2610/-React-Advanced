import useTrendingMovies from "../hooks/useTrendingMovies.js";
// Task 2: component is tiny because the hook does the fetching.
export default function MoviesList() {
  const { loading, error, data } = useTrendingMovies();
  if (loading) return <p>Loading movies…</p>;
  if (error) return <p style={{ color: "#c0392b" }}>{error}</p>;
  return (
    <ul style={styles.list}>
      {data.slice(0, 8).map((m) => (
        <li key={m.id} style={styles.item}>{m.title || m.name}</li>
      ))}
    </ul>
  );
}
const styles = {
  list: { listStyle: "none", padding: 0, display: "grid", gap: "0.35rem" },
  item: { background: "#fff", border: "1px solid #eee", borderRadius: 6, padding: "0.45rem 0.7rem", fontSize: "0.9rem" },
};
