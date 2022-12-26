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


// const add_comment = document.querySelector(".comment_btn");

// const commentSection = document.querySelector(".commentSection")


// add_comment.addEventListener("click", () => {
//   if (commentSection.style.display == "block") {
//     commentSection.style.display = "none";
//   } else {
//     commentSection.style.display = "block";
//   }
// });



const post = [ {
  userImage:
    "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  userName: "Ashutosh",
    time: new Date().toDateString(),
  caption: "lLorem ipsum dolor sit amet consectetur adipisicing elit.",
  postImage: "https://images.unsplash.com/photo-1492681290082-e932832941e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  like: 17,
  comment: 487,
  share: "",
},
{
  userImage:
    "https://img.freepik.com/free-photo/closeup-shot-beautiful-oxeye-daisy-flower_181624-11106.jpg?auto=format&h=200",
  userName: "Ashutosh",
    time: new Date().toDateString(),
  caption: "lLorem ipsum dolor sit amet consectetur adipisicing elit.",
  post: "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  like: 17,
  comment: 487,
  share: "",
},
{
  userImage:
    "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  userName: "Ashutosh",
    time: new Date().toDateString(),
  caption: "lLorem ipsum dolor sit amet consectetur adipisicing elit.",
  post: "https://images.unsplash.com/photo-1664574654521-7faf33eb9086?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MTV8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  like: 17,
  comment: 487,
  share: "",
},


{
  userImage:
    "https://images.unsplash.com/photo-1542206395-9feb3edaa68d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  userName: "Ashutosh",
    time: new Date().toDateString(),
  caption: "lLorem ipsum dolor sit amet consectetur adipisicing elit.",
  post: "https://images.unsplash.com/photo-1670272504471-61a632484750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MjJ8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  like: 17,
  comment: 487,
  share: "",
},
{
  userImage:
    "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  userName: "Ashutosh",
    time: new Date().toDateString(),
  caption: "lLorem ipsum dolor sit amet consectetur adipisicing elit.",
  post: "https://images.unsplash.com/photo-1670272499232-d6c55af87386?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MzZ8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  like: 17,
  comment: 487,
  share: "",
},
{
  userImage:
    "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  userName: "Ashutosh",
    time: new Date().toDateString(),
  caption: "lLorem ipsum dolor sit amet consectetur adipisicing elit.",
  post: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  like: 17,
  comment: 487,
  share: "",
},
{
  userImage:
    "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  userName: "Ashutosh",
    time: new Date().toDateString(),
  caption: "lLorem ipsum dolor sit amet consectetur adipisicing elit.",
  post: "https://images.unsplash.com/photo-1670272498456-a9f02e3cead9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxzZWFyY2h8NTB8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  like: 17,
  comment: 487,
  share: "",
},
{
  userImage:
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTJ8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  userName: "Ashutosh",
    time: new Date().toDateString(),
  caption: "lLorem ipsum dolor sit amet consectetur adipisicing elit.",
  post: "https://images.unsplash.com/photo-1534083264897-aeabfc7daf8a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTZ8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  like: 17,
  comment: 487,
  share: "",
},
{
  userImage:
    "https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjV8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  userName: "Ashutosh",
    time: new Date().toDateString(),
  caption: "lLorem ipsum dolor sit amet consectetur adipisicing elit.",
  post: "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  like: 17,
  comment: 487,
  share: "",
},
{
  userImage:
    "https://images.unsplash.com/photo-1587502537104-aac10f5fb6f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MTV8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  userName: "Ashutosh",
    time: new Date().toDateString(),
  caption: "lLorem ipsum dolor sit amet consectetur adipisicing elit.",
  post: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  like: 17,
  comment: 487,
  share: "",
},
{
  userImage:
    "https://img.freepik.com/free-photo/closeup-shot-beautiful-oxeye-daisy-flower_181624-11106.jpg?auto=format&h=200",
  userName: "Ashutosh",
    time: new Date().toDateString(),
  caption: "lLorem ipsum dolor sit amet consectetur adipisicing elit.",
  post: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  like: 17,
  comment: 487,
  share: "",
},
{
  userImage:
    "https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  userName: "Ashutosh",
    time: new Date().toDateString(),
  caption: "lLorem ipsum dolor sit amet consectetur adipisicing elit.",
  post: "https://images.unsplash.com/photo-1431794062232-2a99a5431c6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  like: 17,
  comment: 487,
  share: "",
},
{
  userImage:
    "https://img.freepik.com/free-photo/closeup-shot-beautiful-oxeye-daisy-flower_181624-11106.jpg?auto=format&h=200",
  userName: "Ashutosh",
    time: new Date().toDateString(),
  caption: "lLorem ipsum dolor sit amet consectetur adipisicing elit.",
  post: "https://images.unsplash.com/photo-1444464666168-49d633b86797?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  like: 17,
  comment: 487,
  share: "",
},
{
  userImage:
    "https://images.unsplash.com/photo-1504567961542-e24d9439a724?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTd8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  userName: "Ashutosh",
    time: new Date().toDateString(),
  caption: "lLorem ipsum dolor sit amet consectetur adipisicing elit.",
  post: "https://images.unsplash.com/photo-1552083375-1447ce886485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  like: 17,
  comment: 487,
  share: "",
},
{
  userImage:
    "https://images.unsplash.com/photo-1504567961542-e24d9439a724?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTd8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  userName: "Ashutosh",
  time: new Date().toDateString(),
  caption: "lLorem ipsum dolor sit amet consectetur adipisicing elit.",
  post: "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  like: 17,
  comment: 487,
  share: "",
},
{
  userImage:
    "https://images.unsplash.com/photo-1470093851219-69951fcbb533?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGFuaW1hbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  userName: "Ashutosh",
    time: new Date().toDateString(),
  caption: "lLorem ipsum dolor sit amet consectetur adipisicing elit.",
  post: "https://images.unsplash.com/photo-1497752531616-c3afd9760a11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGFuaW1hbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  like: 17,
  comment: 487,
  share: "",
},
]