import { createContext, useContext, useReducer, useMemo } from "react";
import { cartReducer } from "./cartReducer.js";

// Task 5: CartContext wraps the AI-generated cart reducer.
const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, []);
  const value = useMemo(() => ({ cart, dispatch }), [cart]);
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
export const useCart = () => useContext(CartContext);
