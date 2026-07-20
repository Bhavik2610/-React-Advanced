import PlaylistCard from "./components/PlaylistCard.jsx";
import LikeCounter from "./components/LikeCounter.jsx";
import Feed from "./components/Feed.jsx";
import FlipkartProductList from "./components/FlipkartProductList.jsx";
import { UserContext } from "./context/UserContext.jsx";

const SONGS = [
  { song: "Kesariya", artist: "Arijit Singh" },
  { song: "Shape of You", artist: "Ed Sheeran" },
  { song: "Blinding Lights", artist: "The Weeknd" },
];

const currentUser = { name: "Bhavik", id: 1 };

export default function App() {
  return (
    <main style={styles.page}>
      <h1>Advanced React — Session 1</h1>

      <section style={styles.section}>
        <h2>1 · Props — PlaylistCard ×3</h2>
        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", background: "#121212", padding: "1rem", borderRadius: 12 }}>
          {SONGS.map((s) => <PlaylistCard key={s.song} song={s.song} artist={s.artist} />)}
        </div>
      </section>

      <section style={styles.section}>
        <h2>2 · State — LikeCounter</h2>
        <LikeCounter />
      </section>

      <section style={styles.section}>
        <h2>3 · Context — no prop drilling</h2>
        <UserContext.Provider value={currentUser}>
          <Feed />
        </UserContext.Provider>
      </section>

      <section style={styles.section}>
        <h2>4 · Custom hook — FlipkartProductList</h2>
        <FlipkartProductList />
      </section>
    </main>
  );
}

const styles = {
  page: { fontFamily: "system-ui, sans-serif", maxWidth: 640, margin: "0 auto", padding: "2rem 1.5rem" },
  section: { marginBottom: "2rem" },
};
