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
  /*Make Sure to change this Later*/
  // apiKey: "AIzaSyD-ZlrZVSCHuiQ8xbbSs1QhtaATmfv4Ljk",
  // authDomain: "final-project-11f71.firebaseapp.com",
  // projectId: "final-project-11f71",
  // storageBucket: "final-project-11f71.appspot.com",
  // messagingSenderId: "770834439311",
  // appId: "1:770834439311:web:3ae51d81ebaf56e51ba4fa",
  // measurementId: "G-W9PE2YTC51",

  apiKey: "AIzaSyB0PC2J-uQ6ojmkDuJewgQExdo-GR6dyzg",
  authDomain: "covid-19-tracker-f9899.firebaseapp.com",
  databaseURL: "https://covid-19-tracker-f9899.firebaseio.com",
  projectId: "covid-19-tracker-f9899",
  storageBucket: "covid-19-tracker-f9899.appspot.com",
  messagingSenderId: "470041274379",
  appId: "1:470041274379:web:9d0d22341eb34660143f0e",
  measurementId: "G-DSCP72FBGM",
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
