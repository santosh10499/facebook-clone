
/*======================================= Getting User-Email from local storage ===================================*/


let userEmail=localStorage.getItem('userEmail')



/*======================================= Side-fix-button - Dialog-Box ===================================*/

const sideFixButton = document.querySelector(".side-fix-button");
const crossButton = document.querySelector(".fa-xmark");

sideFixButton.addEventListener("click", (e) => {

    document.querySelector(".create_new_group").style.display = "block";
  
})

crossButton.addEventListener("click", (e) => {

  document.querySelector(".create_new_group").style.display = "none";

})








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
    document.querySelector(".popUp-divs-container").style.display = "block";
})

coverPhotoCancelBtn.addEventListener("click", ()=>{
    updateCoverPhotoDiv.style.display = "none";
    document.querySelector(".popUp-divs-container").style.display = "none";
})

/*---------------- Event-Listener for Profile-picture-Edit-Btn -----------------*/

profilePicCamera.addEventListener("click", ()=>{
    updateProfilePicDiv.style.display = "block";
    document.querySelector(".popUp-divs-container").style.display = "block";
})

profilePicCancelBtn.addEventListener("click", ()=>{
    updateProfilePicDiv.style.display = "none";
    document.querySelector(".popUp-divs-container").style.display = "none";
})






/*---------------- Event-Listener for Cover-Photo-UploadBtn -----------------*/

coverPhotoUploadBtn.addEventListener("click", ()=>{
    const coverPhotoUrl = updateCoverPhotoUrlInput.value;
    document.getElementById("cover-photo-img").src = coverPhotoUrl;
    updateCoverPhotoUrlInput.value = "";
})

/*---------------- Event-Listener for Profile-picture-UploadBtn -----------------*/

profilePicUploadBtn.addEventListener("click", ()=>{
    const profilePicUrl = updateProfileUrlInput.value;
    document.getElementById("profile-pic-img").src = profilePicUrl;
    updateProfileUrlInput.value = "";
})




/*=============================================================================================================================================*/






/*============================== Users-Array ============================================================================*/


