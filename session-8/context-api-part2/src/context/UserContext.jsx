import { createContext, useContext, useMemo } from "react";

// Task 2: simple UserContext (who is browsing). Nested inside providers below.
const UserContext = createContext(null);

export function UserProvider({ children }) {
  const value = useMemo(() => ({ user: { id: 1, name: "Bhavik" } }), []);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
export const useUser = () => useContext(UserContext);
