import Clock from "./components/Clock.jsx";
import MoviesList from "./components/MoviesList.jsx";
import PostCard from "./components/PostCard.jsx";
import SpotifyPlaylists from "./components/SpotifyPlaylists.jsx";

export default function App() {
  return (
    <main style={styles.page}>
      <h1>Custom Hooks — Part 1</h1>

      <section style={styles.section}>
        <h2>1 · useCurrentTime — live clock</h2>
        <Clock />
      </section>

      <section style={styles.section}>
        <h2>2 · useTrendingMovies — TMDB</h2>
        <MoviesList />
      </section>

      <section style={styles.section}>
        <h2>3 · useLikeButton — PostCard</h2>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <PostCard caption="Sunset at the beach 🌅" initialLikes={12} />
          <PostCard caption="Best coffee in town ☕" initialLikes={4} />
        </div>
      </section>

      <section style={styles.section}>
        <h2>4 · useFetchData — playlists</h2>
        <SpotifyPlaylists />
      </section>
    </main>
  );
}

const styles = {
  page: { fontFamily: "system-ui, sans-serif", maxWidth: 640, margin: "0 auto", padding: "2rem 1.5rem" },
  section: { marginBottom: "2rem" },
};
