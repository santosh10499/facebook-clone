const confirmBtn =document.querySelectorAll("#cnfm");
const delBtn = document.querySelectorAll("#delete-btn");
const addBtn = document.querySelectorAll("#add-btn");
const removeBtn = document.querySelectorAll("#remove-btn");
const cancel = document.querySelectorAll('#cancel');
const frnd_request = document.getElementById('friend-request');
const frnd_suggestion = document.getElementById('frnd-suggestion');
const allfrnd = document.getElementById('all-frnd');
// const asidebar = documnet.querySelector('suggestion-aside-bar');
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
for(const bts of removeBtn){
    bts.addEventListener('click', function(){
        bts.parentElement.parentElement.style.display = 'none'
    })
}


// =====================for canceling send request===========================================================
for(const bts of cancel){
    bts.addEventListener('click', function(){
        bts.style.display = 'none';
        bts.previousElementSibling.previousElementSibling.previousElementSibling.style.display = 'flex';
        bts.previousElementSibling.previousElementSibling.style.display = 'flex';
        bts.previousElementSibling.style.display = 'none'
    })
}


// =========================friend request button ===========================================

frnd_request.addEventListener('click', function(){
  if(window.matchMedia('(max-width: 480px)').matches == true){
    const bar = document.getElementById('suggestion-aside-bar');
    const item = document.getElementById('suggestion-item');
    const frnd1 = document.getElementById('sec1');
    const frndHead1 = document.getElementById('cont1');
    const wrap = document.getElementById('create_post_Wrapper');
    const frnd = document.getElementById('sec2');
    const frndHead = document.getElementById('cont2');
    wrap.style.display = "none";
    bar.style.display = 'none';
    item.style.display = 'block';
    item.style.left = '5%'
    item.style.width = "90%";
    frnd1.style.display = 'flex';
    frnd1.style.width = "100%";
    frnd1.style.justifyContent = "center";
    frndHead1.style.display ='flex';
    frndHead1.style.marginTop = "-1em";
    frndHead1.style.justifyContent = 'spaceBetween'
    frndHead1.style.width = "100%";
    frnd.style.display = 'none';
    frndHead.style.display = 'none';
    hr.style.display = 'none';
  }else {
    frnd_request.firstElementChild.style.bgColor = "#1877f2";
    frnd_request.style.bgColor = "#f0f2f5";
    const frnd = document.getElementById('sec2');
    const frndHead = document.getElementById('cont2');
    const frnd1 = document.getElementById('sec1');
    const frndHead1 = document.getElementById('cont1')
    frnd1.style.display = 'flex';
    frndHead1.style.display = 'flex';
    frndHead.style.display = 'none';
    frnd.style.display = 'none';
  }
});

// ==========================friend Suggestion button===========================================


frnd_suggestion.addEventListener('click', function(){
  if(window.matchMedia('(max-width: 480px)').matches == true){
    const bar = document.getElementById('suggestion-aside-bar');
    const item = document.getElementById('suggestion-item');
    const frnd = document.querySelector('#sec2');
    const frndHead = document.querySelector('#cont2');
    const frnd1 = document.getElementById('sec1');
    const frndHead1 = document.getElementById('cont1')
    const wrap = document.getElementById('create_post_Wrapper');
    bar.style.display = 'none';
    item.style.display = 'block';
    frnd.style.display = 'flex';
    frnd.style.width = "100%";
    frnd.style.justifyContent = 'center';
    frndHead.style.display ='flex';
    frndHead.style.marginTop = "-1em";
    frndHead.style.width = "100%";
    frnd1.style.display ='none';
    frndHead1.style.display = 'none';
    wrap.style.display = "none";
    bar.style.display = 'none';
    item.style.display = 'block';
    item.style.left = '5%';
    item.style.width = "90%";
  }
    const frnd = document.querySelector('#sec2');
    const frndHead = document.querySelector('#cont2');
    const frnd1 = document.getElementById('sec1');
    const frndHead1 = document.getElementById('cont1')
    const hr = document.getElementById('hr')
    hr.style.display = 'none';
    frnd1.style.display = 'none';
    frndHead1.style.display = 'none';
    frndHead.style.display = 'flex';
    frnd.style.display = 'flex';
});



// =======================all friend button ==========================================
allfrnd.addEventListener('click', function(){
  if(window.matchMedia('(max-width: 480px)').matches == true){
    const bar = document.getElementById('suggestion-aside-bar');
    const item = document.getElementById('suggestion-item');
    const frnd = document.querySelector('#sec2');
    const frndHead = document.querySelector('#cont2');
    const frnd1 = document.getElementById('sec1');
    const frndHead1 = document.getElementById('cont1');
    const wrap = document.getElementById('create_post_Wrapper');
    frnd1.style.display = 'flex';
    frnd1.style.width = "100%";
    frnd1.style.justifyContent = 'center';
    frndHead1.style.display = 'flex';
    frndHead1.style.width = "100%";
    frndHead.style.display = 'flex';
    frndHead.style.width = "100%";
    frnd.style.display = 'flex';
    frnd.style.justifyContent = 'center';
    frnd.style.width = "100%";
    bar.style.display = 'none';
    item.style.display = 'block';
    wrap.style.display = "none";
    bar.style.display = 'none';
    item.style.display = 'block';
    item.style.left = '5%'
    item.style.width = "90%";
  }else {
    const frnd = document.querySelector('#sec2');
    const frndHead = document.querySelector('#cont2');
    const frnd1 = document.getElementById('sec1');
    const frndHead1 = document.getElementById('cont1');
    const hr = document.getElementById('hr')
    hr.style.display = 'block';
    frnd1.style.display = 'flex';
    frndHead1.style.display = 'flex';
    frndHead.style.display = 'flex';
    frnd.style.display = 'flex';
  }
});



/*=============== On-click FB-logo =================*/

fb_logo.addEventListener("click", () => {
    window.location.href = "/pages/header.html";
});


/*=============== On-click Home-logo =================*/


home.addEventListener("click", () => {
  window.location.href = "/pages/header.html";
});
  
  const friendIcon = document.querySelector("#friend");
  
 
/*=============== On-click Friends-logo =================*/

friendIcon.addEventListener("click", () => {
  window.location.href = "/pages/friends.html";
});


/*=============== On-click Logout-logo =================*/

const logOut = document.querySelector("#logout");

logOut.addEventListener("click", () => {
  window.location.href = "/index.html";
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
