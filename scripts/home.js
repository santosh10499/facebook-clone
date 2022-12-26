const content = document.querySelector("#content");

content.innerHTML += `<div class="create_story">
<div class="story_reel_room">
  <p><i class="fa-solid fa-book-open"></i>Stories</p>
  <p><img src="/images/reels2.png" alt="reels" width="20px" /> Reels</p>
  <p><i class="fa-solid fa-video"></i>Rooms</p>
</div>
<div class="stories">
  <div class="" >
    <img class="userimage"
      src="/images/profile2.png"
      alt="story"
      id="my_story"
    />
    <div class="">
    <i class="fa-fa fa-plus forHome pointer"></i>
      <span>Create story</span>
    </div>
  </div>
  <div class="container">
    <img
      src="/images/story2.png"
      alt="story"
      class="bgImg img pointer"
    />
    <img src="/images/story4.png" alt="story" class="story pointer" />
    <span>Smarti</span>
  </div>

  <div class="container">
    <img
      src="/images/story3.png"
      alt="story"
      class="bgImg img pointer"
    />
    <img src="/images/story3.png" alt="story" class="story pointer" />
    <span>Vinay</span>
  </div>

   <div class="container">
    <img
      src="/images/story1.png"
      alt="story"
      class="bgImg img pointer"
    />
    <img src="/images/story3.png" alt="story" class="story pointer" />
    <span>Mehak</span>
  </div>



  <div class="container">
    <img
      src="/images/story2.png"
      alt="story"
      class="bgImg img pointer"
    />
    <img src="/images/story4.png" alt="story" class="story pointer" />
    <span>Gallery</span>
  </div>
  <div class="container">
    <img
      src="/images/story3.png"
      alt="story"
      class="bgImg img pointer"
    />
    <img src="/images/story2.png" alt="story" class="story pointer" />
    <span>shruti</span>
  </div>
  <div class="container">
    <img
      src="/images/story4.png"
      alt="story"
      class="bgImg img pointer"
    />
    <img src="/images/story1.png" alt="story" class="story pointer" />
    <span>Vihaan</span>
  </div>
</div>
</div>
<!-----------------------end 0f stories -------------------------->

<div class="posts">
<div class="about_post">
  <img
    src="/images/profile2.png"
    alt=""
    class="profile bg hover"
    width="45px"
  />
  <input type="text" placeholder="What's on your mind?" id="post-input"/>
</div>
<div class="photo_video">
  <p class="hover">🎥 Live video</p>
  <p class="hover" id="Add_post">
    <img src="/images/gallery.png" alt="photo" width="40px" />
    Photo/video
  </p>
  
  <p class="hover display_none">😃 Feeling/activity</p>
</div>
</div>






<!-- --------------dummy post------------------- -->
<div class="dummy_posts">
<!-- -----------------data rendered------------------ -->
</div>

</div>


<!-- -------------dialogue boxes---------------- -->

<div class="create_post_Wrapper" id="create_post_Wrapper">
  <div class="create_post" id="popUp">
    <h3>Create post</h3>
    <i class="fa-solid fa-xmark hover"></i>
    <div class="about_post">
      <div class="name">
        <img
          src="/images/profile2.png"
          alt=""
          class="profile bg hover userimage"
          width="45px"
        />
        <div class="btn">
          <span class="user-name">Varsha Rajput</span>
          <button class="pointer" id="post-audience">
            <i class="fa-solid fa-user-group"></i>Friends<i
              class="fa-solid fa-caret-down"
            ></i>
          </button>
        </div>
      </div>
    </div>
    <div class="text">
      <textarea placeholder="What's on your mind?" id="create-post-text-input"></textarea>
      <i class="fa-regular fa-face-smile"></i>
    </div>

    <div class="photo pointer">
      <i class="fa-solid fa-xmark hover"></i>
      <div class="inner_div hover">
        <i class="fa-regular fa-file-image hover bg iconBg"></i>
        <p>Add photos/videos</p>
        <input type="text" id="create-post-url-input" placeholder="Enter URL">
      </div>
    </div>

    <div class="bottom">
      <p>Add to your post</p>
      <img
        src="/images/gallery.png"
        alt="photo"
        width="25px"
        class="pointer"
      />
      <img
        src="/images/find_friends.png"
        alt="find friends"
        class="pointer"
        width="20px"
      />
      <i class="fa-regular fa-face-smile yellow pointer"></i>
      <i class="fa-solid fa-location-dot red pointer"></i>
      <i class="fa-solid fa-flag pointer"></i>
      <i class="fa-solid fa-ellipsis pointer hover bg"></i>
    </div>
    <button id="create-post-btn" disabled>Post</button>
  </div>
</div>
`;


/*==================================== Post-Creator Dialog-box pop-up and close ============================================*/

