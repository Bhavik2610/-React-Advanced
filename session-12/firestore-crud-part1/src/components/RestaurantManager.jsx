import { useEffect, useMemo, useState } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase.js";

// Firestore concepts: a COLLECTION ("restaurants") holds DOCUMENTS, and each
// document is an object like { name, cuisine }.
const restaurantsRef = collection(db, "restaurants");

export default function RestaurantManager() {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [filter, setFilter] = useState("");

  // Task 3: fetch all documents with getDocs().
  async function fetchRestaurants() {
    setLoading(true);
    setError(null);
    try {
      const snapshot = await getDocs(restaurantsRef);
      setRestaurants(snapshot.docs.map((d) => ({ id: d.id, ...d.data() })));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchRestaurants();
  }, []);

  // Task 2: add a new document to the 'restaurants' collection.
  async function handleAdd(e) {
    e.preventDefault();
    if (!name.trim() || !cuisine.trim()) return;
    try {
      await addDoc(restaurantsRef, { name: name.trim(), cuisine: cuisine.trim() });
      setName("");
      setCuisine("");
      await fetchRestaurants(); // re-fetch so the new one shows
    } catch (err) {
      setError(err.message);
    }
  }

  // Task 4: real-time client-side filter by cuisine.
  const filtered = useMemo(
    () =>
      restaurants.filter((r) =>
        r.cuisine.toLowerCase().includes(filter.toLowerCase())
      ),
    [restaurants, filter]
  );

  return (
    <div style={styles.wrap}>
      {/* Task 2: add form */}
      <form onSubmit={handleAdd} style={styles.form}>
        <input style={styles.input} placeholder="Restaurant name" value={name} onChange={(e) => setName(e.target.value)} />
        <input style={styles.input} placeholder="Cuisine" value={cuisine} onChange={(e) => setCuisine(e.target.value)} />
        <button type="submit" style={styles.add}>Add restaurant</button>
      </form>

      {/* Task 4: filter input */}
      <input
        style={styles.filter}
        placeholder="Filter by cuisine (e.g. Italian)…"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />

      {loading && <p>Loading…</p>}
      {error && <p style={styles.err}>Error: {error}</p>}
      {!loading && !error && filtered.length === 0 && <p style={styles.muted}>No restaurants to show.</p>}

      {/* Task 3: list */}
      <ul style={styles.list}>
        {filtered.map((r) => (
          <li key={r.id} style={styles.item}>
            <strong>{r.name}</strong>
            <span style={styles.badge}>{r.cuisine}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  wrap: { display: "grid", gap: "1rem" },
  form: { display: "flex", gap: "0.5rem", flexWrap: "wrap" },
  input: { flex: 1, minWidth: 140, padding: "0.6rem 0.75rem", borderRadius: 8, border: "1px solid #ccc" },
  add: { border: "none", background: "#1db954", color: "#fff", borderRadius: 8, padding: "0.6rem 1rem", fontWeight: 700, cursor: "pointer" },
  filter: { padding: "0.6rem 0.75rem", borderRadius: 8, border: "1px solid #ccc" },
  list: { listStyle: "none", padding: 0, display: "grid", gap: "0.5rem" },
  item: { display: "flex", justifyContent: "space-between", alignItems: "center", background: "#fff", border: "1px solid #eee", borderRadius: 8, padding: "0.6rem 0.9rem" },
  badge: { background: "#eef4ff", color: "#2874f0", borderRadius: 999, padding: "0.2rem 0.6rem", fontSize: "0.8rem", fontWeight: 600 },
  err: { color: "#c0392b" },
  muted: { color: "#999" },
};
