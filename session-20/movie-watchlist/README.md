# 🎬 Movie Watchlist

A simple React + Firebase (Firestore) app to track movies you want to watch.
Add movies, mark them watched, edit titles, and delete them — all synced in
real time to a cloud database.

## Features

- Add movies to your watchlist
- Mark movies as watched / unwatched
- Edit a movie's title
- Delete movies (with a confirmation prompt)
- Real-time updates via Firestore `onSnapshot` (changes appear instantly)
- Code-split Watchlist page with `React.lazy` for a smaller initial bundle

## Tech Stack

- **React** (Vite)
- **Firebase Firestore** (cloud database)
- Deployed on **Netlify** / **Firebase Hosting**

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Configure Firebase
Create a `.env.local` file in the project root (copy from `.env.example`) and
add your Firebase web config:
```
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your-app.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your-app
REACT_APP_FIREBASE_STORAGE_BUCKET=your-app.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=000000000000
REACT_APP_FIREBASE_APP_ID=1:000000000000:web:abcdef
```
In the Firebase console, create a Firestore database (test mode is fine for
development).

### 3. Run locally
```bash
npm run dev
```

### 4. Build for production
```bash
npm run build
npm run preview   # preview the production build locally
```

## Deployment

### Netlify
- Build command: `npm run build`
- Publish directory: `dist`
- `netlify.toml` (included) sets these automatically, plus a SPA redirect.

### Firebase Hosting
```bash
npm install -g firebase-tools
firebase login
firebase deploy --only hosting
```
`firebase.json` (included) is set with `"public": "dist"` and an SPA rewrite.

## Project Structure
```
src/
  firebase.js          # Firebase init + Firestore instance
  pages/Watchlist.jsx  # main CRUD component (lazy-loaded)
  App.jsx              # loads Watchlist via React.lazy + Suspense
  main.jsx             # React entry point
```

## Notes
- Firebase web config values are safe to expose in the client; protect your
  data with Firestore Security Rules.
- `.env.local` is git-ignored so your config never gets pushed to GitHub.

## License
MIT
