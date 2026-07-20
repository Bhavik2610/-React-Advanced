import RestaurantList from "./components/RestaurantList.jsx";
export default function App() {
  return (
    <main style={styles.page}>
      <h1>Async Redux (Thunk)</h1>
      <RestaurantList />
    </main>
  );
}
const styles = { page: { fontFamily: "system-ui, sans-serif", maxWidth: 640, margin: "0 auto", padding: "2rem 1.5rem" } };
