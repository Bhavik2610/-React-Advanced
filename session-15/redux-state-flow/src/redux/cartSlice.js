import { createSlice } from "@reduxjs/toolkit";

// Task 4: the Redux version of the cart (refactored from Context — see
// src/context/cartContext.js for the "before").
const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart(state, action) {
      const existing = state.find((i) => i.id === action.payload.id);
      if (existing) existing.qty += 1;
      else state.push({ ...action.payload, qty: 1 });
    },
    removeFromCart(state, action) {
      return state.filter((i) => i.id !== action.payload);
    },
    clearCart() {
      return [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
