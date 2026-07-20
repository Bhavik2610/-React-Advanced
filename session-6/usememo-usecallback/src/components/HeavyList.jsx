import { useState, useMemo, useCallback, memo } from "react";

const Row = memo(function Row({ label, onPick }) {
  return (
    <li style={styles.row} onClick={() => onPick(label)}>
      {label}
    </li>
  );
});

// Task 4: a component with an expensive list that used to rebuild on EVERY
// render — including every unrelated button click.
//
// BEFORE (the problem):
//   const items = buildExpensiveList();   // runs on every render
//   const handlePick = (x) => console.log(x);  // new function every render
//   -> clicking the counter re-ran the expensive build AND re-rendered rows.
//
// AFTER (this version): useMemo caches the list; useCallback keeps the handler
// stable so the memoized Rows don't re-render when only the counter changes.

export default function HeavyList() {
  const [count, setCount] = useState(0);

  // useMemo: build the big list once (empty deps). Clicking the counter no
  // longer rebuilds it — watch the console: "Building heavy list…" logs once.
  const items = useMemo(() => {
    console.log("Building heavy list… (expensive)");
    const arr = [];
    for (let i = 0; i < 20000; i++) arr.push(`Item ${i + 1}`);
    return arr;
  }, []);

  // useCallback: stable handler identity so memoized Rows stay put.
  const handlePick = useCallback((label) => {
    console.log("Picked:", label);
  }, []);

  return (
    <div>
      <button style={styles.btn} onClick={() => setCount((c) => c + 1)}>
        Unrelated button — clicked {count} times
      </button>
      <p style={styles.meta}>
        List has {items.length} items (showing 50). Clicking the button re-renders
        the component but does NOT rebuild the list or re-render the rows.
      </p>
      <ul style={styles.list}>
        {items.slice(0, 50).map((label) => (
          <Row key={label} label={label} onPick={handlePick} />
        ))}
      </ul>
    </div>
  );
}

const styles = {
  btn: { border: "none", background: "#7c3aed", color: "#fff", borderRadius: 8, padding: "0.55rem 1rem", fontWeight: 700, cursor: "pointer" },
  meta: { color: "#666", fontSize: "0.85rem" },
  list: { listStyle: "none", padding: 0, display: "grid", gap: "0.25rem", maxHeight: 220, overflowY: "auto" },
  row: { background: "#fff", border: "1px solid #eee", borderRadius: 6, padding: "0.35rem 0.7rem", fontSize: "0.85rem", cursor: "pointer" },
};
