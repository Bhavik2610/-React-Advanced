// Task 2 & 4: action creators.
export const ADD_SONG = "ADD_SONG";
export const REMOVE_SONG = "REMOVE_SONG";

// addSong takes a song name and returns an action object with it as payload.
export function addSong(name) {
  return { type: ADD_SONG, payload: name };
}

// Task 4: removeSong takes the index of the song to remove.
export function removeSong(index) {
  return { type: REMOVE_SONG, payload: index };
}
