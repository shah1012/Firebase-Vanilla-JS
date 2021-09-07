import { db, auth } from "./firebase.js";

//elements
const title = document.querySelector("h1");

const emailLbl = document.querySelector(".emailLbl");
const usernameLbl = document.querySelector(".usernameLbl");
const signOutBtn = document.querySelector(".signOutBtn");

let userref = db.ref("/users");

let fetchUsers = async (getEmail) => {
  let snapshot = await userref.once("value");
  let { ...data } = snapshot.val();

  return Object.values(data).filter((user) => user.email === getEmail);
};

document.body.onload = () => {
  const getEmail = localStorage.getItem("UserEmail");

  if (getEmail) {
    fetchUsers(getEmail).then((e) => {
      let user = e[0];
      title.innerText = `Welcome!`;
      usernameLbl.innerText = `Username: ${user.username}`;
      emailLbl.innerText = `Email: ${user.email}`;
    });
  } else {
    location.href = "/Pages/login.html";
  }
};

signOutBtn.addEventListener("click", () => {
  localStorage.removeItem("UserEmail");
  auth
    .signOut()
    .then(() => {
      alert("Signout successfull");
      location.href = "/Pages/login.html";
    })
    .catch((err) => console.log(err));
});
