import { useUser } from "../context/UserContext.jsx";
// Only this component needs the user — it reads it directly from context.
export default function LikeButton() {
  const user = useUser();
  return <button style={styles.btn}>❤️ Liked by {user ? user.name : "guest"}</button>;
}
const styles = { btn: { border: "none", background: "#efefef", borderRadius: 8, padding: "0.5rem 0.9rem", cursor: "pointer", fontWeight: 600, color: "#262626" } };
