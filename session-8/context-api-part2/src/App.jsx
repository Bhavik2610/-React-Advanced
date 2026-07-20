import { useState } from "react";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import { UserProvider } from "./context/UserContext.jsx";
import { FavoritesProvider } from "./context/FavoritesContext.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import { PlaylistProvider } from "./context/PlaylistContext.jsx";

import Header from "./components/Header.jsx";
import Restaurants from "./components/Restaurants.jsx";
import Playlist from "./components/Playlist.jsx";
import Profile from "./components/Profile.jsx";
import Cart from "./components/Cart.jsx";

function Shell() {
  // Unrelated state used to demonstrate Task 3: clicking this re-renders Shell
  // but the memoized Playlist does NOT re-render (check the console).
  const [count, setCount] = useState(0);

  return (
    <main style={styles.page}>
      <h1>Context API — Part 2</h1>

      <section style={styles.section}><h2>1 · Theme (context + reducer)</h2><Header /></section>

      <section style={styles.section}>
        <h2>2 · Zomato favorites (nested UserContext + FavoritesContext)</h2>
        <Restaurants />
      </section>

      <section style={styles.section}>
        <h2>3 · Memoized Playlist</h2>
        <button style={styles.btn} onClick={() => setCount((c) => c + 1)}>
          Unrelated re-render: {count}
        </button>
        <p style={styles.note}>Click it and watch the console — "Playlist rendered" does NOT log again.</p>
        <Playlist />
      </section>

      <section style={styles.section}><h2>4 · Auth (login / logout / update name)</h2><Profile /></section>

      <section style={styles.section}><h2>5 · Cart (AI-generated reducer)</h2><Cart /></section>
    </main>
  );
}

// Nested context providers (Task 2's concept applied to the whole app).
export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <UserProvider>
          <FavoritesProvider>
            <CartProvider>
              <PlaylistProvider>
                <Shell />
              </PlaylistProvider>
            </CartProvider>
          </FavoritesProvider>
        </UserProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

const styles = {
  page: { fontFamily: "system-ui, sans-serif", maxWidth: 640, margin: "0 auto", padding: "2rem 1.5rem" },
  section: { marginBottom: "2rem" },
  btn: { border: "none", background: "#7c3aed", color: "#fff", borderRadius: 8, padding: "0.5rem 1rem", fontWeight: 700, cursor: "pointer" },
  note: { color: "#666", fontSize: "0.85rem" },
};
