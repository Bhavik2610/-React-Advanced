import { useEffect } from "react";
import app from "./firebase.js";

export default function App() {
  // Task 3: log the firebase object to confirm the integration works.
  useEffect(() => {
    console.log("Firebase app:", app);
    console.log("App name:", app.name);
    console.log("Project ID:", app.options.projectId);
  }, []);

  const configured =
    app.options.apiKey && app.options.apiKey !== "your_api_key";

  return (
    <main style={styles.page}>
      <h1>Firebase Intro</h1>
      <p>Open the console — the initialized Firebase app is logged there.</p>
      <div style={{ ...styles.badge, background: configured ? "#e6f7ed" : "#fdecec", color: configured ? "#047857" : "#c0392b" }}>
        {configured
          ? `✓ Connected to project: ${app.options.projectId}`
          : "⚠ Add your Firebase config to .env (see .env.example), then restart."}
      </div>
    </main>
  );
}

const styles = {
  page: { fontFamily: "system-ui, sans-serif", maxWidth: 560, margin: "3rem auto", padding: "0 1.5rem" },
  badge: { marginTop: "1rem", padding: "0.75rem 1rem", borderRadius: 8, fontWeight: 600 },
};
