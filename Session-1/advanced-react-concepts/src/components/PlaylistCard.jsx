// Task 1: presentational component — displays whatever props it's given.
export default function PlaylistCard({ song, artist }) {
  return (
    <div style={styles.card}>
      <div style={styles.cover}>♪</div>
      <div>
        <div style={styles.song}>{song}</div>
        <div style={styles.artist}>{artist}</div>
      </div>
    </div>
  );
}
const styles = {
  card: { display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.75rem 1rem", background: "#181818", borderRadius: 10, width: 260 },
  cover: { width: 44, height: 44, borderRadius: 6, background: "#333", color: "#1db954", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 },
  song: { color: "#fff", fontWeight: 600, fontSize: "0.95rem" },
  artist: { color: "#b3b3b3", fontSize: "0.82rem" },
};
