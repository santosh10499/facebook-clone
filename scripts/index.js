const dummy_post = document.querySelector(".dummy_posts");
async function api() {
  let data1 = await fetch(
    "https://63a7491a59fd83b1bb42ba9a.mockapi.io/api/v1/facbook_posts"
  );
  let data = await data1.json();

  for (let i = 0; i < data.length; i++) {
    dummy_post.innerHTML += `<div class="dummy_post">
      <div class="top">
        <img src="${data[i].userImage}" alt="" class="profile bg_img hover" width="45px" />
        <div class="name">
          <p class="pointer">${data[i].userName}</p>
          <span class="pointer"
            >${data[i].time}.<i class="fa-solid fa-earth-americas"></i
          ></span>
        </div>

        <div class="icons">
          <i class="fa-solid fa-ellipsis hover"></i>
         
        </div>
      </div>
      <div class="image">
        <img src="${data[i].post}" alt="post" />
      </div>
      <div class="bottom">
        <div class="likes">
          <img src="" alt="" />
          <img src="" alt="" />
          <span class="pointer like-count" > ${data[i].like}</span>
        </div>
        <div class="commets">
         <span class="commentcount"> <p class="pointer comment">${data[i].comment}Comments</p></span>
        </div>
      </div>
      <div class="reaction">
        <span class="like1"><p class="hover "><i class="fa-regular icon  fa-thumbs-up"></i> Like</p></span>
         <p class="hover comment_btn"><i class="fa-regular fa-message"></i> Comment</p></span>
        <p class="hover"><i class="fa-solid fa-share"></i> Share</p>
    </div>
    <div class="commentSection">
          <div class="Profile_area">
            <img
              src="/images/profile2.png"
              alt=""
              class="hover userimage"
              width="45px"
            />
            <div class="input_field flex ">
              <input type="text"  class="usercomment"placeholder="Write a comment..." />
              <i class="fa-brands fa-rocketchat pointer"></i>
              <i class="fa-regular fa-face-smile pointer"></i>
              <i class="fa-solid fa-camera-retro pointer"></i>
              <i class="fa-regular fa-image pointer"></i>
              <button class="pointer comment-add">Add</button>
            </div>
            
            
          </div>
          <ul class="commentlist">
          <li>
          <span class="comment-person">
          <img src="/images/profile2.png" alt="" class="hover userimage commenti" width="30px"/>
            <span class="comment_text">Good</span>
          </span>
          </li>
          
          </li>
          </div>
          </div>
       
`;
    // dummy_post.insertAdjacentHTML("afterbegin", post)
  }
  // ===================================add comment 
  let commentCount = document.querySelectorAll(".commentcount");
  let addComment = document.querySelectorAll(".comment_btn");
  let commentSection = document.querySelectorAll(".commentSection")
  let addBtn = document.querySelectorAll(".comment-add");
  let userComment = document.querySelectorAll(".usercomment");
  let commentlist = document.querySelectorAll(".commentlist");
  
  
for(let i=0;i<addComment.length;i++)
{
  
  addComment[i].addEventListener("click", () => {
  
  if (commentSection[i].style.display == "block") {
    commentSection[i].style.display = "none";
  } else {
    commentSection[i].style.display = "block";
  }
});
 if(userComment[i].value.length >= 0)
{
  addBtn[i].addEventListener("click", () => {
    commentlist[i].innerHTML+=`<li>
    <span class="comment-person">
    <img src="/images/profile2.png" alt="" class="hover userimage commenti" width="30px"/>
      <span class="comment_text">${userComment[i].value}</span>
    </span>
    </li>`
    
    
     commentCount[i].innerHTML=`<span style="margin-left:-50px"class="commentcount"> <p class="pointer comment">${++data[i].comment}Comments</p></span>`
  
});
}
}

  //=========================for displaying user profile=============

let userdata = [
  {
    email: "santosh@gmail.com",
    profilePic: "/images/santosh-mehta-profilepic.jpg",
  },
  {
    email: "varsharajput353@gmail.com",
    profilePic: "/images/varsha-profilepic.jpg",
  },
  { email: "ss0149952@gmail.com", profilePic: "/images/sonu-profilepic.jpg" },
  {
    email: "rohanpalankar8@gmail.com",
    profilePic: "/images/profile-pic-rohan.jpg",
  },
];

let Email = localStorage.getItem("userEmail");

let userimage = document.querySelectorAll(".userimage");

for (let k = 0; k < userdata.length; k++) {
  for (let i = 0; i < userimage.length; i++) {
    if (userdata[k].email == Email) {
      userimage[i].src = userdata[k].profilePic;
    }
  }
}

  // ====================this is for likeing post
  
  let likebtn = document.querySelectorAll(".like1");
  let icon = document.querySelectorAll(".icon");
  let likeCount = document.querySelectorAll(".like-count");

  for (let j = 0; j < likebtn.length; j++) {
    likebtn[j].addEventListener("click", () => {
      likeCount[j].innerHTML = `<span style="margin-left:-20px" class="pointer like-count" > ${data[j].like +1}</span>`;

      likebtn[j].style.color = "blue";
      icon[j].style.color = "blue";
    });
  }
  
}
api();



