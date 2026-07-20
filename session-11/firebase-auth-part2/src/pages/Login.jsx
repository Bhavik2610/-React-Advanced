import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.js";

export default function Login() {
  const navigate = useNavigate();
  const [mode, setMode] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    try {
      if (mode === "login") await signInWithEmailAndPassword(auth, email, password);
      else await createUserWithEmailAndPassword(auth, email, password);
      navigate("/profile"); // go to a protected page after auth
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div style={styles.wrap}>
      <form onSubmit={handleSubmit} style={styles.card}>
        <h2 style={{ marginTop: 0 }}>{mode === "login" ? "Sign In" : "Create account"}</h2>
        <input style={styles.input} type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input style={styles.input} type="password" placeholder="Password (6+ chars)" value={password} onChange={(e) => setPassword(e.target.value)} required />
        {error && <p style={styles.err}>{error}</p>}
        <button type="submit" style={styles.btn}>{mode === "login" ? "Log in" : "Sign up"}</button>
        <button type="button" style={styles.toggle} onClick={() => { setMode(mode === "login" ? "signup" : "login"); setError(null); }}>
          {mode === "login" ? "Need an account? Sign up" : "Have an account? Log in"}
        </button>
      </form>
    </div>
  );
}
const styles = {
  wrap: { display: "flex", justifyContent: "center", padding: "3rem 1.5rem", fontFamily: "system-ui" },
  card: { display: "grid", gap: "0.7rem", width: 300, border: "1px solid #e5e7eb", borderRadius: 12, padding: "1.5rem", background: "#fff" },
  input: { padding: "0.6rem 0.75rem", borderRadius: 8, border: "1px solid #ccc" },
  btn: { border: "none", background: "#1db954", color: "#fff", borderRadius: 8, padding: "0.6rem", fontWeight: 700, cursor: "pointer" },
  toggle: { border: "none", background: "transparent", color: "#2874f0", cursor: "pointer", fontSize: "0.85rem" },
  err: { color: "#c0392b", fontSize: "0.85rem", margin: 0 },
};
