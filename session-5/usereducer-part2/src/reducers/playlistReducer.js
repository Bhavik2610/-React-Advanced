// Task 1: reducer that manages an array of song objects { id, name }.
// Task 4: also handles EDIT_SONG.

export const initialSongs = [
  { id: "s1", name: "Kesariya" },
  { id: "s2", name: "Shape of You" },
  { id: "s3", name: "Blinding Lights" },
];

export function playlistReducer(state, action) {
  switch (action.type) {
    case "ADD_SONG":
      // payload = new song name
      return [...state, { id: crypto.randomUUID(), name: action.payload }];

    case "REMOVE_SONG":
      // payload = id of the song to remove
      return state.filter((song) => song.id !== action.payload);

    case "EDIT_SONG":
      // payload = { id, name }
      return state.map((song) =>
        song.id === action.payload.id ? { ...song, name: action.payload.name } : song
      );

    default:
      return state;
  }
}
