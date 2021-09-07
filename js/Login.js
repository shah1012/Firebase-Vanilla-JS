import { auth, auth2, db } from "./firebase.js";

const SignInBtn = document.querySelector(".SignInBtn");
const googleBtn = document.querySelector(".googleSign");
const emailIn = document.querySelector(".emailInput ");
const passwordIn = document.querySelector(".passwordInput");

let provider = new auth2.GoogleAuthProvider();

const clearInputs = () => {
  emailIn.value = "";
  passwordIn.value = "";
};

SignInBtn.addEventListener("click", (e) => {
  const emailValue = emailIn.value;
  const passwordValue = passwordIn.value;

  auth
    .signInWithEmailAndPassword(emailValue, passwordValue)
    .then((user) => {
      localStorage.setItem("UserEmail", emailValue);
      clearInputs();
      alert("Successfully logged in");
      location.href = "./Home.html";
    })
    .catch((error) => {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Wrong Password");
          break;
        case "auth/invalid-email":
          alert("Email provided is incorrect");
          break;
      }
    });
});

googleBtn.addEventListener("click", (e) => {
  auth
    .signInWithPopup(provider)
    .then((result) => {
      if (result.user) {
        localStorage.setItem("UserEmail", result.user.email);
        clearInputs();
        location.href = "./Home.html";
      }
    })
    .catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;

      // ...
    });
});
