import { firebaseConfig } from "./firebase.js";

export default function App() {
  return (
    <main style={styles.page}>
      <h1>Environment Config</h1>

      {/* Task 3: message differs by dev vs prod build */}
      <p style={styles.welcome}>{process.env.REACT_APP_WELCOME_MSG ?? "(no message set)"}</p>

      {/* Task 1: display the Spotify key from .env.local */}
      <div style={styles.card}>
        <strong>REACT_APP_SPOTIFY_API_KEY:</strong>{" "}
        <code>{process.env.REACT_APP_SPOTIFY_API_KEY ?? "(not set)"}</code>
      </div>

      {/* Task 2: show that firebase.js read the key from env */}
      <div style={styles.card}>
        <strong>Firebase apiKey (from firebase.js):</strong>{" "}
        <code>{firebaseConfig.apiKey ?? "(not set)"}</code>
      </div>

      <p style={styles.note}>
        Both keys come from environment variables — none are hardcoded in the source.
      </p>
    </main>
  );
}
const styles = {
  page: { fontFamily: "system-ui, sans-serif", maxWidth: 620, margin: "3rem auto", padding: "0 1.5rem" },
  welcome: { fontSize: "1.25rem", fontWeight: 700, color: "#2874f0" },
  card: { background: "#f6f6f6", borderRadius: 8, padding: "0.8rem 1rem", margin: "0.6rem 0" },
  note: { color: "#666", fontSize: "0.9rem", marginTop: "1rem" },
};
