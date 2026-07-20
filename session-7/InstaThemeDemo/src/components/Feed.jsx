import PostList from "./PostList.jsx";
// Intermediate level 1 — does NOT receive or forward the theme either.
export default function Feed() {
  return (
    <section style={{ padding: "1.5rem" }}>
      <h2 style={{ marginTop: 0 }}>Feed</h2>
      <PostList />
    </section>
  );
}
