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

let fetchUsers = (getEmail) => {
  return get(ref(db, "/users")).then((snap) => {
    let { ...data } = snap.val();

    return Object.values(data).filter((user) => user.email === getEmail);
  });
};

document.body.onload = async () => {
  const getEmail = localStorage.getItem("UserEmail");
  if (getEmail) {
    fetchUsers(getEmail).then((e) => {
      let user = e[0];
      if (!(user.age || user.gender)) {
        let inputAge = prompt("Please enter your age");
        let inputGender = prompt("Please enter your gender");
        if (inputAge || inputGender === null) {
          update(ref(db, `/users/${user.username}`), {
            username: user.username,
            email: user.email,
            age: 0,
            gender: "None",
          });
        }
        set(ref(db, `/users/${user.username}`), {
          username: user.username,
          email: user.email,
          age: inputAge,
          gender: inputGender,
        });
      } else {
        title.innerText = `Welcome!`;
        usernameLbl.innerText = `Username: ${user.username}`;
        emailLbl.innerText = `Email: ${user.email}`;
        ageLbl.innerText = `Age: ${user.age}`;
        genderLbl.innerText = `Gender: ${user.gender}`;
      }
    });
  } else {
    location.href = "/Pages/login.html";
  }
};

updateBtn.addEventListener("click", () => {
  let agePrompt = prompt("Updated Age");
  let genderPrompt = prompt("Updated Gender");

  if ((genderPrompt || agePrompt) === null) {
    alert("Empty Inputs");
  } else if ((genderPrompt || agePrompt) === "") {
    alert("Empty Inputs");
  } else {
    get(ref(db, "/users")).then((snapshot) => {
      console.log(snapshot.val());
    });
  }
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
