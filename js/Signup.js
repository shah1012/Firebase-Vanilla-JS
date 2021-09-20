import {
  auth,
  db,
  createUserWithEmailAndPassword,
  ref,
  set,
} from "./firebase.js";

const SignUpBtn = document.querySelector(".SignUpBtn");
const emailIn = document.querySelector(".emailInput ");
const passwordIn = document.querySelector(".passwordInput");
const usernameIn = document.querySelector(".usernameInput");

const clearInputs = () => {
  emailIn.value = "";
  passwordIn.value = "";
  usernameIn.value = "";
};

SignUpBtn.addEventListener("click", (e) => {
  const emailValue = emailIn.value;
  const passwordValue = passwordIn.value;
  const usernameValue = usernameIn.value;

  createUserWithEmailAndPassword(auth, emailValue, passwordValue)
    .then((user) => {
      set(ref(db, `/users/${usernameValue}`), {
        username: usernameValue,
        email: emailValue,
      })
        .then((user) => {
          alert("Successfully added user to database");
        })
        .catch((error) => {
          if (error) {
            console.log(error.message);
          }
        });
      setTimeout(() => {
        localStorage.setItem("UserEmail", emailValue);
        clearInputs();
        location.href = "./Home.html";
      }, 2000);
    })
    .catch((error) => {
      alert(error.code);
    });
});
