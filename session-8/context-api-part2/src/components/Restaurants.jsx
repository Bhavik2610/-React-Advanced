import { useUser } from "../context/UserContext.jsx";
import { useFavorites } from "../context/FavoritesContext.jsx";

const RESTAURANTS = [
  { id: "r1", name: "The Biryani House" },
  { id: "r2", name: "Sushi Bay" },
  { id: "r3", name: "Cafe Mocha" },
];

// Task 2: consumes TWO nested contexts (user + favorites).
export default function Restaurants() {
  const { user } = useUser();
  const { favorites, dispatch } = useFavorites();

  return (
    <div>
      <p style={styles.hi}>Hi {user.name} — your favorites: {favorites.length}</p>
      <ul style={styles.list}>
        {RESTAURANTS.map((r) => {
          const isFav = favorites.includes(r.id);
          return (
            <li key={r.id} style={styles.row}>
              <span>{r.name}</span>
              <button
                style={isFav ? styles.favOn : styles.favOff}
                onClick={() =>
                  dispatch({ type: isFav ? "REMOVE_FAVORITE" : "ADD_FAVORITE", payload: r.id })
                }
              >
                {isFav ? "★ Favorited" : "☆ Add favorite"}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
const styles = {
  hi: { color: "#666", fontSize: "0.9rem" },
  list: { listStyle: "none", padding: 0, display: "grid", gap: "0.5rem" },
  row: { display: "flex", justifyContent: "space-between", alignItems: "center", background: "#fff", border: "1px solid #eee", borderRadius: 8, padding: "0.55rem 0.85rem" },
  favOn: { border: "none", background: "#e23744", color: "#fff", borderRadius: 6, padding: "0.35rem 0.7rem", cursor: "pointer", fontWeight: 700 },
  favOff: { border: "1px solid #ccc", background: "#fff", borderRadius: 6, padding: "0.35rem 0.7rem", cursor: "pointer" },
};
