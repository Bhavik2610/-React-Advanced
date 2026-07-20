import { useReducer } from "react";

// Tasks 1 & 2.
//
// A reducer is a pure function: (currentState, action) => newState.
// It never mutates state — it returns a fresh object.

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      // Task 2 (reducer guard): never let the count go below zero,
      // so a playlist can't have negative songs.
      return { count: Math.max(0, state.count - 1) };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
}

export default function PlaylistCounter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={styles.card}>
      <h3 style={styles.h3}>Playlist songs: {state.count}</h3>
      <div style={styles.row}>
        <button style={styles.btn} onClick={() => dispatch({ type: "increment" })}>+ Add song</button>
        {/* Task 2 (UI guard): also disable the button at zero. */}
        <button
          style={styles.btn}
          onClick={() => dispatch({ type: "decrement" })}
          disabled={state.count === 0}
        >
          − Remove song
        </button>
        <button style={styles.reset} onClick={() => dispatch({ type: "reset" })}>Reset</button>
      </div>
    </div>
  );
}

const styles = {
  card: { border: "1px solid #e5e7eb", borderRadius: 12, padding: "1.25rem", background: "#fff" },
  h3: { marginTop: 0 },
  row: { display: "flex", gap: "0.5rem", flexWrap: "wrap" },
  btn: { border: "none", background: "#1db954", color: "#fff", borderRadius: 8, padding: "0.5rem 0.9rem", fontWeight: 700, cursor: "pointer" },
  reset: { border: "1px solid #ccc", background: "#fff", borderRadius: 8, padding: "0.5rem 0.9rem", fontWeight: 600, cursor: "pointer" },
};
