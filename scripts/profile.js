

/*====================================== FB-Header =========================================================================================*/

const fbHeader = document.getElementById("fb-header");
const headerPopUp = document.getElementById("header-popUp");


fbHeader.innerHTML = `<header>
<nav>
  <div class="Container">
    <!-----------------------------------------------------left nav--------------------------------------------------------->
    <div class="left_of_nav">
      
      <img src="/images/fb.png" alt="Facebook logo" />
      <i class="fa-solid fa-magnifying-glass hover" id="search_icon"></i>
      <div class="search_input">
        <i class="fa-solid fa-magnifying-glass hover search_icon"></i>
        
        <input type="text" placeholder="Search Facebook" />
      </div>
    </div>
    <!---------------------------------------------------end of left nav----------------------------------------------------------->
    <div class="mid_of_nav">
      
      <div class="mid hover display_none">
       
        <i class="fa-solid fa-house-chimney home_icon "></i>
      </div>
     
      <div class="mid hover display_none">
        <i class="fa-solid fa-user-group user_icon "></i>
      </div>

      <div class="mid hover display_none">
        <i class="fa-solid fa-users users_icons"></i>
      </div>
    </div>
    <div class="right_of_nav">
      <button class="display_none display_none_forTab">Find Friends</button>
      <div class="display_none">
        <i class="fa-solid fa-grip bg"></i>
      </div>
      
      
      <!----------plus icon for media query------------->
      <i class="fa-solid fa-plus hover" id="plus_icon"></i>

      <i class="fa-brands fa-facebook-messenger messenger_icon gap bg"></i>
      
      <i class="fa-solid fa-bell bell_icon bg"></i>
      
      <div class="profile" id="profile">
        <img src="/images/profile2.png" alt="user" />
      </div>
      <i class="fa-solid fa-bars hover" id="bars"></i>
    </div>
  </div>
</nav>
</header>
`
headerPopUp.innerHTML = `<div class="prfile_dialogue_box">
<div class="profile dp">
  <div class="inner hover">
    <img src="/images/profile2.png" alt="profile" width="50px" />
    <p>Varsha Rajput</p>
  </div>
  <hr />
  <span class="hover">See all profiles</span>
</div>
<div class="items">
  <p class="hover">
    <i class="fa-solid fa-gear"></i>Settings & privacy<i
      class="fa-solid fa-chevron-right"
    ></i>
  </p>
  <p class="hover">
    <i class="fa-solid fa-circle-question"></i>Help & support<i
      class="fa-solid fa-chevron-right"
    ></i>
  </p>
  <p class="hover">
    <i class="fa-solid fa-moon"></i>Display & accessibility<i
      class="fa-solid fa-chevron-right"
    ></i>
  </p>
  <p class="hover">
    <i class="fa-solid fa-circle-exclamation"></i>Give feedback
  </p>
  <p class="hover">
    <i class="fa-solid fa-right-from-bracket"></i>Log out
  </p>
</div>
<div class="bottom">
  <span>privacy · Terms · Advertising · Ad choices · Cookies · </span>
  <span> More· Meta © 2022</span>
</div>
</div>`


/*====================================== Update-Profile-Picture & Cover-Photo-PopUp =========================================================================================*/


const profilePicCamera = document.querySelector("#profile-pic-camera");
const updateProfilePicDiv = document.querySelector(".update-profile-pic-div");
const updateProfileUrlInput = document.querySelector("#update-profile-url-input");
const profilePicUploadBtn = document.querySelector("#profile-pic-upload-btn");
const profilePicCancelBtn = document.querySelector("#profile-pic-cancel-btn");


const addCoverPhotoBtn = document.querySelector(".add-cover-photo");
const updateCoverPhotoDiv = document.querySelector(".update-cover-photo-div");
const updateCoverPhotoUrlInput = document.querySelector("#update-cover-photo-url-input");
const coverPhotoUploadBtn = document.querySelector("#cover-photo-upload-btn");
const coverPhotoCancelBtn = document.querySelector("#cover-photo-cancel-btn");

/*---------------- Event-Listener for Add-Cover-Photo-Btn -----------------*/

addCoverPhotoBtn.addEventListener("click", ()=>{
    updateCoverPhotoDiv.style.display = "block";
})

