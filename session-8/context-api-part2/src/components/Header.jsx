import { useTheme } from "../context/ThemeContext.jsx";
// Task 1: shows the current theme and toggles it via a dispatched action.
export default function Header() {
  const { theme, dispatch } = useTheme();
  const dark = theme === "dark";
  return (
    <header style={{ ...styles.header, background: dark ? "#111" : "#fff", color: dark ? "#fff" : "#111" }}>
      <strong>Current theme: {theme}</strong>
      <button style={styles.btn} onClick={() => dispatch({ type: "TOGGLE" })}>
        Toggle theme
      </button>
    </header>
  );
}
const styles = {
  header: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.9rem 1.25rem", borderRadius: 10, border: "1px solid #ddd" },
  btn: { border: "1px solid currentColor", background: "transparent", color: "inherit", borderRadius: 8, padding: "0.4rem 0.9rem", cursor: "pointer", fontWeight: 600 },
};
