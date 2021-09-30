import {
  app,
  db,
  auth,
  get,
  set,
  ref,
  signOut,
  onValue,
  update,
  child,
} from "./firebase.js";

//elements
const title = document.querySelector("h1");

const emailLbl = document.querySelector(".emailLbl");
const usernameLbl = document.querySelector(".usernameLbl");
const ageLbl = document.querySelector(".ageLbl");
const genderLbl = document.querySelector(".genderLbl");
const signOutBtn = document.querySelector(".signOutBtn");
const updateBtn = document.querySelector(".updateBtn");
const getEmail = localStorage.getItem("UserEmail");

let fetchUsers = (getEmail) => {
  return get(ref(db, "/users")).then((snap) => {
    let { ...data } = snap.val();

    let x = Object.values(data).filter((user) => user.email === getEmail);

    return x[0];
  });
};

const updateTexts = (user) => {
  usernameLbl.innerText = `Username: ${user.username}`;
  emailLbl.innerText = `Email: ${user.email}`;
  ageLbl.innerText = `Age: ${user.age}`;
  genderLbl.innerText = `Gender: ${user.gender}`;
};

document.body.onload = () => {
  if (getEmail) {
    fetchUsers(getEmail).then((user) => {
      let { age, gender, username, email } = user;
      if (!(age || gender)) {
        let agePrompt = prompt("Please enter your age");
        let genderPrompt = prompt("Please enter your gender");

        if (
          agePrompt === null ||
          agePrompt === "" ||
          genderPrompt === null ||
          genderPrompt === ""
        ) {
          update(ref(db, `/users/${username}`), {
            username,
            email,
            age: 0,
            gender: "none",
          });

          update;

          updateTexts(user);
        }
      } else {
        updateTexts(user);
        console.log("Success");
      }
    });
  } else {
    location.href = "./login.html";
  }
};

updateBtn.addEventListener("click", () => {
  let agePpt = prompt("New Age value");
  let genderPpt = prompt(" New Gender value");

  fetchUsers(getEmail).then((user) => {
    if (
      !(
        agePpt === null ||
        agePpt === "" ||
        genderPpt === null ||
        genderPpt === ""
      )
    ) {
      update(ref(db, `/users/${user.username}`), {
        username: user.username,
        email: user.email,
        age: agePpt,
        gender: genderPpt,
      }).then(() => {
        location.reload();
      });
    } else {
      alert("One or more of your values is empty or null");
    }
  });
});

signOutBtn.addEventListener("click", () => {
  localStorage.removeItem("UserEmail");
  signOut(auth)
    .then(() => {
      alert("Signout successfull");
      location.href = "/Pages/login.html";
    })
    .catch((err) => console.log(err));
});
