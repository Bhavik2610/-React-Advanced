import { ADD_SONG, REMOVE_SONG } from "./playlistActions.js";

// The reducer holds an array of song names. It never mutates the array —
// it returns a new one each time.
const initialState = [];

export default function playlistReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_SONG:
      return [...state, action.payload];
    case REMOVE_SONG:
      // Task 4: remove the song at the given index.
      return state.filter((_, i) => i !== action.payload);
    default:
      return state;
  }
}
