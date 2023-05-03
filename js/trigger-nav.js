const topNav = document.querySelector(".top-nav-list");
const topNavItems = document.querySelectorAll(".top-nav-list > a");

const beforeTopNavDesktop = document.querySelector(".logo");
const beforeTopNavMobile = document.querySelector(".header-container");

const hamburgerBtn = document.querySelector(".top-nav-hamburger-btn");
const main = document.querySelector("main");


hamburgerBtn.addEventListener("click", toggleNav);

/* Show nav for mobile devices by moving it out of the header container */
function showNav() {
  beforeTopNavMobile.after(topNav);
  topNav.classList.add("mobile");
  main.classList.add("active-nav");
  main.addEventListener("click", toggleNav);
}

/* Hide nav for mobile devices by moving it in to the header container */
function hideNav() {
  beforeTopNavDesktop.after(topNav);
  topNav.classList.remove("mobile");
  main.classList.remove("active-nav");
  main.removeEventListener("click", toggleNav);
}

function toggleNav() {
  if (topNav.previousElementSibling == beforeTopNavDesktop) {
    showNav();
  }
  else {
    hideNav();
  }
}

/* Move the nav to the header if on wider screens */
window.addEventListener("resize", () => {
  if (window.matchMedia("(min-width: 768px)").matches) {
    hideNav();
  }
});


topNavItems.forEach(element => {
  element.addEventListener("click", hideNav);
});