let usersArray = [

  {
    name: "Rohan Palankar",
    email: "rohanpalankar8@gmail.com",
    profilePic: "https://scontent.fblr19-1.fna.fbcdn.net/v/t1.6435-9/58460714_2287391554832092_8244223977036185600_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=_H-Wll3YYZsAX_wV8nc&_nc_oc=AQlOjK0ZniGbopsnq7JZYOg1w9GN1PQB7BU7UsxJlvcX2Un_F7sRyu7W5y1Fzwzc6M8&_nc_ht=scontent.fblr19-1.fna&oh=00_AfCeZYKKBuYs6TYhmQ0cQzxSlEncwD2vKJQmCPXq_1T3uQ&oe=63D0D104",
    coverPhoto: "https://images.unsplash.com/photo-1462400362591-9ca55235346a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzN8fGxhbmRzY2FwZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60  ",
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
      {id:"frnd-1",name:"Rahul Shinde",mutual:"180 mutual friends",img:"https://scontent.fblr19-1.fna.fbcdn.net/v/t39.30808-6/300799642_4117214955171269_1357015044324035002_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=jLQIDEBmhBUAX8uUSCK&tn=MlK-62xn9mAFYEGv&_nc_ht=scontent.fblr19-1.fna&oh=00_AfA1VHc3RQWnGhz1x5fO6c1cbHafFgWgEe7_h6u2rFydLg&oe=63AF58D2"},
      {id:"frnd-2",name:"Nitin Palankar",mutual:"402 mutual friends",img:"https://scontent.fblr19-1.fna.fbcdn.net/v/t39.30808-6/313299241_3686539308239201_1044608399826045902_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=R-4NlfAnMv8AX-AVhwr&_nc_ht=scontent.fblr19-1.fna&oh=00_AfCQMaQF_I-uCexiMSWaiCrjR730UQwuO0oQ_qlShjJXZg&oe=63AE8841"},
      {id:"frnd-3",name:"Sunil Pise",mutual:"100 mutual friends",img:"https://scontent.fblr19-1.fna.fbcdn.net/v/t1.6435-9/124053197_1680319898797235_4879508572554340628_n.jpg?stp=dst-jpg_s1080x2048&_nc_cat=108&ccb=1-7&_nc_sid=e3f864&_nc_ohc=dIBk_m5aR6cAX8Xm8eY&tn=MlK-62xn9mAFYEGv&_nc_ht=scontent.fblr19-1.fna&oh=00_AfBrNhLH49cBz6XoAoboACnoqFDosDMOAvzb7Qq-UlJUOg&oe=63D0E6D2"},
      {id:"frnd-4",name:"Shivam Kale",mutual:"12 mutual friends",img:"https://scontent.fblr19-1.fna.fbcdn.net/v/t39.30808-6/310685772_102914442608898_699989746744650584_n.jpg?stp=cp6_dst-jpg_p720x720&_nc_cat=107&ccb=1-7&_nc_sid=e3f864&_nc_ohc=DBUgHpZ7bFUAX8XjRBK&_nc_ht=scontent.fblr19-1.fna&oh=00_AfDMJd0JZfPBFSEFUfeKoXr3eWrzkuaOBy04H4cmzxd6pg&oe=63AD93BD"},
      {id:"frnd-5",name:"Swapnil Jadhav",mutual:"87 mutual friends",img:"https://scontent.fblr19-1.fna.fbcdn.net/v/t39.30808-1/278701061_4947140945403149_260893688769938148_n.jpg?stp=dst-jpg_p320x320&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_ohc=BOTjU2LSo0QAX-5qW3g&_nc_ht=scontent.fblr19-1.fna&oh=00_AfCimbeLJTtyy6PkgymDMGh-SkpzNZ3-atnqzikuRrL8Jw&oe=63ADAE7C"},
      {id:"frnd-6",name:"Aditya Revankar",mutual:"250 mutual friends",img:"https://scontent.fblr19-1.fna.fbcdn.net/v/t1.6435-9/165693156_3011495162407034_9036206987992104802_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=nDvPBNNaLNcAX8keg5l&_nc_ht=scontent.fblr19-1.fna&oh=00_AfDqf0FcoDu9usPb2ENBBRhJWNk69w5oY7AU1fFpw4h6sw&oe=63D106D8"}
    ],
    photos: [
      {id:"photo-1",img:"https://scontent.fblr19-1.fna.fbcdn.net/v/t1.6435-9/67280999_2098581323779533_5057943557252317184_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=0Tv7ZuJBsv8AX-V_owN&tn=MlK-62xn9mAFYEGv&_nc_ht=scontent.fblr19-1.fna&oh=00_AfAMK-EdFGONH_g4Yddlv99OwwWn6yGWoHou662S7Po3Eg&oe=63D0EC40"},
      {id:"photo-2",img:"https://scontent.fblr19-1.fna.fbcdn.net/v/t1.6435-9/74682734_2431467927091120_1933154068281163776_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=qFxbP_LULkUAX9tysWt&_nc_ht=scontent.fblr19-1.fna&oh=00_AfD_O5XrPJRgHMWm6SLRRtMzkmfalIa3HG9TPt-lTtkRNg&oe=63D0D651"},
      {id:"photo-3",img:"https://scontent.fblr19-1.fna.fbcdn.net/v/t1.6435-9/74604671_2431210593783520_1886867252976812032_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=D5vjq4WFpKUAX860CKD&_nc_ht=scontent.fblr19-1.fna&oh=00_AfDjmYIbXy14uJD0-MTuiEzdjYZhU0tHX8I2HNAjG2J8uA&oe=63D0EF5A"},
      {id:"photo-4",img:"https://scontent.fblr19-1.fna.fbcdn.net/v/t1.6435-9/75580402_2431210543783525_1912186338589802496_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=gB29UnwxPhUAX9Zt8HT&tn=MlK-62xn9mAFYEGv&_nc_ht=scontent.fblr19-1.fna&oh=00_AfC-6dH_IeWnN8-5e068NhLxLmoDsjXZrl38V5FjfoU67g&oe=63D0FBA3"},
      {id:"photo-5",img:"https://scontent.fblr19-1.fna.fbcdn.net/v/t1.6435-9/69524860_2372884706282776_7724990842158448640_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=T5K3OHNiNhUAX9NFrIA&_nc_ht=scontent.fblr19-1.fna&oh=00_AfCZ-NxwCBraBb9tjFq6vzXj70kB48BJTA2wt1Aa2-grVg&oe=63D0D572"},
      {id:"photo-6",img:"https://scontent.fblr19-1.fna.fbcdn.net/v/t1.6435-9/58462731_2287412058163375_8486552066305556480_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=pA5hU4Rifq8AX9Z9ZBl&_nc_ht=scontent.fblr19-1.fna&oh=00_AfBUOm__-grBTw0yEMQuL_lBUZFfEOveCFJKC6fucU-vAw&oe=63D0E92C"},
      {id:"photo-7",img:"https://scontent.fblr19-1.fna.fbcdn.net/v/t1.6435-9/59328249_2287411988163382_2029500681630515200_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=pNknQIdA_1gAX_U3Xo5&tn=MlK-62xn9mAFYEGv&_nc_ht=scontent.fblr19-1.fna&oh=00_AfDEnQOCPCfL9Wk1t34wbufdRob_NPEXUSsah08nYVpeZA&oe=63D0ED87"},
      {id:"photo-8",img:"https://scontent.fblr19-1.fna.fbcdn.net/v/t1.6435-9/59391866_2287411884830059_7843916562439340032_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=46M64V3Bz8kAX8ghyGb&_nc_ht=scontent.fblr19-1.fna&oh=00_AfDVd7PTIKOyPrAbfW5hufxJwA3XmPICfD_43Mosuj7Y2Q&oe=63D10821"}
    ],
    checkIns: [
      {id:"checkIns-1",name:"Betalbatim, Goa, India",details_1:"Majorda",details_2:"Visited on December 19, 2019",img:"https://th.bing.com/th/id/OIP.bQJT7Lb5_O0vAUy8E0oSZwHaEK?w=322&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7"},
      {id:"checkIns-2",name:"Don Mueang Airport",details_1:"Bangkok, Thailand",details_2:"Visited on November 9, 2019",img:"https://scontent.fblr19-1.fna.fbcdn.net/v/t1.18169-9/10624965_1679064285652894_93471452215634055_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ESUSL9ifTscAX9YNNTc&_nc_ht=scontent.fblr19-1.fna&oh=00_AfCzm6swD9bOv-WRfgQdoJ4NQ5NRJII6LJNPVioMgoFVog&oe=63D10B96"},
      {id:"checkIns-3",name:"Chennai Airport",details_1:"Chennai, India",details_2:"Visited on November 8, 2019",img:"https://th.bing.com/th/id/OIP.bdHmvj3LfCrSVqSQHHnr7QHaE6?w=289&h=192&c=7&r=0&o=5&dpr=1.3&pid=1.7"},
      {id:"checkIns-4",name:"Goa Airport",details_1:"Mormugao, Goa",details_2:"Visited on November 8, 2019",img:"https://th.bing.com/th/id/OIP.5ltecM5UJ7FyEAr9wcFhPgHaEK?w=303&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"}
    ],
    groups: [
      {id:"group-1",name:"Konkani Friends",categoryIcon:"public",category:"Public group |",members:"1.9K members",img:"https://scontent.fblr19-1.fna.fbcdn.net/v/t39.30808-6/244409381_566127964700327_5014872789516970616_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8631f5&_nc_ohc=lXWCYDgwOV0AX_XcJyH&_nc_ht=scontent.fblr19-1.fna&oh=00_AfDNxUp1E1YZtg1ieRULjjkdDwWbKv9wh9gjnBHnNHKfuQ&oe=63AD9129"},
      {id:"group-2",name:"Daivadnya Pratibhe",categoryIcon:"public",category:"Public group |",members:"797 members",img:"https://scontent.fblr19-1.fna.fbcdn.net/v/t39.30808-6/245040133_4341962339173714_8439844709310079065_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8631f5&_nc_ohc=49crsT45DgYAX9NsmhJ&_nc_ht=scontent.fblr19-1.fna&oh=00_AfCdXVpkI_NBJLKzTuXCBzVq8-ROfFxLynz_leP2hZnR4g&oe=63AE152E"},
      {id:"group-3",name:"Passionpreneurs",categoryIcon:"public",category:"Public group |",members:"42.2K members",img:"https://scontent.fblr19-1.fna.fbcdn.net/v/t39.30808-6/224469468_4125355554228007_4122144367981821646_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8631f5&_nc_ohc=FNkfX3MGW8kAX90QXFD&_nc_ht=scontent.fblr19-1.fna&oh=00_AfDGq2sMzJC7C2N8O_60nSpGINPVCttvh_SgF-qEFoNOYA&oe=63ADE81B"},
      {id:"group-4",name:"Incredible Karwar",categoryIcon:"public",category:"Public group |",members:"4.9K members",img:"https://scontent.fblr19-1.fna.fbcdn.net/v/t39.30808-6/299427673_1040514539986613_6602557206582369554_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=8631f5&_nc_ohc=MuDhsK2lqBwAX_9AV3w&tn=MlK-62xn9mAFYEGv&_nc_ht=scontent.fblr19-1.fna&oh=00_AfD9HB5VRD7B9ubSV5gprMKDtCFnqwIzyJSbe-DxCo7LaA&oe=63AEAE74"}
    ]
  },

  {
    name: "Santosh Mehta",
    email: "santosh@gmail.com",
    profilePic: "https://images.unsplash.com/photo-1554311884-415bfda22b47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTU2fHxwZXJzb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60-1.fna.fbcdn.net/v/t1.6435-9/180555609_835950667306477_8372471323999180307_n.jpg?stp=c0.232.576.576a_dst-jpg_s851x315&_nc_cat=100&ccb=1-7&_nc_sid=da31f3&_nc_ohc=X_lWHKpsJCcAX_d_x_a&_nc_ht=scontent.fdbd1-1.fna&oh=00_AfDveHHlzXU6eM7ISWaR-KmFLTWleTld-Ub-47Q-c3hpkQ&oe=63CBA2B8://scontent.fdbd1-2.fna.fbcdn.net/v/t39.30808-6/272761181_1011609503073925_5723654845178925652_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=-uIbQyVbT9sAX_QROVi&_nc_oc=AQlYysLgwkhD0CQIhatqnkjw07-Hwzoiw8lgu7Fu9gd2X8quntvLbRivNs15eXOELWSEioi1fVSFm0i3F8uNTPZJ&tn=BOMrDsLuOSui51gf&_nc_ht=scontent.fdbd1-2.fna&oh=00_AfAMStQAwDcpfRmdoR3PEwByjcYjYQosva6lefqBCh0F8Q&oe=63A8D1B0",
    coverPhoto: "https://images.unsplash.com/photo-1468276311594-df7cb65d8df6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGxhbmRzY2FwZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    totalFriends: "1K friends",
    workPlace: "Worked at Facebook Management",
    workYear: "2015 to 2022",
    college: "Studied at Aiscet University",
    collegeYear: "2017 to 2020",
    currentCity: "Lives in Jharkhand",
    permanentCity: "From Jharkhand",
    relationship: "Single",
    contactNum: "099396 81016",
    friends: [
      {id:"frnd-1",name:"Rahul Mehta",mutual:"270 mutual friends",img:"https://images.unsplash.com/photo-1508341591423-4347099e1f19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"},
      {id:"frnd-2",name:"Satish Mehta",mutual:"301 mutual friends",img:"https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG1lbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"},
      {id:"frnd-3",name:"Ranjeet Gope",mutual:"110 mutual friends",img:"https://images.unsplash.com/photo-1492446845049-9c50cc313f00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"},
      {id:"frnd-4",name:"Nitu Mehta",mutual:"18 mutual friends",img:"https://images.unsplash.com/photo-1610088441520-4352457e7095?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG1lbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"},
      {id:"frnd-5",name:"Swapnil Gupta",mutual:"107 mutual friends",img:"https://images.unsplash.com/photo-1481437642641-2f0ae875f836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG1lbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"},
      {id:"frnd-6",name:"Vivek Mehta",mutual:"168 mutual friends",img:"https://images.unsplash.com/photo-1584043720379-b56cd9199c94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG1lbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"}
    ],
    photos: [
      {id:"photo-1",img:"https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"},
      {id:"photo-2",img:"https://images.unsplash.com/photo-1450133064473-71024230f91b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fG1lbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"},
      {id:"photo-3",img:"https://images.unsplash.com/photo-1605192554106-d549b1b975cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzF8fG1lbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"},
      {id:"photo-4",img:"https://images.unsplash.com/photo-1589591990984-68a20755020d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODN8fG1lbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"},
      {id:"photo-5",img:"https://images.unsplash.com/photo-1520975661595-6453be3f7070?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODZ8fG1lbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"},
      {id:"photo-6",img:"https://images.unsplash.com/photo-1530882548122-0596ee66cdfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTh8fG1lbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"},
      {id:"photo-7",img:"https://images.unsplash.com/photo-1520975867597-0af37a22e31e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAwfHxtZW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"},
      {id:"photo-8",img:"https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTl8fG1lbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"}
    ],
    checkIns: [
      {id:"checkIns-1",name:"Tagore Hill",details_1:"Jharkhand",details_2:"Visited on may 19, 2021",img:"https://th.bing.com/th/id/OIP.iqnUsgPJpRJIC8PnDWpYNwHaE5?w=281&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7"},
      {id:"checkIns-2",name:"Pahari Mandir",details_1:"Jharkhand",details_2:"Visited on December 9, 2020",img:"https://th.bing.com/th/id/OIP.TT74EaVYMJduuMNBNbOp-AHaE6?w=250&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"},
      {id:"checkIns-3",name:"Jagannath Temple",details_1:"Jharkhand",details_2:"Visited on November 8, 2020",img:"https://th.bing.com/th/id/OIP.8fbVqjWUNx71YpWdrRoKRQHaFj?w=246&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7"},
      {id:"checkIns-4",name:"Nakshatra Van",details_1:"Jharkhand",details_2:"Visited on April 8, 2019",img:"https://th.bing.com/th/id/OIP.-q8gha9J5C6U7p8wJ9B7OQHaEJ?w=290&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"}
    ],
    groups: [
      {id:"group-1",name:"Young India",categoryIcon:"public",category:"Public group |",members:"15K members",img:"https://th.bing.com/th/id/OIP.u6d1hFa1z48Xbim5wy62HwHaHa?w=199&h=199&c=7&r=0&o=5&dpr=1.3&pid=1.7"},
      {id:"group-2",name:"Local News",categoryIcon:"public",category:"Public group |",members:"605 members",img:"https://th.bing.com/th/id/OIP.iljR8ZF82Us3ispXotKijQHaE8?w=272&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7"},
      {id:"group-3",name:"Friends",categoryIcon:"public",category:"Public group |",members:"30 members",img:"https://th.bing.com/th/id/OIP.JxTU_DlQQFHW8DgE5rdXTQHaEK?w=275&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"},
      {id:"group-4",name:"My City",categoryIcon:"public",category:"Public group |",members:"12.5K members",img:"https://images.unsplash.com/photo-1444723121867-7a241cacace9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2l0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"}
    ]
  },

  {
    name: "Sonu Chandravanshi",
    email: "ss0149952@gmail.com",
    profilePic: "https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    coverPhoto: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFuZHNjYXBlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    totalFriends: "1.5K friends",
    workPlace: "Worked at Asha Devi Firms",
    workYear: "2022",
    college: "Studied at Ramanujan College",
    collegeYear: "2019 to 2022",
    currentCity: "Lives in Faridabad",
    permanentCity: "From Sasaram",
    relationship: "Single",
    contactNum: "083683 79257",
    friends: [
      {id:"frnd-1",name:"Amul Singh",mutual:"170 mutual friends",img:"https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"},
      {id:"frnd-2",name:"Satish Gupta",mutual:"221 mutual friends",img:"https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"},
      {id:"frnd-3",name:"Shubham Singh",mutual:"310 mutual friends",img:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njd8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"},
      {id:"frnd-4",name:"Deepak Mandal",mutual:"48 mutual friends",img:"https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzN8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"},
      {id:"frnd-5",name:"Manjeet",mutual:"207 mutual friends",img:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzh8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"},
      {id:"frnd-6",name:"Ashok Meena",mutual:"178 mutual friends",img:"https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODB8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"}
    ],
    photos: [
      {id:"photo-1",img:"https://images.unsplash.com/photo-1492567291473-fe3dfc175b45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTJ8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"},
      {id:"photo-2",img:"https://images.unsplash.com/photo-1495366691023-cc4eadcc2d7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTZ8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"},
      {id:"photo-3",img:"https://images.unsplash.com/photo-1493863641943-9b68992a8d07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAwfHxwZXJzb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"},
      {id:"photo-4",img:"https://images.unsplash.com/photo-1543357480-c60d40007a3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA5fHxwZXJzb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"},
      {id:"photo-5",img:"https://images.unsplash.com/photo-1496016943515-7d33598c11e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI0fHxwZXJzb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"},
      {id:"photo-6",img:"https://images.unsplash.com/photo-1490730141103-6cac27aaab94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTM2fHxwZXJzb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"},
      {id:"photo-7",img:"https://images.unsplash.com/photo-1563584316028-2b70b3a3a8bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQ1fHxwZXJzb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"},
      {id:"photo-8",img:"https://images.unsplash.com/photo-1464746133101-a2c3f88e0dd9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTYwfHxwZXJzb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"}
    ],
    checkIns: [
      {id:"checkIns-1",name:"Bodh Gaya",details_1:"Bihar",details_2:"Visited on January 19, 2022",img:"https://th.bing.com/th/id/OIP.skm0fhoS--w1dw0uCJz3EAHaE3?w=274&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"},
      {id:"checkIns-2",name:"Patna",details_1:"Bihar",details_2:"Visited on November 9, 2021",img:"https://th.bing.com/th/id/OIP.btTlpFkzyxKWbzv0bVZRFgHaE3?w=266&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"},
      {id:"checkIns-3",name:"Iskcon Temple",details_1:"Faridabad",details_2:"Visited on August 8, 2021",img:"https://th.bing.com/th/id/OIP.8tvFC9XSfaYGpWxqCMk9dwHaFj?w=218&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"},
      {id:"checkIns-4",name:"CITM Lake",details_1:"Faridabad",details_2:"Visited on September 8, 2019",img:"https://th.bing.com/th/id/OIP.CRPjLIvPlwDeVkpH5I3ASAHaEK?w=301&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"}
    ],
    groups: [
      {id:"group-1",name:"Cricket Lovers",categoryIcon:"public",category:"Public group |",members:"14K members",img:"https://th.bing.com/th/id/OIP.o6K4GHxvB3JsjUbSw_riqgHaHa?w=173&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"},
      {id:"group-2",name:"Dreamers",categoryIcon:"public",category:"Public group |",members:"555 members",img:"https://th.bing.com/th/id/OIP.Vlfpge50hTcZfLYErn_yJgHaE7?w=286&h=190&c=7&r=0&o=5&dpr=1.3&pid=1.7"},
      {id:"group-3",name:"Hustlers",categoryIcon:"public",category:"Public group |",members:"4K members",img:"https://th.bing.com/th/id/OIP.QVvpcpsyPpR9u0peJO9D-gHaFj?w=223&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"},
      {id:"group-4",name:"Knowledge Hub",categoryIcon:"public",category:"Public group |",members:"8.2K members",img:"https://th.bing.com/th/id/OIP.V5hiehbUg0umHZ4fsNSWtAHaE7?w=253&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"}
    ]
  },

  {
    name: "Varsha Rajput",
    email: "varsharajput353@gmail.com",
    profilePic: "https://images.unsplash.com/photo-1564463836146-4e30522c2984?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTkyfHxwZXJzb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    coverPhoto: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80",
    totalFriends: "1.2K friends",
    workPlace: "Worked at Herbal Life",
    workYear: "2022",
    college: "Studied at Delhi University",
    collegeYear: "2018 to 2021",
    currentCity: "Lives in Delhi",
    permanentCity: "From Delhi",
    relationship: "Single",
    contactNum: "098765 43210",
    friends: [
      {id:"frnd-1",name:"Kajal",mutual:"70 mutual friends",img:"https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"},
      {id:"frnd-2",name:"Tanmay",mutual:"123 mutual friends",img:"https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"},
      {id:"frnd-3",name:"Ajay",mutual:"150 mutual friends",img:"https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTk4fHxwZXJzb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"},
      {id:"frnd-4",name:"Arti",mutual:"74 mutual friends",img:"https://images.unsplash.com/photo-1534083264897-aeabfc7daf8a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTZ8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"},
      {id:"frnd-5",name:"Aditya",mutual:"114 mutual friends",img:"https://images.unsplash.com/photo-1493863641943-9b68992a8d07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAwfHxwZXJzb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"},
      {id:"frnd-6",name:"Ashutosh",mutual:"544 mutual friends",img:"https://images.unsplash.com/photo-1518644730709-0835105d9daa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjg5fHxwZXJzb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"}
    ],
    photos: [
      {id:"photo-1",img:"https://images.unsplash.com/photo-1533850595620-7b1711221751?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODR8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"},
      {id:"photo-2",img:"https://images.unsplash.com/photo-1563620915-8478239e9aab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAyfHxwZXJzb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"},
      {id:"photo-3",img:"https://images.unsplash.com/photo-1595857997852-6cdae332b05b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTc4fHxwZXJzb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"},
      {id:"photo-4",img:"https://plus.unsplash.com/premium_photo-1671826911760-428bb82c4e80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjA3fHxwZXJzb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"},
      {id:"photo-5",img:"https://plus.unsplash.com/premium_photo-1664368832479-6ebece395287?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjMxfHxwZXJzb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"},
      {id:"photo-6",img:"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjJ8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"},
      {id:"photo-7",img:"https://images.unsplash.com/photo-1499482125586-91609c0b5fd4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"},
      {id:"photo-8",img:"https://images.unsplash.com/photo-1542596768-5d1d21f1cf98?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTF8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"}
    ],
    checkIns: [
      {id:"checkIns-1",name:"India Gate",details_1:"Delhi",details_2:"Visited on January 10, 2022",img:"https://th.bing.com/th/id/OIP.TORxZ4PKIR-O65dZm-ACVwHaEx?w=306&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7"},
      {id:"checkIns-2",name:"Chandni Chowk",details_1:"Delhi",details_2:"Visited on November 22, 2021",img:"https://th.bing.com/th/id/OIP.AhxHvRLzIfsO0RJDmZN2kgHaFc?w=240&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"},
      {id:"checkIns-3",name:"Connaught Place",details_1:"Delhi",details_2:"Visited on July 8, 2021",img:"https://th.bing.com/th/id/OIP.hGqHc10A6d7TLLmYBgGIYgHaE8?w=247&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"},
      {id:"checkIns-4",name:"Lotus Temple",details_1:"Delhi",details_2:"Visited on March 1, 2021",img:"https://th.bing.com/th/id/OIP.km7Ii7q1YWbFqubZsfb1mgHaFq?w=265&h=203&c=7&r=0&o=5&dpr=1.3&pid=1.7"}
    ],
    groups: [
      {id:"group-1",name:"Developers Hub",categoryIcon:"public",category:"Public group |",members:"2.1K members",img:"https://th.bing.com/th/id/OIP.4N-h2V5ZQmhXOReLfH7rNgHaEK?w=277&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"},
      {id:"group-2",name:"Science Facts",categoryIcon:"public",category:"Public group |",members:"21.3k members",img:"https://th.bing.com/th/id/OIP.cmf4G5jPX6gCMAGdy0jEbQHaGV?w=214&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7"},
      {id:"group-3",name:"Travellers",categoryIcon:"public",category:"Public group |",members:"4.2K members",img:"https://th.bing.com/th/id/OIP.Bbd02JmKN7q0WuDlhQFmUgHaFj?w=204&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"},
      {id:"group-4",name:"Incredible Delhi",categoryIcon:"public",category:"Public group |",members:"87K members",img:"https://th.bing.com/th/id/OIP.5POpapmp5vfzDh6Pa58XVgHaEK?w=323&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7"}
    ]
  }

]










/*============================================= Rendering User-Profile-details =================================================*/


  usersArray.forEach((userObj) => {

    if (userEmail == userObj.email){

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




/*====================================================== Display-Functions ==============================================================*/


/*================================================= Function-displayFriends ======================================================*/

function displayFriends(friendsArray){

  friendsArray.forEach((frndObj) => {

    if (frndObj.id == "frnd-1"){

      document.getElementById("friend-1-small-img").src = frndObj.img;
      document.getElementById("friend-1-img").src = frndObj.img;
      document.getElementById("friend-1-name").innerText = frndObj.name;
      document.getElementById("friend-1-mutuals").innerText = frndObj.mutual;

    }
    else if (frndObj.id == "frnd-2"){

      document.getElementById("friend-2-small-img").src = frndObj.img;
      document.getElementById("friend-2-img").src = frndObj.img;
      document.getElementById("friend-2-name").innerText = frndObj.name;
      document.getElementById("friend-2-mutuals").innerText = frndObj.mutual;

    }
    else if (frndObj.id == "frnd-3"){

      document.getElementById("friend-3-small-img").src = frndObj.img;
      document.getElementById("friend-3-img").src = frndObj.img;
      document.getElementById("friend-3-name").innerText = frndObj.name;
      document.getElementById("friend-3-mutuals").innerText = frndObj.mutual;

    }
    else if (frndObj.id == "frnd-4"){

      document.getElementById("friend-4-small-img").src = frndObj.img;
      document.getElementById("friend-4-img").src = frndObj.img;
      document.getElementById("friend-4-name").innerText = frndObj.name;
      document.getElementById("friend-4-mutuals").innerText = frndObj.mutual;

    }
    else if (frndObj.id == "frnd-5"){

      document.getElementById("friend-5-small-img").src = frndObj.img;
      document.getElementById("friend-5-img").src = frndObj.img;
      document.getElementById("friend-5-name").innerText = frndObj.name;
      document.getElementById("friend-5-mutuals").innerText = frndObj.mutual;

    }
    else if (frndObj.id == "frnd-6"){

      document.getElementById("friend-6-small-img").src = frndObj.img;
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
      document.getElementById("group-1-category-icon").innerText = groupObj.categoryIcon;
      document.getElementById("group-1-category").innerText = groupObj.category;
      document.getElementById("group-1-members").innerText = groupObj.members;

    }
    else if (groupObj.id == "group-2"){

      document.getElementById("group-2-img").src = groupObj.img;
      document.getElementById("group-2-name").innerText = groupObj.name;
      document.getElementById("group-2-category-icon").innerText = groupObj.categoryIcon;
      document.getElementById("group-2-category").innerText = groupObj.category;
      document.getElementById("group-2-members").innerText = groupObj.members;

    }
    else if (groupObj.id == "group-3"){

      document.getElementById("group-3-img").src = groupObj.img;
      document.getElementById("group-3-name").innerText = groupObj.name;
      document.getElementById("group-3-category-icon").innerText = groupObj.categoryIcon;
      document.getElementById("group-3-category").innerText = groupObj.category;
      document.getElementById("group-3-members").innerText = groupObj.members;

    }
    else if (groupObj.id == "group-4"){

      document.getElementById("group-4-img").src = groupObj.img;
      document.getElementById("group-4-name").innerText = groupObj.name;
      document.getElementById("group-4-category-icon").innerText = groupObj.categoryIcon;
      document.getElementById("group-4-category").innerText = groupObj.category;
      document.getElementById("group-4-members").innerText = groupObj.members;

    }

  })

}






/*=============================== Event-Listeners to move to different pages ===========================================*/


/*=============== On-click FB-logo =================*/

const fb_logo = document.querySelector("#fb_logo");

fb_logo.addEventListener("click", () => {
  window.location.href = "/pages/header.html";
});


/*=============== On-click Home-logo =================*/

const home = document.querySelector("#home");

home.addEventListener("click", () => {

  window.location.href = "/pages/header.html";
});


/*=============== On-click Friends-logo =================*/

const friend = document.querySelector("#friend");

friend.addEventListener("click", () => {
  window.location.href = "/pages/friends.html";
});


/*=============== On-click Logout-logo =================*/

const logOut = document.querySelector("#logout");

logOut.addEventListener("click", () => {
  window.location.href = "/index.html";
});















const seeMore = document.getElementById("see_more");
const seeLess = document.getElementById("see_less");
const moreItems =document.getElementById("more_items")


/**------------for prfile_dialouge_box----------------------- */

const prfileDialogueBox = document.querySelector(".prfile_dialogue_box")
const profile = document.querySelector("#profile")

const bars = document.querySelector("#bars")
const outer_container = document.querySelector(".aside_container")



/**---------------------click event profile------------------------ */

profile.addEventListener("click",(e)=>{
  if (prfileDialogueBox.style.display == "block") {
      prfileDialogueBox.style.display = "none";
    } else {
      prfileDialogueBox.style.display = "block";
    }
})


bars.addEventListener("click",(e)=>{
  if (outer_container.style.display == "block") {
      outer_container.style.display = "none";
    } else {
      outer_container.style.display = "block";
    }
})


//  notification dialouge_box;

const notification_popUp = document.querySelector(".notification");
const notifications = document.querySelector("#notifications");

notifications.addEventListener("click",(e)=>{
  if (notification_popUp.style.display == "block") {
      notification_popUp.style.display = "none";
    } else {
      notification_popUp.style.display = "block";
    }
})


// messenger dialouge_box;

const messenger_popUp = document.querySelector(".messenger");
const messenger = document.querySelector("#messenger");

messenger.addEventListener("click",(e)=>{
  if (messenger_popUp.style.display == "block") {
      messenger_popUp.style.display = "none";
    } else {
      messenger_popUp.style.display = "block";
    }
})


// plus_items dialouge_box;

const plus_items_popUp = document.querySelector(".plus_items");
const grid = document.querySelector("#grid")

grid.addEventListener("click",(e)=>{
    if (plus_items_popUp.style.display == "block") {
        plus_items_popUp.style.display = "none";
      } else {
        plus_items_popUp.style.display = "block";
      }
  })

  //=========================for displaying user profile=============

let userdata=[{email: "santosh@gmail.com",profilePic: "https://images.unsplash.com/photo-1554311884-415bfda22b47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTU2fHxwZXJzb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60-1.fna.fbcdn.net/v/t1.6435-9/180555609_835950667306477_8372471323999180307_n.jpg?stp=c0.232.576.576a_dst-jpg_s851x315&_nc_cat=100&ccb=1-7&_nc_sid=da31f3&_nc_ohc=X_lWHKpsJCcAX_d_x_a&_nc_ht=scontent.fdbd1-1.fna&oh=00_AfDveHHlzXU6eM7ISWaR-KmFLTWleTld-Ub-47Q-c3hpkQ&oe=63CBA2B8://scontent.fdbd1-2.fna.fbcdn.net/v/t39.30808-6/272761181_1011609503073925_5723654845178925652_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=-uIbQyVbT9sAX_QROVi&_nc_oc=AQlYysLgwkhD0CQIhatqnkjw07-Hwzoiw8lgu7Fu9gd2X8quntvLbRivNs15eXOELWSEioi1fVSFm0i3F8uNTPZJ&tn=BOMrDsLuOSui51gf&_nc_ht=scontent.fdbd1-2.fna&oh=00_AfAMStQAwDcpfRmdoR3PEwByjcYjYQosva6lefqBCh0F8Q&oe=63A8D1B0"},
{email: "varsharajput353@gmail.com",profilePic: "https://images.unsplash.com/photo-1564463836146-4e30522c2984?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTkyfHxwZXJzb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"},
{email:"ss0149952@gmail.com",profilePic: "https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"},
{email: "rohanpalankar8@gmail.com",profilePic: "https://scontent.fblr19-1.fna.fbcdn.net/v/t1.6435-9/58460714_2287391554832092_8244223977036185600_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=_H-Wll3YYZsAX_wV8nc&_nc_oc=AQlOjK0ZniGbopsnq7JZYOg1w9GN1PQB7BU7UsxJlvcX2Un_F7sRyu7W5y1Fzwzc6M8&_nc_ht=scontent.fblr19-1.fna&oh=00_AfCeZYKKBuYs6TYhmQ0cQzxSlEncwD2vKJQmCPXq_1T3uQ&oe=63D0D104"}];

let Email=localStorage.getItem('userEmail');
console.log(Email)
let userimage=document.querySelectorAll('.userimage');

for(let k=0;k<userdata.length;k++)
{
for(let i=0;i<userimage.length;i++)
{
if(userdata[k].email==Email)
{

userimage[i].src=userdata[k].profilePic
}
}
}
// for user name displaying
let userName=document.querySelectorAll('.user-name');

// ================================get data from localStorage
let firstname=localStorage.getItem('firstName');
let lastname=localStorage.getItem('LastName');



for(let i=0;i<userName.length;i++)
{
userName[i].innerText=firstname +" " +lastname;
}

// ==========================logout

logout.addEventListener('click',()=>{
    window.location.href='/index.html'
})