coverPhotoCancelBtn.addEventListener("click", ()=>{
    updateCoverPhotoDiv.style.display = "none";
})

/*---------------- Event-Listener for Profile-picture-Edit-Btn -----------------*/

profilePicCamera.addEventListener("click", ()=>{
    updateProfilePicDiv.style.display = "block";
})

profilePicCancelBtn.addEventListener("click", ()=>{
    updateProfilePicDiv.style.display = "none";
})


let imagesArray = [];
imagesArray = JSON.parse(localStorage.getItem("images"));
displayImages(imagesArray);

/*---------------- Event-Listener for Cover-Photo-UploadBtn -----------------*/

coverPhotoUploadBtn.addEventListener("click", ()=>{
    const coverPhotoUrl = updateCoverPhotoUrlInput.value;
    document.getElementById("cover-photo-img").src = coverPhotoUrl;

    imagesArray.push({id:"coverPhoto", coverPhotoUrl});
    localStorage.setItem("images", JSON.stringify(imagesArray));
    updateCoverPhotoUrlInput.value = "";
})

/*---------------- Event-Listener for Profile-picture-UploadBtn -----------------*/

profilePicUploadBtn.addEventListener("click", ()=>{
    const profilePicUrl = updateProfileUrlInput.value;
    document.getElementById("profile-pic-img").src = profilePicUrl;

    imagesArray.push({id:"profilePic", profilePicUrl});
    localStorage.setItem("images", JSON.stringify(imagesArray));
    updateProfileUrlInput.value = "";
})


/*-------------------- Function to display profile and cover-photo images ------------------------*/

function displayImages(imgArr){
    imgArr.forEach((ele) => {
        if (ele.id == "profilePic"){
            document.getElementById("profile-pic-img").src = ele.profilePicUrl;
        }
        else if (ele.id == "coverPhoto"){
            document.getElementById("cover-photo-img").src = ele.coverPhotoUrl;
        }
    });
}

/*=============================================================================================================================================*/






/*============================== Users-Array ==================================*/


let usersArray = [

  {
    name: "Rohan Palankar",
    email: "rohanpalankar8@gmail.com",
    profilePic: "/images/profile-pic-rohan.jpg",
    coverPhoto: "/images/cover-photo-rohan.jpg",
    totalFriends: "2.1K friends",
    workPlace: "Worked at Lupin Limited",
    workYear: "2011 to 2021",
    college: "Studied at YCMOU",
    collegeYear: "2011 to 2014",
    currentCity: "Lives in Karwar",
    permanentCity: "From Karwar",
    relationship: "Single",
    contactNum: "095274 57742",
    friends: [
      {id:"frnd-1",name:"Rahul Shinde",mutual:"180 mutual friends",img:"/images/friend-1.jpg"},
      {id:"frnd-2",name:"Nitin Palankar",mutual:"402 mutual friends",img:"/images/friend-2.jpg"},
      {id:"frnd-3",name:"Sunil Pise",mutual:"100 mutual friends",img:"/images/friend-3.jpg"},
      {id:"frnd-4",name:"Shivam Kale",mutual:"12 mutual friends",img:"/images/friend-4.jpg"},
      {id:"frnd-5",name:"Swapnil Jadhav",mutual:"87 mutual friends",img:"/images/friend-5.jpg"},
      {id:"frnd-6",name:"Aditya Revankar",mutual:"250 mutual friends",img:"/images/friend-6.jpg"}
    ],
    photos: [
      {id:"photo-1",img:"/images/photos-of-you-1.jpg"},
      {id:"photo-2",img:"/images/photos-of-you-2.jpg"},
      {id:"photo-3",img:"/images/photos-of-you-3.jpg"},
      {id:"photo-4",img:"/images/photos-of-you-4.jpg"},
      {id:"photo-5",img:"/images/photos-of-you-5.jpg"},
      {id:"photo-6",img:"/images/photos-of-you-6.jpg"},
      {id:"photo-7",img:"/images/photos-of-you-7.jpg"},
      {id:"photo-8",img:"/images/photos-of-you-8.jpg"}
    ],
    checkIns: [
      {id:"checkIns-1",name:"Betalbatim, Goa, India",details_1:"Majorda",details_2:"Visited on December 19, 2019",img:"/images/betalbatim.jpg"},
      {id:"checkIns-2",name:"Don Mueang Airport Bangkok",details_1:"Bangkok, Thailand",details_2:"Visited on November 9, 2019",img:"/images/airport-bangkok.jpg"},
      {id:"checkIns-3",name:"Chennai International Airport",details_1:"Chennai, India",details_2:"Visited on November 8, 2019",img:"/images/chennai-airport.jpg"},
      {id:"checkIns-4",name:"Goa International Airport",details_1:"Mormugao, Goa",details_2:"Visited on November 8, 2019",img:"/images/goa-airport.jpg"}
    ],
    groups: [
      {id:"group-1",name:"Konkani Friends",category:"Public group |",members:"1.9K members",img:"/images/group-1.jpg"},
      {id:"group-2",name:"Daivadnya Pratibhe",category:"Public group |",members:"797 members",img:"/images/group-2.jpg"},
      {id:"group-3",name:"Passionpreneurs",category:"Public group |",members:"42.2K members",img:"/images/group-3.jpg"},
      {id:"group-4",name:"Incredible Karwar",category:"Public group |",members:"4.9K members",img:"/images/group-4.jpg"}
    ]
  },

  {

  }

]






