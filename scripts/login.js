
let email = document.getElementById("email");
let password = document.getElementById("password");
let login = document.getElementById("log");
let createAccount = document.getElementById("create");
let msg = document.getElementById("msg");
let firstName=[];
let lastName=[];
// --------------------------------Get data from localStorage===================================
let data = localStorage.getItem("signupData");

let array = JSON.parse(data);
console.log(array)
//===================================click event on login form matching data==========

login.addEventListener("click", () => {
  
  for (let i = 0; i<array.length; i++) {
    if (array[i].email == email.value && array[i].password == password.value) {
       
      // this is used for render name in home page
       firstName.push(array[i].userName);
       lastName.push(array[i].surName);
       localStorage.setItem('firstName',firstName);
       localStorage.setItem('LastName',lastName)

      //  ---------------------------------
      
      email.style.border = "1px solid black";
      password.style.border = "1px solid black";
      window.location.href ="/pages/header.html";
      
    } else {
      
      email.style.border = "1px solid red";
      password.style.border = "1px solid red";
    }
    
  }

   
});

// ================================click event on click button]]]]]]]]]]]]]]]]]]]]]]]
createAccount.addEventListener("click", () => {
    window.location.href = "/pages/signup.html";
});