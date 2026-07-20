import { useEffect, useState } from "react";
import { collection, addDoc, onSnapshot, query, orderBy, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase.js";

const commentsRef = collection(db, "comments");

export default function LiveCommentsFeed() {
  const [comments, setComments] = useState([]);
  const [text, setText] = useState("");

  // Task 3: listen to the 'comments' collection in real time with onSnapshot.
  // Task 5: the returned function unsubscribes the listener on unmount.
  useEffect(() => {
    // newest first
    const q = query(commentsRef, orderBy("createdAt", "desc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      setComments(snapshot.docs.map((d) => ({ id: d.id, ...d.data() })));
    });

    // CLEANUP: React runs this when the component unmounts (or before the
    // effect re-runs). Calling unsubscribe() detaches the Firestore listener
    // so it stops updating state on a component that's gone (prevents leaks
    // and "can't update unmounted component" warnings).
    return () => unsubscribe();
  }, []);

  async function postComment(e) {
    e.preventDefault();
    if (!text.trim()) return;
    await addDoc(commentsRef, { text: text.trim(), createdAt: serverTimestamp() });
    setText("");
    // No manual refetch needed — onSnapshot pushes the new comment instantly.
  }

  return (
    <div style={styles.card}>
      <h2 style={styles.h2}>Live Comments</h2>
      <p style={styles.note}>Open this in two tabs — a comment posted in one appears in the other with no refresh.</p>

      <form onSubmit={postComment} style={styles.row}>
        <input style={styles.input} placeholder="Write a comment…" value={text} onChange={(e) => setText(e.target.value)} />
        <button type="submit" style={styles.post}>Post</button>
      </form>

      <ul style={styles.list}>
        {comments.map((c) => (
          <li key={c.id} style={styles.item}>{c.text}</li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  card: { background: "#fff", border: "1px solid #e5e7eb", borderRadius: 12, padding: "1.25rem" },
  h2: { marginTop: 0 },
  note: { color: "#666", fontSize: "0.85rem" },
  row: { display: "flex", gap: "0.5rem", marginBottom: "1rem" },
  input: { flex: 1, padding: "0.55rem 0.7rem", borderRadius: 8, border: "1px solid #ccc" },
  post: { border: "none", background: "#7c3aed", color: "#fff", borderRadius: 8, padding: "0.55rem 1rem", fontWeight: 700, cursor: "pointer" },
  list: { listStyle: "none", padding: 0, display: "grid", gap: "0.4rem" },
  item: { background: "#f5f3ff", borderRadius: 8, padding: "0.5rem 0.8rem" },
};
