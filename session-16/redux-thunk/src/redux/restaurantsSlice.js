import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Task 2 & 5: async thunk that fetches restaurants from a public API.
// It accepts an optional `city` — when provided, results are filtered to
// that city (Task 5). createAsyncThunk auto-dispatches pending/fulfilled/
// rejected actions, which we handle below for loading/data/error.
export const fetchRestaurants = createAsyncThunk(
  "restaurants/fetch",
  async (city) => {
    const res = await fetch("https://api.sampleapis.com/restaurants/restaurants");
    if (!res.ok) throw new Error(`Request failed: ${res.status}`);
    let data = await res.json();

    // Task 5: filter by city if one was passed in.
    if (city && city.trim()) {
      const needle = city.trim().toLowerCase();
      data = data.filter((r) => JSON.stringify(r).toLowerCase().includes(needle));
    }
    return data;
  }
);

const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState: { items: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRestaurants.pending, (state) => {
        state.loading = true;   // Task 3
        state.error = null;
      })
      .addCase(fetchRestaurants.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchRestaurants.rejected, (state, action) => {
        state.loading = false;                 // Task 4
        state.error = action.error.message;    // separate error state
        state.items = [];
      });
  },
});

export default restaurantsSlice.reducer;

// Task 1: a plain, simple thunk to prove the store handles async actions.
export const testAsyncAction = () => async () => {
  const result = await new Promise((resolve) => setTimeout(() => resolve("async works!"), 500));
  console.log("Simple async action result:", result);
};
