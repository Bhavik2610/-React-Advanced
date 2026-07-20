import { useState } from "react";

// Task 1: a controlled login form using plain React useState.
// "Controlled" = React state is the single source of truth for each input;
// value comes from state and onChange writes back to state.
export default function LoginControlled() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted({ email, password });
  }

  return (
    <div style={styles.card}>
      <h2 style={styles.h2}>1 · Controlled login (useState)</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input style={styles.input} type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input style={styles.input} type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit" style={styles.btn}>Submit</button>
      </form>
      {submitted && (
        <pre style={styles.out}>{JSON.stringify(submitted, null, 2)}</pre>
      )}
    </div>
  );
}
const styles = {
  card: { background: "#fff", border: "1px solid #e5e7eb", borderRadius: 12, padding: "1.25rem" },
  h2: { marginTop: 0, fontSize: "1.05rem" },
  form: { display: "grid", gap: "0.6rem" },
  input: { padding: "0.55rem 0.7rem", borderRadius: 8, border: "1px solid #ccc" },
  btn: { border: "none", background: "#2874f0", color: "#fff", borderRadius: 8, padding: "0.55rem", fontWeight: 700, cursor: "pointer" },
  out: { background: "#f6f6f6", padding: "0.75rem", borderRadius: 8, fontSize: "0.85rem" },
};
