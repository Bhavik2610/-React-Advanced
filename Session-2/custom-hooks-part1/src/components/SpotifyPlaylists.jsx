import useFetchData from "../hooks/useFetchData.js";
// Task 4: refactored to use the generic useFetchData.
// (Uses local mock data at /playlists.json standing in for the Spotify API,
//  since real Spotify needs OAuth. Swap the URL for the real endpoint later.)
// Constraint: the hook is called once, at the top level — never in a loop
// or an if-statement.
export default function SpotifyPlaylists() {
  const { data, loading, error } = useFetchData("/playlists.json");
  if (loading) return <p>Loading playlists…</p>;
  if (error) return <p style={{ color: "#c0392b" }}>Error: {error}</p>;
  return (
    <ul style={styles.list}>
      {data.map((p) => (
        <li key={p.id} style={styles.item}>
          <strong>{p.name}</strong> — {p.songs} songs
        </li>
      ))}
    </ul>
  );
}
const styles = {
  list: { listStyle: "none", padding: 0, display: "grid", gap: "0.35rem" },
  item: { background: "#fff", border: "1px solid #eee", borderRadius: 6, padding: "0.45rem 0.7rem", fontSize: "0.9rem" },
};
