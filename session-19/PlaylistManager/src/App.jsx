import { useState } from "react";
import LoginForm from "./components/LoginForm.jsx";
import PlaylistList from "./components/PlaylistList.jsx";

export default function App() {
  // Task 2: isLoggedIn boolean toggles the whole UI.
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");

  function handleLogin(userEmail) {
    setEmail(userEmail);
    setIsLoggedIn(true);
  }

  return (
    <main style={styles.page}>
      <h1>Playlist Manager</h1>
      {isLoggedIn ? (
        <>
          <p style={styles.welcome}>Welcome, <strong>{email}</strong> 🎉</p>
          <PlaylistList />
        </>
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </main>
  );
}
const styles = {
  page: { fontFamily: "system-ui, sans-serif", maxWidth: 640, margin: "0 auto", padding: "2rem 1.5rem" },
  welcome: { textAlign: "center", color: "#2874f0" },
};
