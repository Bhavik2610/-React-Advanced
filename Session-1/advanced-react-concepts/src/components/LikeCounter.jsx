import { useState } from "react";
// Task 2: local state with useState; each click re-renders with a new count.
export default function LikeCounter() {
  const [likes, setLikes] = useState(0);
  return (
    <div style={styles.wrap}>
      <button style={styles.btn} onClick={() => setLikes(likes + 1)}>
        {likes > 0 ? "❤️" : "🤍"} Like
      </button>
      <span style={styles.count}>{likes} {likes === 1 ? "like" : "likes"}</span>
    </div>
  );
}
const styles = {
  wrap: { display: "flex", alignItems: "center", gap: "0.75rem" },
  btn: { border: "1px solid #dbdbdb", background: "#fff", borderRadius: 8, padding: "0.5rem 1rem", cursor: "pointer", fontSize: "0.95rem", fontWeight: 600 },
  count: { color: "#262626", fontWeight: 600 },
};
