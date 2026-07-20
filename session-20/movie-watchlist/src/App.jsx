import { lazy, Suspense } from "react";

// Task 4: code splitting with React.lazy — the Watchlist (and the Firestore
// SDK it imports) loads as a SEPARATE chunk, shrinking the initial bundle.
const Watchlist = lazy(() => import("./pages/Watchlist.jsx"));

export default function App() {
  return (
    <main style={styles.page}>
      <h1>🎬 Movie Watchlist</h1>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading watchlist…</p>}>
        <Watchlist />
      </Suspense>
    </main>
  );
}
const styles = { page: { fontFamily: "system-ui, sans-serif", maxWidth: 640, margin: "0 auto", padding: "2rem 1.5rem" } };
