import { createContext, useContext, useReducer, useMemo } from "react";

// Task 1: Context + useReducer to toggle light/dark.
const ThemeContext = createContext(null);

function themeReducer(state, action) {
  switch (action.type) {
    case "TOGGLE": return state === "light" ? "dark" : "light";
    default: return state;
  }
}

export function ThemeProvider({ children }) {
  const [theme, dispatch] = useReducer(themeReducer, "light");
  // memoized value object (Task 3 pattern applied everywhere)
  const value = useMemo(() => ({ theme, dispatch }), [theme]);
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
export const useTheme = () => useContext(ThemeContext);
