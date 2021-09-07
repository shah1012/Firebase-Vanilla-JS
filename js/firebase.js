const firebaseConfig = {
  apiKey: "AIzaSyD-ZlrZVSCHuiQ8xbbSs1QhtaATmfv4Ljk",
  authDomain: "final-project-11f71.firebaseapp.com",
  projectId: "final-project-11f71",
  storageBucket: "final-project-11f71.appspot.com",
  messagingSenderId: "770834439311",
  appId: "1:770834439311:web:3ae51d81ebaf56e51ba4fa",
  measurementId: "G-W9PE2YTC51",
};
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const auth2 = firebase.auth;
const db = firebase.database();

export { db, auth, auth2 };
