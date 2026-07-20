// Task 5: reducer for a shopping cart (add / remove / clear).
// (Generated with AI assistance — see ai_cart_reducer.txt — then integrated.)
export function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      const existing = state.find((item) => item.id === action.payload.id);
      if (existing) {
        // already in cart -> bump quantity
        return state.map((item) =>
          item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...state, { ...action.payload, qty: 1 }];
    }
    case "REMOVE_ITEM":
      return state.filter((item) => item.id !== action.payload);
    case "CLEAR_CART":
      return [];
    default:
      return state;
  }
}
