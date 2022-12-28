

/**-------------------------foraside bar----------------------------- */
const seeMore = document.getElementById("see_more");
const seeLess = document.getElementById("see_less");
const moreItems =document.getElementById("more_items")


/**------------for prfile_dialouge_box----------------------- */

const prfileDialogueBox = document.querySelector(".prfile_dialogue_box")
const profile = document.querySelector("#profile")

const bars = document.querySelector("#bars")
const outer_container = document.querySelector(".aside_container")

/**---------------------click event on see more btn------------------------ */
seeMore.addEventListener("click",(e)=>{
    if (moreItems.style.display == "block") {
        moreItems.style.display = "none";
      } else {
        moreItems.style.display = "block";
      }
})

/**---------------------click event on see_less btn------------------------ */

seeLess.addEventListener("click",(e)=>{
  if (moreItems.style.display == "block") {
      moreItems.style.display = "none";
    } else {
      moreItems.style.display = "block";
    }
})


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


//  notification pop up;

const notification_popUp = document.querySelector(".notification");
const notifications = document.querySelector("#notifications");

notifications.addEventListener("click",(e)=>{
  if (notification_popUp.style.display == "block") {
      notification_popUp.style.display = "none";
    } else {
      notification_popUp.style.display = "block";
    }
})


// messenger pop up;

const messenger_popUp = document.querySelector(".messenger");
const messenger = document.querySelector("#messenger");

messenger.addEventListener("click",(e)=>{
  if (messenger_popUp.style.display == "block") {
      messenger_popUp.style.display = "none";
    } else {
      messenger_popUp.style.display = "block";
    }
})


// plus_items pop Up;

const plus_items_popUp = document.querySelector(".plus_items");
const plus_icon = document.querySelector("#plus_icon");

const grid = document.querySelector("#grid")

plus_icon.addEventListener("click",(e)=>{
  if (plus_items_popUp.style.display == "block") {
      plus_items_popUp.style.display = "none";
    } else {
      plus_items_popUp.style.display = "block";
    }
})

grid.addEventListener("click",(e)=>{
  if (plus_items_popUp.style.display == "block") {
      plus_items_popUp.style.display = "none";
    } else {
      plus_items_popUp.style.display = "block";
    }
})












