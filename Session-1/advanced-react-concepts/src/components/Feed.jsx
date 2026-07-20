import Post from "./Post.jsx";
// Feed doesn't touch `user` either.
export default function Feed() {
  return (
    <div style={{ display: "grid", gap: "1rem" }}>
      <Post caption="Sunset at the beach 🌅" />
      <Post caption="Best coffee in town ☕" />
    </div>
  );
}
