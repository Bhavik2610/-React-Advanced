import { useReducer } from "react";

// Task 3: cart item quantity manager. Same reducer pattern, but a cart item
// exists so its minimum quantity is 1 (can't drop below one).

const initialState = { quantity: 1 };

function reducer(state, action) {
  switch (action.type) {
    case "increase":
      return { quantity: state.quantity + 1 };
    case "decrease":
      return { quantity: Math.max(1, state.quantity - 1) };
    case "reset":
      return { quantity: 1 };
    default:
      return state;
  }
}

export default function CartItem({ name = "Wireless Headphones", price = 79 }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={styles.card}>
      <div>
        <div style={styles.name}>{name}</div>
        <div style={styles.price}>${price} each · ${price * state.quantity} total</div>
      </div>
      <div style={styles.qtyBox}>
        <button style={styles.qtyBtn} onClick={() => dispatch({ type: "decrease" })} disabled={state.quantity === 1}>−</button>
        <span style={styles.qty}>{state.quantity}</span>
        <button style={styles.qtyBtn} onClick={() => dispatch({ type: "increase" })}>+</button>
        <button style={styles.reset} onClick={() => dispatch({ type: "reset" })}>Reset</button>
      </div>
    </div>
  );
}

const styles = {
  card: { display: "flex", justifyContent: "space-between", alignItems: "center", border: "1px solid #e5e7eb", borderRadius: 12, padding: "1rem 1.25rem", background: "#fff", gap: "1rem", flexWrap: "wrap" },
  name: { fontWeight: 600 },
  price: { color: "#666", fontSize: "0.85rem" },
  qtyBox: { display: "flex", alignItems: "center", gap: "0.5rem" },
  qtyBtn: { width: 32, height: 32, border: "1px solid #ccc", background: "#fff", borderRadius: 6, fontSize: "1.1rem", cursor: "pointer" },
  qty: { minWidth: 24, textAlign: "center", fontWeight: 700 },
  reset: { border: "1px solid #ccc", background: "#fff", borderRadius: 6, padding: "0.35rem 0.7rem", cursor: "pointer", marginLeft: "0.5rem" },
};
