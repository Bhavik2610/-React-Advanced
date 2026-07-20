import { signOut } from "firebase/auth";
import { auth } from "../firebase.js";

// Task 5: AI-generated logout function, adapted to this project.
// Signing out triggers onAuthStateChanged in App, which clears the UI.
export async function logout() {
  try {
    await signOut(auth);
  } catch (err) {
    console.error("Logout failed:", err);
    alert("Could not log out. Please try again.");
  }
}

export default function LogoutButton() {
  return (
    <button onClick={logout} style={styles.btn}>Log out</button>
  );
}
const styles = { btn: { border: "1px solid #e23744", color: "#e23744", background: "#fff", borderRadius: 8, padding: "0.45rem 0.9rem", cursor: "pointer", fontWeight: 600 } };
