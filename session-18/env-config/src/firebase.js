// Task 2 & 4: Firebase config reads the key from process.env — NOT hardcoded.
// (No secret values live in this source file.)
export const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // ...other Firebase config values would also come from env vars here.
};

// (In a real app you'd call initializeApp(firebaseConfig). We just export the
// config to demonstrate reading the key securely from the environment.)
console.log("Firebase apiKey loaded from env:", firebaseConfig.apiKey);
