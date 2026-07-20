import { ThemeProvider, useTheme } from "./context/ThemeContext.jsx";
import Navbar from "./components/Navbar.jsx";
import Feed from "./components/Feed.jsx";

// This wrapper reads the theme just to paint the whole page background.
function Shell() {
  const { theme } = useTheme();
  const dark = theme === "dark";
  return (
    <div style={{ minHeight: "100vh", fontFamily: "system-ui, sans-serif", background: dark ? "#000" : "#f7f7f7", color: dark ? "#eee" : "#111", transition: "background 0.2s" }}>
      <Navbar />
      <Feed />
    </div>
  );
}

// Task 1 & 4: the Provider wraps everything ONCE. No component below passes a
// theme prop — Navbar and the deeply nested PostCard both pull it from context.
export default function App() {
  return (
    <ThemeProvider>
      <Shell />
    </ThemeProvider>
  );
}
