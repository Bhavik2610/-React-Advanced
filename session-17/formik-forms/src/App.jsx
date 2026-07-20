import LoginControlled from "./components/LoginControlled.jsx";
import LoginFormik from "./components/LoginFormik.jsx";
import PlaylistForm from "./components/PlaylistForm.jsx";

export default function App() {
  return (
    <main style={styles.page}>
      <h1>Form Handling with Formik</h1>
      <div style={styles.grid}>
        <LoginControlled />
        <LoginFormik />
        <PlaylistForm />
      </div>
    </main>
  );
}
const styles = {
  page: { fontFamily: "system-ui, sans-serif", maxWidth: 820, margin: "0 auto", padding: "2rem 1.5rem" },
  grid: { display: "grid", gap: "1.25rem", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" },
};
