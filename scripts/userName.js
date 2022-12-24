let userName=document.querySelectorAll('.user-name');
let logout=document.getElementById('logout');
// ================================get data from localStorage
let firstname=localStorage.getItem('firstName');
let lastname=localStorage.getItem('LastName');
let userEmail=localStorage.getItem('userEmail');
console.log(userEmail)

for(let i=0;i<userName.length;i++)
{
userName[i].innerText=firstname +" " +lastname;
}

// ==========================logout

logout.addEventListener('click',()=>{
    window.location.href='/pages/login.html'
})