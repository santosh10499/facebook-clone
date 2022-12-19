
/**-------------------------foraside bar----------------------------- */
const seeMore = document.getElementById("see_more");
const seeLess = document.getElementById("see_less");
const moreItems =document.getElementById("more_items")


/**------------for prfile_dialouge_box----------------------- */

const prfileDialogueBox = document.querySelector(".prfile_dialogue_box")
const profile = document.querySelector("#profile")

const bars = document.querySelector("#bars")
const outer_container = document.querySelector("#displayNone")


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
  console.log("h")
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
