import { useState, useEffect } from "react";

// Custom hook for searching movies via the OMDb API.
//
// Task 1: takes `query` as a parameter and fetches movies.
// Task 2: manages + returns loading and error states.
// Task 3: refetches automatically when `query` changes (query is in the deps).
// Task 4: a second useEffect logs whenever the movie data changes.
// Task 5: debounces the query (see note) — an implemented improvement.

export default function useSearchMovies(query) {
  const apiKey = import.meta.env.VITE_OMDB_API_KEY;

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // --- Task 3: this effect re-runs every time `query` changes ---
  useEffect(() => {
    // Empty query: clear results, don't fetch.
    if (!query || !query.trim()) {
      setData([]);
      setError(null);
      setLoading(false);
      return;
    }
    if (!apiKey) {
      setError("No OMDb key found. Copy .env.example to .env and add VITE_OMDB_API_KEY.");
      return;
    }

    let cancelled = false;

    async function run() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(
          `https://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(query)}`
        );
        if (!res.ok) throw new Error(`Request failed: ${res.status}`);
        const json = await res.json();
        // OMDb returns Response:"False" (with an Error message) for no results.
        if (json.Response === "False") throw new Error(json.Error || "No results found.");
        if (!cancelled) setData(json.Search || []);
      } catch (err) {
        if (!cancelled) {
          setError(err.message);
          setData([]);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    // Task 5 improvement: debounce — wait 400ms after the user stops typing
    // before firing the request, so we don't hit the API on every keystroke.
    const timer = setTimeout(run, 400);

    return () => {
      cancelled = true;      // ignore results from a stale request
      clearTimeout(timer);   // cancel a pending debounced request
    };
  }, [query, apiKey]);

  // --- Task 4: second useEffect, depends on `data` ---
  useEffect(() => {
    console.log(`Movie data changed — ${data.length} result(s).`);
  }, [data]);

  return { data, loading, error };
}
