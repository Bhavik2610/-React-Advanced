import { useState } from "react";
import useSearchMovies from "../hooks/useSearchMovies.js";
import Spinner from "./Spinner.jsx";

// Types a query -> the hook fetches -> shows spinner / error / results.
export default function SearchMovies() {
  const [query, setQuery] = useState("");
  const { data, loading, error } = useSearchMovies(query);

  return (
    <div>
      <input
        style={styles.input}
        placeholder="Search movies (e.g. Batman)…"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {loading && <div style={{ margin: "1rem 0" }}><Spinner /></div>}
      {error && <p style={styles.error}>{error}</p>}

      {!loading && !error && (
        <ul style={styles.grid}>
          {data.map((movie) => (
            <li key={movie.imdbID} style={styles.card}>
              {movie.Poster && movie.Poster !== "N/A" && (
                <img src={movie.Poster} alt={movie.Title} style={styles.poster} />
              )}
              <div style={styles.title}>{movie.Title}</div>
              <div style={styles.year}>{movie.Year}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

const styles = {
  input: { width: "100%", padding: "0.7rem 0.9rem", borderRadius: 8, border: "1px solid #ccc", fontSize: "1rem" },
  error: { color: "#c0392b", marginTop: "1rem" },
  grid: { listStyle: "none", padding: 0, marginTop: "1rem", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))", gap: "1rem" },
  card: { background: "#fff", border: "1px solid #eee", borderRadius: 10, padding: "0.6rem", textAlign: "center" },
  poster: { width: "100%", height: 200, objectFit: "cover", borderRadius: 6 },
  title: { fontWeight: 600, fontSize: "0.9rem", marginTop: "0.5rem" },
  year: { color: "#666", fontSize: "0.8rem" },
};
