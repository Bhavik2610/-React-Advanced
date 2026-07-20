import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

// Task 4: guard. If not authenticated, redirect to /login. We wait for
// `loading` to finish so a persisted session isn't wrongly redirected on refresh.
export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  if (loading) return <p style={{ padding: "2rem", fontFamily: "system-ui" }}>Checking session…</p>;
  if (!user) return <Navigate to="/login" replace />;
  return children;
}