/*============================================= Rendering User-Profile-details =================================================*/


logInBtn.addEventListener("click", ()=>{

  usersArray.forEach((userObj) => {

    if (emailInput.value == userObj.email){

      document.getElementById("cover-photo-img").src = userObj.coverPhoto;

      document.getElementById("profile-pic-img").src = userObj.profilePic;

      document.getElementById("profile-name").innerText = userObj.name;

      document.getElementById("total-friends").innerText = userObj.totalFriends;

      document.getElementById("work-place").innerText = userObj.workPlace;

      document.getElementById("work-year").innerText = userObj.workYear;

      document.getElementById("college").innerText = userObj.college;

      document.getElementById("college-year").innerText = userObj.collegeYear;

      document.getElementById("current-city").innerText = userObj.currentCity;

      document.getElementById("permanent-city").innerText = userObj.permanentCity;

      document.getElementById("relationship").innerText = userObj.relationship;

      document.getElementById("contact-num").innerText = userObj.contactNum;

      displayFriends(userObj.friends);

      displayPhotos(userObj.photos);

      displayCheckIns(userObj.checkIns);

      displayGroups(userObj.groups);

    }

  })

})



/*====================================================== Display-Functions ==============================================================*/


/*================================================= Function-displayFriends ======================================================*/

function displayFriends(friendsArray){

  friendsArray.forEach((frndObj) => {

    if (frndObj.id == "frnd-1"){

      document.getElementById("friend-1-img").src = frndObj.img;
      document.getElementById("friend-1-name").innerText = frndObj.name;
      document.getElementById("friend-1-mutuals").innerText = frndObj.mutual;

    }
    else if (frndObj.id == "frnd-2"){

      document.getElementById("friend-2-img").src = frndObj.img;
      document.getElementById("friend-2-name").innerText = frndObj.name;
      document.getElementById("friend-2-mutuals").innerText = frndObj.mutual;

    }
    else if (frndObj.id == "frnd-3"){

      document.getElementById("friend-3-img").src = frndObj.img;
      document.getElementById("friend-3-name").innerText = frndObj.name;
      document.getElementById("friend-3-mutuals").innerText = frndObj.mutual;

    }
    else if (frndObj.id == "frnd-4"){

      document.getElementById("friend-4-img").src = frndObj.img;
      document.getElementById("friend-4-name").innerText = frndObj.name;
      document.getElementById("friend-4-mutuals").innerText = frndObj.mutual;

    }
    else if (frndObj.id == "frnd-5"){

      document.getElementById("friend-5-img").src = frndObj.img;
      document.getElementById("friend-5-name").innerText = frndObj.name;
      document.getElementById("friend-5-mutuals").innerText = frndObj.mutual;

    }
    else if (frndObj.id == "frnd-6"){

      document.getElementById("friend-6-img").src = frndObj.img;
      document.getElementById("friend-6-name").innerText = frndObj.name;
      document.getElementById("friend-6-mutuals").innerText = frndObj.mutual;

    }

  })

}


