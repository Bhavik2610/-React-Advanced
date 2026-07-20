import { useState, useCallback, memo } from "react";

// Task 3: SongItem is wrapped in React.memo, so it only re-renders when ITS
// props actually change. The console.log lets you watch which items render.
const SongItem = memo(function SongItem({ song, onToggle }) {
  console.log("render SongItem:", song.name);
  return (
    <li style={styles.item}>
      <span>{song.name}</span>
      <button
        style={song.favorite ? styles.favOn : styles.favOff}
        onClick={() => onToggle(song.id)}
      >
        {song.favorite ? "★ Favorited" : "☆ Favorite"}
      </button>
    </li>
  );
});

const INITIAL = [
  { id: 1, name: "Kesariya", favorite: false },
  { id: 2, name: "Shape of You", favorite: false },
  { id: 3, name: "Blinding Lights", favorite: false },
  { id: 4, name: "Levitating", favorite: false },
];

export default function PlaylistManager() {
  const [songs, setSongs] = useState(INITIAL);

  // Task 3: useCallback keeps this function's IDENTITY stable across renders.
  // Because it doesn't change, the memoized SongItems whose song didn't change
  // will NOT re-render when one song is toggled. (Without useCallback, a new
  // function would be created every render and every SongItem would re-render.)
  const toggleFavorite = useCallback((id) => {
    setSongs((prev) =>
      prev.map((s) => (s.id === id ? { ...s, favorite: !s.favorite } : s))
    );
  }, []);

  return (
    <div style={styles.wrap}>
      <p style={styles.meta}>Open the console and toggle a favorite — only that one row logs a render.</p>
      <ul style={styles.list}>
        {songs.map((song) => (
          <SongItem key={song.id} song={song} onToggle={toggleFavorite} />
        ))}
      </ul>
    </div>
  );
}

const styles = {
  wrap: { background: "#121212", padding: "1.25rem", borderRadius: 14 },
  meta: { color: "#b3b3b3", fontSize: "0.85rem", marginTop: 0 },
  list: { listStyle: "none", padding: 0, display: "grid", gap: "0.5rem" },
  item: { display: "flex", justifyContent: "space-between", alignItems: "center", background: "#181818", borderRadius: 8, padding: "0.6rem 0.9rem", color: "#fff" },
  favOn: { border: "none", background: "#1db954", color: "#fff", borderRadius: 6, padding: "0.35rem 0.8rem", cursor: "pointer", fontWeight: 700 },
  favOff: { border: "1px solid #555", background: "transparent", color: "#ddd", borderRadius: 6, padding: "0.35rem 0.8rem", cursor: "pointer" },
};
