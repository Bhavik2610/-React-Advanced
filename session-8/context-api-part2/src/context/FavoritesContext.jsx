import { createContext, useContext, useReducer, useMemo } from "react";

// Task 2: FavoritesContext holds an array of favorited restaurant IDs,
// managed by a reducer (ADD / REMOVE).
const FavoritesContext = createContext(null);

function favoritesReducer(state, action) {
  switch (action.type) {
    case "ADD_FAVORITE":
      return state.includes(action.payload) ? state : [...state, action.payload];
    case "REMOVE_FAVORITE":
      return state.filter((id) => id !== action.payload);
    default:
      return state;
  }
}

export function FavoritesProvider({ children }) {
  const [favorites, dispatch] = useReducer(favoritesReducer, []);
  const value = useMemo(() => ({ favorites, dispatch }), [favorites]);
  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
}
export const useFavorites = () => useContext(FavoritesContext);
