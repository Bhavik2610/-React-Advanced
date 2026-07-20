import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.js";

// Task 2: register a new user with email + password.
export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    setMessage(null);
    try {
      const cred = await createUserWithEmailAndPassword(auth, email, password);
      setMessage(`Account created for ${cred.user.email}`);
      setEmail("");
      setPassword("");
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <form onSubmit={handleSubmit} style={styles.card}>
      <h3 style={styles.h3}>Sign Up</h3>
      <input style={styles.input} type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input style={styles.input} type="password" placeholder="Password (6+ chars)" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <button type="submit" style={styles.btn}>Create account</button>
      {message && <p style={styles.ok}>{message}</p>}
      {error && <p style={styles.err}>{error}</p>}
    </form>
  );
}
const styles = {
  card: { display: "grid", gap: "0.6rem", border: "1px solid #e5e7eb", borderRadius: 12, padding: "1.25rem", background: "#fff", width: 260 },
  h3: { margin: 0 },
  input: { padding: "0.55rem 0.7rem", borderRadius: 8, border: "1px solid #ccc" },
  btn: { border: "none", background: "#1db954", color: "#fff", borderRadius: 8, padding: "0.55rem", fontWeight: 700, cursor: "pointer" },
  ok: { color: "#047857", fontSize: "0.85rem", margin: 0 },
  err: { color: "#c0392b", fontSize: "0.85rem", margin: 0 },
};
