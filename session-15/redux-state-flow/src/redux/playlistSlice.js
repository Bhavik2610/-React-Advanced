import { createSlice } from "@reduxjs/toolkit";

// Task 1: a slice managing an array of song objects { id, title, artist }.
// createSlice generates the reducer AND the action creators for us, and lets
// us "mutate" state directly (Immer converts it to safe immutable updates).
const playlistSlice = createSlice({
  name: "playlist",
  initialState: [],
  reducers: {
    addSong(state, action) {
      // payload = { id, title, artist }
      state.push(action.payload);
    },
    removeSong(state, action) {
      // payload = id
      return state.filter((song) => song.id !== action.payload);
    },
  },
});

export const { addSong, removeSong } = playlistSlice.actions;
export default playlistSlice.reducer;
