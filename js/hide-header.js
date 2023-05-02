const header = document.querySelector("header");

let prevScrollPosY = 0;
let currentScrollPosY;
document.addEventListener("scroll", () => {
  currentScrollPosY = window.pageYOffset;
  console.log(prevScrollPosY, currentScrollPosY);
  if (prevScrollPosY < currentScrollPosY) {
    header.classList.add("hide");
  } 
  else {
    
    header.classList.remove("hide");
  }
  prevScrollPosY = currentScrollPosY;


});