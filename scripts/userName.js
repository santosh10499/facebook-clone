let userloginName=document.querySelectorAll('.user-name');
let logout=document.getElementById('logout');
// ================================get data from localStorage
let firstname=localStorage.getItem('firstName');
let lastname=localStorage.getItem('LastName');
let userEmail=localStorage.getItem('userEmail');
console.log(userEmail)

for(let i=0;i<userloginName.length;i++)
{
    userloginName[i].innerText=firstname +" " +lastname;
}

// ==========================logout

logout.addEventListener('click',()=>{
    window.location.href='/index.html'
})