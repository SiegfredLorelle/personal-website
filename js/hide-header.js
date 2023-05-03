const header = document.querySelector("header");
const Nav = document.querySelector(".top-nav-list");

let prevScrollPosY = 0;
let currentScrollPosY;

/* Check if the scroll is upward or downward, show nav if upward */
document.addEventListener("scroll", () => {
  currentScrollPosY = window.scrollY;
  if (prevScrollPosY < currentScrollPosY && !Nav.classList.contains("mobile")) {
    header.classList.add("hide");
  } 
  else {
    header.classList.remove("hide");
  }
  prevScrollPosY = currentScrollPosY;
});