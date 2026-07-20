import { createContext, useContext, useReducer, useMemo } from "react";

// Task 4: AuthContext with a reducer handling login/logout AND update-name.
const AuthContext = createContext(null);

const initialState = { user: null };

function authReducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload }; // payload = { name }
    case "LOGOUT":
      return { user: null };
    case "UPDATE_NAME":
      // Task 4: new action — change the display name immediately.
      return state.user ? { user: { ...state.user, name: action.payload } } : state;
    default:
      return state;
  }
}

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const value = useMemo(() => ({ ...state, dispatch }), [state]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
export const useAuth = () => useContext(AuthContext);
