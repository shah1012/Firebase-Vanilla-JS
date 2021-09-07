import { auth, db } from "./firebase.js";

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

  auth
    .createUserWithEmailAndPassword(emailValue, passwordValue)
    .then((user) => {
      db.ref(`/users/${usernameValue}`).set(
        {
          username: usernameValue,
          email: emailValue,
        },
        (error) => {
          if (error) {
            console.log(error.message);
          } else {
            return alert("Successfully added to the database");
          }
        }
      );
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
