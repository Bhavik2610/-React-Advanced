import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase.js";
import { useAuth } from "../context/AuthContext.jsx";

export default function Navbar() {
  const { user } = useAuth();

  // Task 2: sign out. onAuthStateChanged then updates the UI automatically.
  const handleLogout = () => signOut(auth);

  // Task 1 & 3: greeting uses display name, then email, then "Guest".
  const greeting = user ? `Welcome, ${user.displayName || user.email}` : "Welcome, Guest";

  return (
    <nav style={styles.nav}>
      <div style={styles.left}>
        <Link to="/" style={styles.brand}>Spotify</Link>
        <Link to="/profile" style={styles.link}>Profile</Link>
        <Link to="/myorders" style={styles.link}>My Orders</Link>
      </div>
      <div style={styles.right}>
        <span style={styles.greet}>{greeting}</span>
        {user ? (
          <button style={styles.logout} onClick={handleLogout}>Log out</button>
        ) : (
          <Link to="/login" style={styles.signin}>Sign In</Link>
        )}
      </div>
    </nav>
  );
}
const styles = {
  nav: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.9rem 1.5rem", background: "#000", color: "#fff" },
  left: { display: "flex", gap: "1.25rem", alignItems: "center" },
  brand: { color: "#1db954", fontWeight: 800, fontSize: "1.2rem", textDecoration: "none" },
  link: { color: "#ddd", textDecoration: "none", fontSize: "0.9rem" },
  right: { display: "flex", gap: "1rem", alignItems: "center" },
  greet: { color: "#b3b3b3", fontSize: "0.9rem" },
  logout: { border: "1px solid #fff", background: "transparent", color: "#fff", borderRadius: 20, padding: "0.4rem 1rem", cursor: "pointer", fontWeight: 600 },
  signin: { background: "#1db954", color: "#fff", borderRadius: 20, padding: "0.45rem 1.1rem", textDecoration: "none", fontWeight: 700 },
};
