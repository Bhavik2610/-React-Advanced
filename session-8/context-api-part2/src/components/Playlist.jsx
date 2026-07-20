import { memo } from "react";
import { usePlaylist } from "../context/PlaylistContext.jsx";

// Task 3: React.memo + a memoized context value = this does NOT re-render
// when unrelated app state (the counter in App) changes. Watch the console.
const Playlist = memo(function Playlist() {
  const { songs } = usePlaylist();
  console.log("Playlist rendered");
  return (
    <ul style={styles.list}>
      {songs.map((s) => <li key={s} style={styles.item}>{s}</li>)}
    </ul>
  );
});
const styles = {
  list: { listStyle: "none", padding: 0, display: "grid", gap: "0.35rem" },
  item: { background: "#181818", color: "#fff", borderRadius: 6, padding: "0.45rem 0.8rem" },
};
export default Playlist;
