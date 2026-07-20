// Task 1: the Redux store, created with the playlistReducer.
// (createStore is deprecated in Redux 5 — the modern way is configureStore
// from @reduxjs/toolkit — but it works and matches the fundamentals here.)
import { createStore } from "redux";
import playlistReducer from "./redux/playlistReducer.js";

const store = createStore(playlistReducer);

export default store;
