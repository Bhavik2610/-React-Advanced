import { useState } from "react";

// Task 2: simple auth form using useState. Calls onLogin(email) when the
// user submits with both fields filled. (No real backend — this toggles the
// app's isLoggedIn state.)
export default function LoginForm({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (email.trim() && password.trim()) onLogin(email.trim());
  }

  return (
    <form onSubmit={handleSubmit} style={styles.card}>
      <h2 style={styles.h2}>Log in</h2>
      <input style={styles.input} type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input style={styles.input} type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit" style={styles.btn}>Log in</button>
    </form>
  );
}
const styles = {
  card: { display: "grid", gap: "0.6rem", maxWidth: 300, margin: "3rem auto", border: "1px solid #e5e7eb", borderRadius: 12, padding: "1.5rem", background: "#fff" },
  h2: { margin: 0, textAlign: "center" },
  input: { padding: "0.55rem 0.7rem", borderRadius: 8, border: "1px solid #ccc" },
  btn: { border: "none", background: "#1db954", color: "#fff", borderRadius: 8, padding: "0.6rem", fontWeight: 700, cursor: "pointer" },
};
