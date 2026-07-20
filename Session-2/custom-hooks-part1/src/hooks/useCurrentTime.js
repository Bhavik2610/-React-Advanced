import { useState, useEffect } from "react";

// Task 1: returns the current time and updates it every second.
// Naming: starts with "use" — required so React treats it as a hook.
export default function useCurrentTime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id); // cleanup: stop the timer on unmount
  }, []);

  return time;
}
