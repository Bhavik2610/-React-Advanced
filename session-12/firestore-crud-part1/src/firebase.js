// Task 1: initialize Firebase and export the Firestore database instance.
import { initializeApp } from "firebase/app";
import { initializeFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);

// Force long-polling: uses plain HTTP requests instead of the streaming
// connection that ad-blockers / "shields" / some networks silently block.
// This fixes the app hanging on "Loading…" with no error.
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});

export default app;