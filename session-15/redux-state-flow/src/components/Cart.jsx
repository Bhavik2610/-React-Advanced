import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart, clearCart } from "../redux/cartSlice.js";

const PRODUCTS = [
  { id: "p1", name: "Headphones", price: 79 },
  { id: "p2", name: "Keyboard", price: 119 },
];

// Task 4: the cart now reads/writes Redux (refactored from Context).
export default function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <div style={styles.card}>
      <h2 style={styles.h2}>Cart (Redux)</h2>
      <div style={styles.row}>
        {PRODUCTS.map((p) => (
          <button key={p.id} style={styles.add} onClick={() => dispatch(addToCart(p))}>+ {p.name}</button>
        ))}
      </div>
      {cart.length === 0 ? <p style={styles.muted}>Empty.</p> : (
        <>
          <ul style={styles.list}>
            {cart.map((i) => (
              <li key={i.id} style={styles.item}>
                {i.name} × {i.qty}
                <button style={styles.rm} onClick={() => dispatch(removeFromCart(i.id))}>remove</button>
              </li>
            ))}
          </ul>
          <div style={styles.footer}>
            <strong>Total: ${total}</strong>
            <button style={styles.clear} onClick={() => dispatch(clearCart())}>Clear</button>
          </div>
        </>
      )}
    </div>
  );
}
const styles = {
  card: { background: "#fff", border: "1px solid #e5e7eb", borderRadius: 12, padding: "1.5rem" },
  h2: { marginTop: 0 },
  row: { display: "flex", gap: "0.5rem", marginBottom: "1rem" },
  add: { border: "none", background: "#2874f0", color: "#fff", borderRadius: 8, padding: "0.5rem 0.9rem", fontWeight: 700, cursor: "pointer" },
  list: { listStyle: "none", padding: 0, display: "grid", gap: "0.4rem" },
  item: { display: "flex", justifyContent: "space-between", alignItems: "center", background: "#f6f6f6", borderRadius: 8, padding: "0.45rem 0.8rem" },
  rm: { border: "none", background: "transparent", color: "#e23744", cursor: "pointer", fontWeight: 600 },
  footer: { display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "0.5rem" },
  clear: { border: "1px solid #e23744", color: "#e23744", background: "#fff", borderRadius: 8, padding: "0.35rem 0.8rem", cursor: "pointer" },
  muted: { color: "#999" },
};