const create_new_group_popUp = document.querySelector("#create_new_group");
const plus_btn = document.querySelector("#plus_btn");
const New_message = document.querySelector("#New_message");

plus_btn.addEventListener("click", () => {
  if (create_new_group_popUp.style.display == "block") {
    create_new_group_popUp.style.display = "none";
  } else {
    create_new_group_popUp.style.display = "block";
  }
});

New_message.addEventListener("click", () => {
  if (create_new_group_popUp.style.display == "block") {
    create_new_group_popUp.style.display = "none";
  }
});

// for profile page

const profile_page = document.querySelector("#profile_page");

profile_page.addEventListener("click", () => {
  window.location.href = "/pages/profile.html";
});

// fb_logo to home page

const fb_logo = document.querySelector("#fb_logo");

fb_logo.addEventListener("click", () => {
  window.location.href = "/pages/header.html";
});
const friend = document.querySelector("#find-friend");
friend.addEventListener("click", () => {
  window.location.href = "/pages/friends.html";
});
const home = document.querySelector("#home");

home.addEventListener("click", () => {
  window.location.href = "/pages/header.html";
});
// console.log(home.innerHTML)
const friendIcon = document.querySelector("#friend");

friendIcon.addEventListener("click", () => {
  window.location.href = "/pages/friends.html";
});

// //=========================for displaying user profile=============

// let userdata = [
//   {
//     email: "santosh@gmail.com",
//     profilePic: "/images/santosh-mehta-profilepic.jpg",
//   },
//   {
//     email: "varsharajput353@gmail.com",
//     profilePic: "/images/varsha-profilepic.jpg",
//   },
//   { email: "ss0149952@gmail.com", profilePic: "/images/sonu-profilepic.jpg" },
//   {
//     email: "rohanpalankar8@gmail.com",
//     profilePic: "/images/profile-pic-rohan.jpg",
//   },
// ];

// let Email = localStorage.getItem("userEmail");

// let userimage = document.querySelectorAll(".userimage");

// for (let k = 0; k < userdata.length; k++) {
//   for (let i = 0; i < userimage.length; i++) {
//     if (userdata[k].email == Email) {
//       userimage[i].src = userdata[k].profilePic;
//     }
//   }
// }

// --------------comment_btn-------------

// const add_comment = document.querySelector("#comment_btn");

// const commentSection = document.querySelector(".commentSection")
// console.log(add_comment)

// add_comment.addEventListener("click", () => {
//   if (commentSection.style.display == "block") {
//     commentSection.style.display = "none";
//   } else {
//     commentSection.style.display = "block";
//   }
// });
