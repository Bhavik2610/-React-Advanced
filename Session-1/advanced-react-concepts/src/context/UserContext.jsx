import { createContext, useContext } from "react";
// Task 3: context holds the user object so it doesn't have to be prop-drilled
// through Feed and Post to reach LikeButton.
export const UserContext = createContext(null);
export function useUser() {
  return useContext(UserContext);
}
