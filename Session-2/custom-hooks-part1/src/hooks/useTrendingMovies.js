import { useState, useEffect } from "react";

// Task 2: moves the TMDB fetch logic out of the component into a hook.
// Returns loading, error, and data (the movie list).
export default function useTrendingMovies() {
  const apiKey = import.meta.env.VITE_TMDB_API_KEY;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!apiKey) {
      setError("No TMDB key found. Copy .env.example to .env and add VITE_TMDB_API_KEY.");
      setLoading(false);
      return;
    }
    let cancelled = false;
    async function run() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`
        );
        if (!res.ok) throw new Error(`Request failed: ${res.status}`);
        const json = await res.json();
        if (!cancelled) setData(json.results || []);
      } catch (err) {
        if (!cancelled) setError(err.message);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    run();
    return () => { cancelled = true; };
  }, [apiKey]);

  return { loading, error, data };
}
