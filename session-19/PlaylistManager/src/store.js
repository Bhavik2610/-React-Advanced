// Task 1: the Redux store with the playlist slice connected (Task 3).
import { configureStore } from "@reduxjs/toolkit";
import playlistReducer from "./redux/playlistSlice.js";

export default configureStore({
  reducer: { playlist: playlistReducer },
});
