import { createContext, useContext, useState } from "react";

// Task 1: ThemeContext holds the global theme ("light" | "dark") plus a
// function to toggle it. Any component in the tree can read these without
// props being passed down manually.

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Convenience hook so components can do: const { theme, toggleTheme } = useTheme();
export function useTheme() {
  return useContext(ThemeContext);
}