/*================================================= Function-displayPhotos ======================================================*/


function displayPhotos(photosArray){

  photosArray.forEach((photoObj) => {

    if (photoObj.id == "photo-1"){

      document.getElementById("photo-1").src = photoObj.img;

    }
    else if (photoObj.id == "photo-2"){

      document.getElementById("photo-2").src = photoObj.img;

    }
    else if (photoObj.id == "photo-3"){

      document.getElementById("photo-3").src = photoObj.img;

    }
    else if (photoObj.id == "photo-4"){

      document.getElementById("photo-4").src = photoObj.img;

    }
    else if (photoObj.id == "photo-5"){

      document.getElementById("photo-5").src = photoObj.img;

    }
    else if (photoObj.id == "photo-6"){

      document.getElementById("photo-6").src = photoObj.img;

    }
    else if (photoObj.id == "photo-7"){

      document.getElementById("photo-7").src = photoObj.img;

    }
    else if (photoObj.id == "photo-8"){

      document.getElementById("photo-8").src = photoObj.img;

    }

  })

}



/*================================================= Function-displayCheckIns ======================================================*/


function displayCheckIns(checkInsArray){

  checkInsArray.forEach((checkInsObj) => {

    if (checkInsObj.id == "checkIns-1"){

      document.getElementById("checkIns-1-img").src = checkInsObj.img;
      document.getElementById("check-ins-1-name").innerText = checkInsObj.name;
      document.getElementById("check-ins-1-details-1").innerText = checkInsObj.details_1;
      document.getElementById("check-ins-1-details-2").innerText = checkInsObj.details_2;

    }
    else if (checkInsObj.id == "checkIns-2"){

      document.getElementById("checkIns-2-img").src = checkInsObj.img;
      document.getElementById("check-ins-2-name").innerText = checkInsObj.name;
      document.getElementById("check-ins-2-details-1").innerText = checkInsObj.details_1;
      document.getElementById("check-ins-2-details-2").innerText = checkInsObj.details_2;

    }
    else if (checkInsObj.id == "checkIns-3"){

      document.getElementById("checkIns-3-img").src = checkInsObj.img;
      document.getElementById("check-ins-3-name").innerText = checkInsObj.name;
      document.getElementById("check-ins-3-details-1").innerText = checkInsObj.details_1;
      document.getElementById("check-ins-3-details-2").innerText = checkInsObj.details_2;

    }
    else if (checkInsObj.id == "checkIns-4"){

      document.getElementById("checkIns-4-img").src = checkInsObj.img;
      document.getElementById("check-ins-4-name").innerText = checkInsObj.name;
      document.getElementById("check-ins-4-details-1").innerText = checkInsObj.details_1;
      document.getElementById("check-ins-4-details-2").innerText = checkInsObj.details_2;

    }

  })

}



/*================================================= Function-displayGroups ======================================================*/


function displayGroups(groupsArray){

  groupsArray.forEach((groupObj) => {

    if (groupObj.id == "group-1"){

      document.getElementById("group-1-img").src = groupObj.img;
      document.getElementById("group-1-name").innerText = groupObj.name;
      document.getElementById("group-1-category").innerText = groupObj.category;
      document.getElementById("group-1-members").innerText = groupObj.members;

    }
    else if (groupObj.id == "group-2"){

      document.getElementById("group-2-img").src = groupObj.img;
      document.getElementById("group-2-name").innerText = groupObj.name;
      document.getElementById("group-2-category").innerText = groupObj.category;
      document.getElementById("group-2-members").innerText = groupObj.members;

    }
    else if (groupObj.id == "group-3"){

      document.getElementById("group-3-img").src = groupObj.img;
      document.getElementById("group-3-name").innerText = groupObj.name;
      document.getElementById("group-3-category").innerText = groupObj.category;
      document.getElementById("group-3-members").innerText = groupObj.members;

    }
    else if (groupObj.id == "group-4"){

      document.getElementById("group-4-img").src = groupObj.img;
      document.getElementById("group-4-name").innerText = groupObj.name;
      document.getElementById("group-4-category").innerText = groupObj.category;
      document.getElementById("group-4-members").innerText = groupObj.members;

    }

  })

}

