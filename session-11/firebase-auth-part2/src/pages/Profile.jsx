import { useAuth } from "../context/AuthContext.jsx";
export default function Profile() {
  const { user } = useAuth();
  return (
    <div style={{ padding: "2rem", fontFamily: "system-ui" }}>
      <h1>Profile</h1>
      <p>Protected page. Logged in as <strong>{user?.email}</strong>.</p>
    </div>
  );
}
