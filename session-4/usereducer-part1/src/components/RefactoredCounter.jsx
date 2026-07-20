import { useReducer } from "react";

// Task 4: refactor a useState counter to useReducer.
//
// BEFORE (useState):
//   const [count, setCount] = useState(0);
//   const increment = () => setCount(count + 1);
//   const decrement = () => setCount(count - 1);
//   const reset = () => setCount(0);
//
// AFTER (useReducer): all the update logic is centralized in one reducer,
// and the component just dispatches named actions.

function reducer(count, action) {
  switch (action.type) {
    case "increment": return count + 1;
    case "decrement": return count - 1;
    case "reset": return 0;
    default: return count;
  }
}

export default function RefactoredCounter() {
  // Note: state here is just a number, not an object — useReducer works with
  // any state shape.
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div style={styles.card}>
      <h3 style={styles.h3}>Count: {count}</h3>
      <div style={styles.row}>
        <button style={styles.btn} onClick={() => dispatch({ type: "increment" })}>Increment</button>
        <button style={styles.btn} onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
        <button style={styles.reset} onClick={() => dispatch({ type: "reset" })}>Reset</button>
      </div>
    </div>
  );
}

const styles = {
  card: { border: "1px solid #e5e7eb", borderRadius: 12, padding: "1.25rem", background: "#fff" },
  h3: { marginTop: 0 },
  row: { display: "flex", gap: "0.5rem", flexWrap: "wrap" },
  btn: { border: "none", background: "#2874f0", color: "#fff", borderRadius: 8, padding: "0.5rem 0.9rem", fontWeight: 700, cursor: "pointer" },
  reset: { border: "1px solid #ccc", background: "#fff", borderRadius: 8, padding: "0.5rem 0.9rem", fontWeight: 600, cursor: "pointer" },
};
