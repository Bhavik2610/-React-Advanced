import RestaurantManager from "./components/RestaurantManager.jsx";
export default function App() {
  return (
    <main style={styles.page}>
      <h1>Restaurant Manager — Firestore CRUD</h1>
      <p style={styles.note}>Add restaurants, see the list, and filter by cuisine.</p>
      <RestaurantManager />
    </main>
  );
}
const styles = {
  page: { fontFamily: "system-ui, sans-serif", maxWidth: 560, margin: "0 auto", padding: "2rem 1.5rem" },
  note: { color: "#666" },
};
