import { configureStore } from "@reduxjs/toolkit";
import restaurantsReducer from "./redux/restaurantsSlice.js";

// Task 1: configureStore includes the Redux Thunk middleware by default,
// so the store can handle async (function) actions out of the box.
export default configureStore({
  reducer: { restaurants: restaurantsReducer },
});
