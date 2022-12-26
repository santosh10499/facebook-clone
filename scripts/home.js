const content = document.querySelector("#content");

content.innerHTML += `<div class="create_story">
<div class="story_reel_room">
  <p><i class="fa-solid fa-book-open"></i>Stories</p>
  <p><img src="/images/reels2.png" alt="reels" width="20px" /> Reels</p>
  <p><i class="fa-solid fa-video"></i>Rooms</p>
</div>
<div class="stories">
  <div class="Create_my_story" >
  <img  class="userimage"src="/images/Varsha7.png" alt="story" id="" />
  <i class="fa-solid fa-circle-plus"></i>
  <span>Create story</span>
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
  <input type="text" placeholder="What's on your mind" />
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
          <button class="pointer">
            <i class="fa-solid fa-user-group"></i>Friends<i
              class="fa-solid fa-caret-down"
            ></i>
          </button>
        </div>
      </div>
    </div>
    <div class="text">
      <textarea placeholder="What's on your mind"></textarea>
      <i class="fa-regular fa-face-smile"></i>
    </div>

    <div class="photo pointer">
      <i class="fa-solid fa-xmark hover"></i>
      <div class="inner_div hover">
        <i class="fa-regular fa-file-image hover bg iconBg"></i>
        <p>Add photos/vidios</p>
        <span>or drag and drop</span>
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
  </div>
</div>
`;
