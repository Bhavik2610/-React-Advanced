import { useTheme } from "../context/ThemeContext.jsx";
import ToggleThemeButton from "./ToggleThemeButton.jsx";
// Task 2: Navbar consumes the theme and changes its background accordingly.
export default function Navbar() {
  const { theme } = useTheme();
  const dark = theme === "dark";
  return (
    <nav style={{ ...styles.nav, background: dark ? "#111" : "#fff", color: dark ? "#fff" : "#111", borderColor: dark ? "#333" : "#eee" }}>
      <span style={styles.brand}>InstaThemeDemo</span>
      <ToggleThemeButton />
    </nav>
  );
}
const styles = {
  nav: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem 1.5rem", borderBottom: "1px solid" },
  brand: { fontWeight: 800, fontSize: "1.2rem" },
};
