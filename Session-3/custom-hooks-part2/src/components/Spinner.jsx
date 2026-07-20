import "./Spinner.css";
// Task 2: loading spinner shown while fetching.
export default function Spinner() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", color: "#666" }}>
      <span className="spinner" /> Loading…
    </div>
  );
}
