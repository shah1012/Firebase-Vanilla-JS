import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js";
import {
  getDatabase,
  get,
  set,
  ref,
  onValue,
  update,
  child,
} from "https://www.gstatic.com/firebasejs/9.0.2/firebase-database.js";
const firebaseConfig = {
  apiKey: "AIzaSyD-ZlrZVSCHuiQ8xbbSs1QhtaATmfv4Ljk",
  authDomain: "final-project-11f71.firebaseapp.com",
  projectId: "final-project-11f71",
  storageBucket: "final-project-11f71.appspot.com",
  messagingSenderId: "770834439311",
  appId: "1:770834439311:web:3ae51d81ebaf56e51ba4fa",
  measurementId: "G-W9PE2YTC51",
};
let app = initializeApp(firebaseConfig);
let db = getDatabase(app);
let auth = getAuth(app);

export {
  app,
  db,
  auth,
  get,
  ref,
  set,
  signInWithEmailAndPassword,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signOut,
  onValue,
  update,
  child,
};
