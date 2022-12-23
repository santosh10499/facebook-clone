let email = document.getElementById("email");
let confirmEmail = document.getElementById("confirm-email");
let userName = document.getElementById("firstName");
let userLastName = document.getElementById("lastname");
let gender = document.querySelectorAll(".gender");
let password = document.getElementById("password");
let signUp = document.getElementById("sign");
let cross = document.getElementById("cross");
let genderbox = document.querySelectorAll("#all_gender");
let userData = [];
// for checking gender value
console.log(genderbox);

// =======================add click function on signUp button and some validation====================
signUp.addEventListener("click", () => {
  if (userName.value == "") {
    userName.style.border = "1px solid red";
  } else {
    userName.style.border = "1px solid black";
  }
  if (userLastName.value == "") {
    userLastName.style.border = "1px solid red";
  } else {
    userLastName.style.border = "1px solid black";
  }
  if (email.value.includes("@") && email.value.includes("gmail.com")) {
    email.style.border = "1px solid black";
  } else {
    email.style.border = "1px solid red";
  }
  if (confirmEmail.value != email.value) {
    confirmEmail.style.border = "1px solid red";
  } else {
    confirmEmail.style.border = "1px solid black";
  }
  if (password.value != "") {
    password.style.border = "1px solid black";
  } else {
    password.style.border = "1px solid red";
  }
  // for checking gender value

  for (let i = 0; i < gender.length; i++) {
    if (gender[i].checked) {
      var ans = gender[i].checked;
      console.log(ans);
    }
  }
  for (let i = 0; i < genderbox.length; i++) {
    if (ans) {
      genderbox[i].style.border = "1px solid black";
    } else {
      genderbox[i].style.border = "1px solid red";
    }
  }

  if (userLastName.value != "" && userName.value != "" && email.value == confirmEmail.value && password.value != "" && email.value.includes("@") && email.value.includes("gmail.com") && ans) {
    if (localStorage.getItem("signupData")) {
      var data = JSON.parse(localStorage.getItem("signupData"));
      data.push({email: email.value,password: password.value,userName:userName.value,surName:userLastName.value});
      localStorage.setItem("signupData", JSON.stringify(data));
      window.location.href ="/pages/login.html";
    } else {
      userData.push({email: email.value,password: password.value,userName: userName.value,surName:userLastName.value});
      localStorage.setItem("signupData", JSON.stringify(userData));
      window.location.href = "/pages/login.html";
    }
  }
});

cross.addEventListener("click", () => {
  window.location.href = "/pages/login.html";
});
