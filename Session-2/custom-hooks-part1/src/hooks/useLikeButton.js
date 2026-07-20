import { useState } from "react";

// Task 3: manages like/unlike state and the resulting count.
// count is DERIVED from `liked` + the base count, which keeps it correct
// even under React StrictMode (no double-increment bugs).
export default function useLikeButton(initialCount = 0) {
  const [liked, setLiked] = useState(false);
  const toggle = () => setLiked((prev) => !prev);
  const count = initialCount + (liked ? 1 : 0);
  return { liked, count, toggle };
}
