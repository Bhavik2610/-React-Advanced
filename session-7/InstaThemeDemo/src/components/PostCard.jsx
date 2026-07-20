import { useTheme } from "../context/ThemeContext.jsx";
// PostCard is 3 levels below App (App > Feed > PostList > PostCard) and reads
// the theme directly from context — no prop was passed to get it here.
export default function PostCard({ caption }) {
  const { theme } = useTheme();
  const dark = theme === "dark";
  return (
    <div style={{ ...styles.card, background: dark ? "#1e1e1e" : "#fff", color: dark ? "#eee" : "#111", borderColor: dark ? "#333" : "#e5e7eb" }}>
      <div style={{ ...styles.image, background: dark ? "#2a2a2a" : "#fafafa" }}>📷</div>
      <p style={styles.caption}>{caption}</p>
    </div>
  );
}
const styles = {
  card: { border: "1px solid", borderRadius: 12, padding: "1rem", width: 260 },
  image: { height: 120, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 32 },
  caption: { margin: "0.75rem 0 0" },
};
