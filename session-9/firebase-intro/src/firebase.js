// Tasks 1-3: Firebase initialization in a separate file.

import { initializeApp } from "firebase/app";

// Task 2: config values are loaded from environment variables (never hard-coded).
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// Task 3: initialize the app and export the instance for the rest of the app.
const app = initializeApp(firebaseConfig);

export default app;
