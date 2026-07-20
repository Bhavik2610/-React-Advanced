// Task 4 — the "BEFORE": a Context-based cart, shown for reference.
// The app now uses the Redux cartSlice instead of this.
import { createContext, useContext, useReducer } from "react";

const CartContext = createContext(null);

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD": {
      const ex = state.find((i) => i.id === action.payload.id);
      if (ex) return state.map((i) => i.id === ex.id ? { ...i, qty: i.qty + 1 } : i);
      return [...state, { ...action.payload, qty: 1 }];
    }
    case "REMOVE": return state.filter((i) => i.id !== action.payload);
    case "CLEAR": return [];
    default: return state;
  }
}

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, []);
  return <CartContext.Provider value={{ cart, dispatch }}>{children}</CartContext.Provider>;
}
export const useCart = () => useContext(CartContext);
