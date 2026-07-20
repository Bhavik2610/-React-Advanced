import { useTheme } from "../context/ThemeContext.jsx";
// Task 3: updates the theme in context; every consumer re-renders instantly.
export default function ToggleThemeButton() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button onClick={toggleTheme} style={styles.btn}>
      {theme === "light" ? "🌙 Dark mode" : "☀️ Light mode"}
    </button>
  );
}
const styles = { btn: { border: "1px solid currentColor", background: "transparent", color: "inherit", borderRadius: 8, padding: "0.45rem 0.9rem", cursor: "pointer", fontWeight: 600 } };
