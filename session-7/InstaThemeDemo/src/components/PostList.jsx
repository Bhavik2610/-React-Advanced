import PostCard from "./PostCard.jsx";
// Intermediate level 2 — does NOT receive or forward the theme.
export default function PostList() {
  return (
    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
      <PostCard caption="Sunset at the beach 🌅" />
      <PostCard caption="Best coffee in town ☕" />
    </div>
  );
}
