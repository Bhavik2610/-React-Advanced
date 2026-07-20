import { createContext, useContext, useState, useMemo } from "react";

// Task 3: the value object is memoized with useMemo so its identity stays
// stable across provider re-renders. Combined with a React.memo child
// (Playlist.jsx), the child won't re-render when unrelated app state changes.
const PlaylistContext = createContext(null);

export function PlaylistProvider({ children }) {
  const [songs] = useState([
    "Kesariya", "Shape of You", "Blinding Lights", "Levitating",
  ]);
  // Without useMemo, this object would be a NEW reference every render,
  // forcing every consumer to re-render. useMemo keeps it stable.
  const value = useMemo(() => ({ songs }), [songs]);
  return <PlaylistContext.Provider value={value}>{children}</PlaylistContext.Provider>;
}
export const usePlaylist = () => useContext(PlaylistContext);
