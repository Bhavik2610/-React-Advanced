import { createSlice } from "@reduxjs/toolkit";

// Task 3 & 5: slice managing songs { id, title, artist } with
// addSong, editSong (by id), and deleteSong.
const playlistSlice = createSlice({
  name: "playlist",
  initialState: [],
  reducers: {
    addSong(state, action) {
      state.push(action.payload); // payload = { id, title, artist }
    },
    // Task 5: edit a song by id (Copilot-assisted, then adjusted).
    editSong(state, action) {
      const { id, title, artist } = action.payload;
      const song = state.find((s) => s.id === id);
      if (song) {
        song.title = title;
        song.artist = artist;
      }
    },
    deleteSong(state, action) {
      return state.filter((s) => s.id !== action.payload); // payload = id
    },
  },
});

export const { addSong, editSong, deleteSong } = playlistSlice.actions;
export default playlistSlice.reducer;
