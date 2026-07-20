import { configureStore } from "@reduxjs/toolkit";
import playlistReducer from "./redux/playlistSlice.js";
import cartReducer from "./redux/cartSlice.js";

// configureStore combines reducers AND automatically wires up the Redux
// DevTools browser extension (Task 3) — no extra config needed.
export default configureStore({
  reducer: {
    playlist: playlistReducer,
    cart: cartReducer,
  },
});
