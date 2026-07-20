import { useCart } from "../context/CartContext.jsx";

const PRODUCTS = [
  { id: "p1", name: "Headphones", price: 79 },
  { id: "p2", name: "Keyboard", price: 119 },
];

// Task 5: uses the CartContext (AI-generated reducer) — add/remove/clear.
export default function Cart() {
  const { cart, dispatch } = useCart();
  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <div style={styles.wrap}>
      <div style={styles.row}>
        {PRODUCTS.map((p) => (
          <button key={p.id} style={styles.add} onClick={() => dispatch({ type: "ADD_ITEM", payload: p })}>
            + {p.name} (${p.price})
          </button>
        ))}
      </div>

      {cart.length === 0 ? <p style={styles.muted}>Cart is empty.</p> : (
        <>
          <ul style={styles.list}>
            {cart.map((i) => (
              <li key={i.id} style={styles.item}>
                {i.name} × {i.qty} — ${i.price * i.qty}
                <button style={styles.rm} onClick={() => dispatch({ type: "REMOVE_ITEM", payload: i.id })}>remove</button>
              </li>
            ))}
          </ul>
          <div style={styles.footer}>
            <strong>Total: ${total}</strong>
            <button style={styles.clear} onClick={() => dispatch({ type: "CLEAR_CART" })}>Clear cart</button>
          </div>
        </>
      )}
    </div>
  );
}
const styles = {
  wrap: { display: "grid", gap: "0.6rem" },
  row: { display: "flex", gap: "0.5rem", flexWrap: "wrap" },
  add: { border: "none", background: "#1db954", color: "#fff", borderRadius: 8, padding: "0.5rem 0.9rem", fontWeight: 700, cursor: "pointer" },
  list: { listStyle: "none", padding: 0, display: "grid", gap: "0.35rem" },
  item: { display: "flex", justifyContent: "space-between", alignItems: "center", background: "#fff", border: "1px solid #eee", borderRadius: 8, padding: "0.45rem 0.8rem" },
  rm: { border: "none", background: "transparent", color: "#e23744", cursor: "pointer", fontWeight: 600 },
  footer: { display: "flex", justifyContent: "space-between", alignItems: "center" },
  clear: { border: "1px solid #e23744", color: "#e23744", background: "#fff", borderRadius: 8, padding: "0.4rem 0.8rem", cursor: "pointer" },
  muted: { color: "#999" },
};
