const confirmBtn =document.querySelectorAll("#cnfm");
const delBtn = document.querySelectorAll("#delete-btn");
const addBtn = document.querySelectorAll("#add-btn");
const removeBtn = document.querySelectorAll("#removeBtn");
const cancel = document.querySelectorAll('#cancel')
const frnd_request = document.getElementById('friend-request')
const allfrnd = document.getElementById('all-frnd')
// =================for accept request=======================  
for(const bts of confirmBtn){
    bts.addEventListener('click', function(){
        bts.parentNode.style.display = 'none';
        bts.parentElement.nextElementSibling.style.display = 'block'
    })
}

// =================for delete request ==========================================================


for(const bts of delBtn){
    bts.addEventListener('click', function(){
        bts.parentNode.style.display = 'none';
        bts.parentElement.nextElementSibling.nextElementSibling.style.display = 'block'
    })
}


// =========================for sending request======================================================
for(const bts of addBtn){
    bts.addEventListener('click', function(){
        bts.parentElement.style.display = 'none';
        bts.parentElement.previousElementSibling.style.display = 'none';
        bts.parentElement.nextElementSibling.style.display = 'block';
        bts.parentElement.nextElementSibling.nextElementSibling.style.display = 'block';
    })
}


// =============================for removing from suggestion ================================================
// for(const bts of removeBtn){
//     bts.addEventListener('click', function(){
//         bts.parentElement.parentElement.style.display = 'none'
//     })
// }


// =====================for canceling send request===========================================================
for(const bts of cancel){
    bts.addEventListener('click', function(){
        bts.style.display = 'none';
        bts.previousElementSibling.previousElementSibling.previousElementSibling.style.display = 'flex';
        bts.previousElementSibling.previousElementSibling.style.display = 'flex';
        bts.previousElementSibling.style.display = 'none'
    })
}



frnd_request.addEventListener('click', function(){
    const frnd = document.getElementById('sec2');
    const frndHead = document.getElementById('cont2');
    const frnd1 = document.getElementById('sec1');
    const frndHead1 = document.getElementById('cont1')
    frnd1.style.display = 'flex';
    frndHead1.style.display = 'flex';
    frndHead.style.display = 'none';
    frnd.style.display = 'none';
})


allfrnd.addEventListener('click', function(){
    const frnd = document.querySelector('#sec2');
    const frndHead = document.querySelector('#cont2');
    const frnd1 = document.getElementById('sec1');
    const frndHead1 = document.getElementById('cont1')
    frnd1.style.display = 'none';
    frndHead1.style.display = 'none';
    frndHead.style.display = 'block';
    frnd.style.display = 'none';
})
fb_logo.addEventListener("click", () => {
    window.location.href = "/pages/header.html";
  });
  home.addEventListener("click", () => {
    window.location.href = "/pages/header.html";
  });
  
  const friendIcon = document.querySelector("#friend");
  
  
  friendIcon.addEventListener("click", () => {
    window.location.href = "/pages/friends.html";
  });

// let Add_post = document.querySelector("#Add_post");
// let photo_video = document.querySelector("#create_post_Wrapper");
// // console.log(photo_video.innerHTML);

// Add_post.addEventListener("click", (e) => {
//   if (photo_video.style.display == "block") {
//     photo_video.style.display = "none";
//   } else {
//     photo_video.style.display = "block";
//   }
// });


// click on fa-xmark

const fa_xmark  = document.querySelector(".fa-xmark")

fa_xmark.addEventListener("click", ()=>{
  if (photo_video.style.display == "block" ) {
    photo_video.style.display = "none";
  }

})

// create_new_group 

// const create_new_group_popUp = document.querySelector("#create_new_group");
// const plus_btn = document.querySelector("#plus_btn");
// const New_message = document.querySelector("#New_message");

// plus_btn.addEventListener("click", ()=>{
//   if (create_new_group_popUp.style.display == "block") {
//     create_new_group_popUp.style.display = "none";
//   } else {
//     create_new_group_popUp.style.display = "block";
//   }
// })

// New_message.addEventListener("click", ()=>{
//   if (create_new_group_popUp.style.display == "block" ) {
//     create_new_group_popUp.style.display = "none";
//   }

// })
