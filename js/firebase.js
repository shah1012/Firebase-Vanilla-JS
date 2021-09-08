const firebaseConfig = {
  // put your own config
};
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const auth2 = firebase.auth;
const db = firebase.database();

export { db, auth, auth2 };
