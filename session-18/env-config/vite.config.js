import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// Loads REACT_APP_* vars for the current MODE (.env.development in dev,
// .env.production in build), plus .env.local, and exposes them via
// process.env — matching the Create React App convention the tasks use.
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "REACT_APP_");
  return {
    plugins: [react()],
    define: {
      "process.env.REACT_APP_SPOTIFY_API_KEY": JSON.stringify(env.REACT_APP_SPOTIFY_API_KEY),
      "process.env.REACT_APP_FIREBASE_API_KEY": JSON.stringify(env.REACT_APP_FIREBASE_API_KEY),
      "process.env.REACT_APP_WELCOME_MSG": JSON.stringify(env.REACT_APP_WELCOME_MSG),
      "process.env.REACT_APP_GOOGLE_MAPS_API_KEY": JSON.stringify(env.REACT_APP_GOOGLE_MAPS_API_KEY),
    },
  };
});
