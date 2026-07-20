import useCurrentTime from "../hooks/useCurrentTime.js";
// Task 1: a live clock — all timer logic lives in the hook.
export default function Clock() {
  const time = useCurrentTime();
  return <div style={styles.clock}>🕐 {time.toLocaleTimeString()}</div>;
}
const styles = { clock: { fontSize: "1.8rem", fontWeight: 700, fontVariantNumeric: "tabular-nums" } };
