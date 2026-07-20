import useLikeButton from "../hooks/useLikeButton.js";
// Task 3: Instagram-style like button powered by the hook.
export default function PostCard({ caption, initialLikes = 0 }) {
  const { liked, count, toggle } = useLikeButton(initialLikes);
  return (
    <div style={styles.card}>
      <div style={styles.image}>📷</div>
      <p style={styles.caption}>{caption}</p>
      <button style={styles.btn} onClick={toggle}>
        {liked ? "❤️" : "🤍"} {count} {count === 1 ? "like" : "likes"}
      </button>
    </div>
  );
}
const styles = {
  card: { border: "1px solid #dbdbdb", borderRadius: 10, padding: "1rem", background: "#fff", width: 280 },
  image: { height: 120, background: "#fafafa", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 32 },
  caption: { margin: "0.75rem 0", color: "#262626" },
  btn: { border: "1px solid #dbdbdb", background: "#fff", borderRadius: 8, padding: "0.5rem 0.9rem", cursor: "pointer", fontWeight: 600 },
};
