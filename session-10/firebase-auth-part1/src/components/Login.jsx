import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.js";

// Task 3: log in an existing user; show an error message if it fails.
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // On success, App's onAuthStateChanged updates the UI automatically.
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <form onSubmit={handleSubmit} style={styles.card}>
      <h3 style={styles.h3}>Login</h3>
      <input style={styles.input} type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input style={styles.input} type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <button type="submit" style={styles.btn}>Log in</button>
      {error && <p style={styles.err}>{error}</p>}
    </form>
  );
}
const styles = {
  card: { display: "grid", gap: "0.6rem", border: "1px solid #e5e7eb", borderRadius: 12, padding: "1.25rem", background: "#fff", width: 260 },
  h3: { margin: 0 },
  input: { padding: "0.55rem 0.7rem", borderRadius: 8, border: "1px solid #ccc" },
  btn: { border: "none", background: "#2874f0", color: "#fff", borderRadius: 8, padding: "0.55rem", fontWeight: 700, cursor: "pointer" },
  err: { color: "#c0392b", fontSize: "0.85rem", margin: 0 },
};
