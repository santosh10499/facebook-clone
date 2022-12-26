// const contents = document.querySelector('.content');
// contents.innerHTML = `
// <!-----------------------stories -------------------------->

// <div class="create_story">
//   <div class="story_reel_room">
//     <p><i class="fa-solid fa-book-open"></i>Stories</p>
//     <p><img src="/images/reels2.png" alt="reels" width="20px" /> Reels</p>
//     <p><i class="fa-solid fa-video"></i>Rooms</p>
//   </div>
//   <div class="stories">
//     <div class="container_myStory">
//       <img
//         src="/images/profile2.png"
//         alt="story"
//         class="my_story pointer"
//       />
//       <div class="plus">
//         <i class="fa-fa fa-plus"></i>
//         <span>Create story</span>
//       </div>
//     </div>
//     <div class="container">
//       <img
//         src="/images/story1.png"
//         alt="story"
//         class="bgImg img pointer"
//       />
//       <img src="/images/story3.png" alt="story" class="story pointer" />
//       <span>Mehak</span>
//     </div>
//     <div class="container">
//       <img
//         src="/images/story2.png"
//         alt="story"
//         class="bgImg img pointer"
//       />
//       <img src="/images/story4.png" alt="story" class="story pointer" />
//       <span>Gallery</span>
//     </div>
//     <div class="container">
//       <img
//         src="/images/story3.png"
//         alt="story"
//         class="bgImg img pointer"
//       />
//       <img src="/images/story2.png" alt="story" class="story pointer" />
//       <span>shruti</span>
//     </div>
//     <div class="container">
//       <img
//         src="/images/story4.png"
//         alt="story"
//         class="bgImg img pointer"
//       />
//       <img src="/images/story1.png" alt="story" class="story pointer" />
//       <span>Vihaan</span>
//     </div>
//   </div>
// </div>
// <!-----------------------end 0f stories -------------------------->

// <div class="posts">
//   <div class="about_post">
//     <img
//       src="/images/profile2.png"
//       alt=""
//       class="profile bg hover"
//       width="45px"
//     />
//     <input type="text" placeholder="What's on your mind" />
//   </div>
//   <div class="photo_video">
//     <p class="hover">🎥Live video</p>
//     <p class="hover">
//       <img src="/images/gallery.png" alt="photo" width="40px" />
//       Photo/video
//     </p>
//     <p class="hover">😃Feeling/activity</p>
//   </div>
// </div>
// <!-- --------------dummy post------------------- -->
// <div class="dummy_post">
//   <div class="top">
//     <img
//       src="/images/profile2.png"
//       alt=""
//       class="profile bg hover"
//       width="45px"
//     />
//     <div class="name">
//       <p class="pointer">Media</p>
//       <span class="pointer"
//         >20 h.<i class="fa-solid fa-earth-americas"></i
//       ></span>
//     </div>

//     <div class="icons">
//       <i class="fa-solid fa-ellipsis hover"></i>
//       <i class="fa-solid fa-xmark hover"></i>
//     </div>
//   </div>
//   <div class="image">
//     <img src="/images/dummyPost3.png" alt="" />
//   </div>
//   <div class="bottom">
//     <div class="likes">
//       <img src="" alt="" />
//       <img src="" alt="" />
//       <span class="pointer">👍💖15k</span>
//     </div>
//     <div class="commets">
//       <p class="pointer">300 Comments</p>
//     </div>
//   </div>
//   <div class="reaction">
//     <p class="hover"><i class="fa-regular fa-thumbs-up"></i> Like</p>
//     <p class="hover"><i class="fa-regular fa-message"></i> Comment</p>
//     <p class="hover"><i class="fa-solid fa-share"></i> Share</p>
//   </div>
// </div>

// <!-- -------dummy post2----------- -->
// <div class="dummy_post">
//   <div class="top">
//     <img
//       src="/images/profile2.png"
//       alt=""
//       class="profile bg hover"
//       width="45px"
//     />
//     <div class="name">
//       <p class="pointer">Vihaan</p>
//       <span class="pointer"
//         >20 h .<i class="fa-solid fa-earth-americas"></i
//       ></span>
//     </div>

//     <div class="icons">
//       <i class="fa-solid fa-ellipsis hover"></i>
//       <i class="fa-solid fa-xmark hover"></i>
//     </div>
//   </div>
//   <div class="image">
//     <img src="/images/dummyPost2.png" alt="" />
//   </div>
//   <div class="bottom">
//     <div class="likes">
//       <img src="" alt="" />
//       <img src="" alt="" />
//       <span class="pointer">👍💖15k</span>
//     </div>
//     <div class="commets">
//       <p class="pointer">300 Comments</p>
//     </div>
//   </div>
//   <div class="reaction">
//     <p class="hover"><i class="fa-regular fa-thumbs-up"></i> Like</p>
//     <p class="hover"><i class="fa-regular fa-message"></i> Comment</p>
//     <p class="hover"><i class="fa-solid fa-share"></i> Share</p>
//   </div>
// </div>

// <!-- ------------dummy post 3------------- -->

// <div class="dummy_post">
//   <div class="top">
//     <img
//       src="/images/profile2.png"
//       alt=""
//       class="profile bg hover"
//       width="45px"
//     />
//     <div class="name">
//       <p class="pointer">Vihaan</p>
//       <span class="pointer"
//         >20 h .<i class="fa-solid fa-earth-americas"></i
//       ></span>
//     </div>

//     <div class="icons">
//       <i class="fa-solid fa-ellipsis hover"></i>
//       <i class="fa-solid fa-xmark hover"></i>
//     </div>
//   </div>
//   <div class="image">
//     <img src="/images/dummyPost1.png" alt="" />
//   </div>
//   <div class="bottom">
//     <div class="likes">
//       <img src="" alt="" />
//       <img src="" alt="" />
//       <span class="pointer">👍💖15k</span>
//     </div>
//     <div class="commets">
//       <p class="pointer">300 Comments</p>
//     </div>
//   </div>
//   <div class="reaction">
//     <p class="hover"><i class="fa-regular fa-thumbs-up"></i> Like</p>
//     <p class="hover"><i class="fa-regular fa-message"></i> Comment</p>
//     <p class="hover"><i class="fa-solid fa-share"></i> Share</p>
//   </div>
// </div>
// `


const add_comment = document.querySelector(".comment_btn");

const commentSection = document.querySelector(".commentSection")


add_comment.addEventListener("click", () => {
  if (commentSection.style.display == "block") {
    commentSection.style.display = "none";
  } else {
    commentSection.style.display = "block";
  }
});