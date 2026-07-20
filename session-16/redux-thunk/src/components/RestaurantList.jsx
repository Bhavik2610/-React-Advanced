import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchRestaurants, testAsyncAction } from "../redux/restaurantsSlice.js";

export default function RestaurantList() {
  const { items, loading, error } = useSelector((state) => state.restaurants);
  const dispatch = useDispatch();
  const [city, setCity] = useState("");

  // Fetch all restaurants on first load.
  useEffect(() => {
    dispatch(fetchRestaurants());
  }, [dispatch]);

  return (
    <div style={styles.card}>
      <h2 style={styles.h2}>Restaurants</h2>

      {/* Task 1: confirm async middleware works (logs to console) */}
      <button style={styles.ghost} onClick={() => dispatch(testAsyncAction())}>
        Test async action (check console)
      </button>

      {/* Task 5: filter by city */}
      <div style={styles.row}>
        <input
          style={styles.input}
          placeholder="City (e.g. Ahmedabad)…"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button style={styles.add} onClick={() => dispatch(fetchRestaurants(city))}>Fetch</button>
        <button style={styles.ghost} onClick={() => { setCity(""); dispatch(fetchRestaurants()); }}>Reset</button>
      </div>

      {/* Task 3: loading message */}
      {loading && <p>Loading restaurants…</p>}
      {/* Task 4: error message */}
      {error && <p style={styles.err}>Error: {error}</p>}

      {!loading && !error && (
        <>
          <p style={styles.muted}>{items.length} result(s)</p>
          <ul style={styles.list}>
            {items.slice(0, 50).map((r) => (
              <li key={r.id ?? r.name} style={styles.item}>
                {r.name ?? r.restaurant ?? "(unnamed)"}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

const styles = {
  card: { background: "#fff", border: "1px solid #e5e7eb", borderRadius: 12, padding: "1.5rem", maxWidth: 520 },
  h2: { marginTop: 0 },
  row: { display: "flex", gap: "0.5rem", margin: "1rem 0" },
  input: { flex: 1, padding: "0.55rem 0.7rem", borderRadius: 8, border: "1px solid #ccc" },
  add: { border: "none", background: "#1db954", color: "#fff", borderRadius: 8, padding: "0.55rem 1rem", fontWeight: 700, cursor: "pointer" },
  ghost: { border: "1px solid #ccc", background: "#fff", borderRadius: 8, padding: "0.5rem 0.9rem", cursor: "pointer" },
  list: { listStyle: "none", padding: 0, display: "grid", gap: "0.3rem", maxHeight: 320, overflowY: "auto" },
  item: { background: "#f6f6f6", borderRadius: 6, padding: "0.45rem 0.75rem", fontSize: "0.9rem" },
  err: { color: "#c0392b" },
  muted: { color: "#999", fontSize: "0.85rem" },
};
