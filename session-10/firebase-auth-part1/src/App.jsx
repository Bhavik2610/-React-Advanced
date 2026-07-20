import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase.js";
import SignUp from "./components/SignUp.jsx";
import Login from "./components/Login.jsx";
import LogoutButton from "./components/LogoutButton.jsx";

export default function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Task 4: listen for auth state changes and keep `user` in sync.
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div style={styles.page}>
      {/* Task 4: show the logged-in user's email at the top */}
      <header style={styles.header}>
        <strong>Firebase Auth — Part 1</strong>
        <span>{user ? `Logged in: ${user.email}` : "Not logged in"}</span>
      </header>

      <main style={styles.main}>
        {loading ? (
          <p>Checking session…</p>
        ) : user ? (
          <div style={styles.welcome}>
            <p>Welcome, <strong>{user.email}</strong> 🎉</p>
            <LogoutButton />
          </div>
        ) : (
          <div style={styles.forms}>
            <SignUp />
            <Login />
          </div>
        )}
      </main>
    </div>
  );
}

const styles = {
  page: { fontFamily: "system-ui, sans-serif", minHeight: "100vh", background: "#f7f7f7" },
  header: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem 1.5rem", background: "#fff", borderBottom: "1px solid #eee" },
  main: { maxWidth: 640, margin: "2rem auto", padding: "0 1.5rem" },
  forms: { display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" },
  welcome: { background: "#fff", border: "1px solid #eee", borderRadius: 12, padding: "1.5rem", textAlign: "center" },
};
