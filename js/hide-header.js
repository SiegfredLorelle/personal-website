const header = document.querySelector("header");
let Nav = document.querySelector(".top-nav-list");

let prevScrollPosY = 0;
let currentScrollPosY;
document.addEventListener("scroll", () => {
  currentScrollPosY = window.pageYOffset;
  if (prevScrollPosY < currentScrollPosY && !Nav.classList.contains("mobile")) {
    header.classList.add("hide");
  } 
  else {
    
    header.classList.remove("hide");
  }
  prevScrollPosY = currentScrollPosY;


});