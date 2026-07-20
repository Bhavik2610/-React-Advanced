import LikeButton from "./LikeButton.jsx";
// Post does NOT receive or forward `user` — no prop drilling.
export default function Post({ caption }) {
  return (
    <div style={styles.post}>
      <div style={styles.image}>📷</div>
      <p style={styles.caption}>{caption}</p>
      <LikeButton />
    </div>
  );
}
const styles = {
  post: { border: "1px solid #dbdbdb", borderRadius: 10, padding: "1rem", background: "#fff" },
  image: { height: 120, background: "#fafafa", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 32 },
  caption: { margin: "0.75rem 0", color: "#262626" },
};
