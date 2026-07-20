import SearchMovies from "./components/SearchMovies.jsx";
export default function App() {
  return (
    <main style={styles.page}>
      <h1>Movie Search — Custom Hooks Part 2</h1>
      <p style={styles.note}>Type to search; results refetch as the query changes.</p>
      <SearchMovies />
    </main>
  );
}
const styles = {
  page: { fontFamily: "system-ui, sans-serif", maxWidth: 720, margin: "0 auto", padding: "2rem 1.5rem" },
  note: { color: "#666" },
};
