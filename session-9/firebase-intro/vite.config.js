import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// This project uses the REACT_APP_ prefix + process.env (Create React App
// style), as the task requires. The config below loads REACT_APP_* vars from
// .env and makes process.env.REACT_APP_* work in the browser under Vite.
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "REACT_APP_");
  return {
    plugins: [react()],
    define: {
      "process.env.REACT_APP_FIREBASE_API_KEY": JSON.stringify(env.REACT_APP_FIREBASE_API_KEY),
      "process.env.REACT_APP_FIREBASE_AUTH_DOMAIN": JSON.stringify(env.REACT_APP_FIREBASE_AUTH_DOMAIN),
      "process.env.REACT_APP_FIREBASE_PROJECT_ID": JSON.stringify(env.REACT_APP_FIREBASE_PROJECT_ID),
      "process.env.REACT_APP_FIREBASE_STORAGE_BUCKET": JSON.stringify(env.REACT_APP_FIREBASE_STORAGE_BUCKET),
      "process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID": JSON.stringify(env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID),
      "process.env.REACT_APP_FIREBASE_APP_ID": JSON.stringify(env.REACT_APP_FIREBASE_APP_ID),
    },
  };
});