const Add_post = document.querySelector("#Add_post");
const postCreator = document.querySelector("#create_post_Wrapper");
const postInput = document.querySelector("#post-input");

// on-clicking Post-input

postInput.addEventListener("click", (e) => {
  
  postCreator.style.display = "block";
  
});

// on-clicking Photo/Video

Add_post.addEventListener("click", (e) => {
  
  postCreator.style.display = "block";
  
});

// on-clicking cross button

const fa_xmark = document.querySelector(".fa-xmark");

fa_xmark.addEventListener("click", () => {

  postCreator.style.display = "none";
  
});


/*==================================== Enabling and disabling of CreatePost-Btn ============================================*/


const createPostBtn = document.getElementById("create-post-btn");
const createPostTextInput = document.getElementById("create-post-text-input");
const createPostUrlInput = document.getElementById("create-post-url-input");


createPostTextInput.addEventListener("input", () => {
  if (createPostTextInput.value.length > 0){
    createPostBtn.style.backgroundColor =  "#1876f2";
    createPostBtn.disabled = false;
  }
  else {
    createPostBtn.style.backgroundColor =  "lightgray";
    createPostBtn.disabled = true;
  }

})


createPostUrlInput.addEventListener("input", () => {
  if (createPostUrlInput.value.length > 0){
    createPostBtn.style.backgroundColor =  "#1876f2";
    createPostBtn.disabled = false;
  }
  else {
    createPostBtn.style.backgroundColor =  "lightgray";
    createPostBtn.disabled = true;
  }

})


/*================================== Getting User-name and User-image ========================================================================*/


let emailId = localStorage.getItem("userEmail");

let users = [
  {
    email: "santosh@gmail.com",
    name: "Santosh Mehta",
    profilePic: "https://images.unsplash.com/photo-1554311884-415bfda22b47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTU2fHxwZXJzb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60-1.fna.fbcdn.net/v/t1.6435-9/180555609_835950667306477_8372471323999180307_n.jpg?stp=c0.232.576.576a_dst-jpg_s851x315&_nc_cat=100&ccb=1-7&_nc_sid=da31f3&_nc_ohc=X_lWHKpsJCcAX_d_x_a&_nc_ht=scontent.fdbd1-1.fna&oh=00_AfDveHHlzXU6eM7ISWaR-KmFLTWleTld-Ub-47Q-c3hpkQ&oe=63CBA2B8://scontent.fdbd1-2.fna.fbcdn.net/v/t39.30808-6/272761181_1011609503073925_5723654845178925652_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=-uIbQyVbT9sAX_QROVi&_nc_oc=AQlYysLgwkhD0CQIhatqnkjw07-Hwzoiw8lgu7Fu9gd2X8quntvLbRivNs15eXOELWSEioi1fVSFm0i3F8uNTPZJ&tn=BOMrDsLuOSui51gf&_nc_ht=scontent.fdbd1-2.fna&oh=00_AfAMStQAwDcpfRmdoR3PEwByjcYjYQosva6lefqBCh0F8Q&oe=63A8D1B0"
  },

  {
    email: "varsharajput353@gmail.com",
    name: "Varsha Rajput",
    profilePic: "https://images.unsplash.com/photo-1564463836146-4e30522c2984?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTkyfHxwZXJzb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
  },

  { 
    email: "ss0149952@gmail.com", 
    name: "Sonu Chandravanshi",
    profilePic: "https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" 
  },

  {
    email: "rohanpalankar8@gmail.com",
    name: "Rohan Palankar",
    profilePic: "https://scontent.fblr19-1.fna.fbcdn.net/v/t1.6435-9/58460714_2287391554832092_8244223977036185600_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=_H-Wll3YYZsAX_wV8nc&_nc_oc=AQlOjK0ZniGbopsnq7JZYOg1w9GN1PQB7BU7UsxJlvcX2Un_F7sRyu7W5y1Fzwzc6M8&_nc_ht=scontent.fblr19-1.fna&oh=00_AfCeZYKKBuYs6TYhmQ0cQzxSlEncwD2vKJQmCPXq_1T3uQ&oe=63D0D104"
  }
];


users.forEach((user) => {

  if (user.email == emailId){
    let userName = user.name;
    let userImage = user.profilePic;
  }

})




/*============================================= On-clicking Create-Post-Button ====================================================*/


createPostBtn.addEventListener("click", async () => {

  const caption = createPostTextInput.value;
  const postImage = createPostUrlInput.value;

  const postData = {
    userImage,
    userName,
    caption,
    postImage,
    like:0,
    comment:0
  }

  let post = await fetch('http://localhost:3000/fb-post/create',{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(postData)
  })

  document.getElementById("create-post-text-input").value = "";
  document.getElementById("create-post-url-input").value = "";

})