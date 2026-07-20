import { useState } from "react";
import { useAuth } from "../context/AuthContext.jsx";

// Task 4: login/logout + update display name via reducer actions.
export default function Profile() {
  const { user, dispatch } = useAuth();
  const [name, setName] = useState("");

  if (!user) {
    return (
      <button style={styles.primary} onClick={() => dispatch({ type: "LOGIN", payload: { name: "Bhavik" } })}>
        Log in
      </button>
    );
  }

  return (
    <div style={styles.box}>
      <p style={{ margin: 0 }}>Logged in as <strong>{user.name}</strong></p>
      <div style={styles.row}>
        <input
          style={styles.input}
          placeholder="New display name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          style={styles.primary}
          onClick={() => { if (name.trim()) { dispatch({ type: "UPDATE_NAME", payload: name.trim() }); setName(""); } }}
        >
          Update name
        </button>
        <button style={styles.ghost} onClick={() => dispatch({ type: "LOGOUT" })}>Log out</button>
      </div>
    </div>
  );
}
const styles = {
  box: { display: "grid", gap: "0.6rem" },
  row: { display: "flex", gap: "0.5rem", flexWrap: "wrap" },
  input: { padding: "0.5rem 0.7rem", borderRadius: 8, border: "1px solid #ccc" },
  primary: { border: "none", background: "#2874f0", color: "#fff", borderRadius: 8, padding: "0.5rem 0.9rem", fontWeight: 700, cursor: "pointer" },
  ghost: { border: "1px solid #ccc", background: "#fff", borderRadius: 8, padding: "0.5rem 0.9rem", cursor: "pointer" },
};
