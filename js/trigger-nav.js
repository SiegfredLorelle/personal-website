// const body = document.querySelector("body");
// const hamburgerBtn = document.querySelector(".top-nav-hamburger-btn");
// const nav = document.querySelector(".top-nav-list.mobile");
// const sections = document.querySelectorAll("section");


// function showNav() {
//   nav.style.display = "flex";
//   sections.forEach(section => {
//     section.style.opacity = "0.2";
//   })
// }
// function hideNav() {
//   nav.style.display = "none";
//   sections.forEach(section => {
//     section.style.opacity = "1";
//   })
// }

// function toggleNav() {
//   if (nav.style.display == "flex") {
//     hideNav();
//   }
//   else {
//     showNav();
//   }
// }

// hamburgerBtn.addEventListener("click", toggleNav)



// sections.forEach(section => {
//   section.addEventListener("click", () => {
  //     hideNav();
  //   })
  // })



const topNav = document.querySelector(".top-nav-list");
const beforeTopNavDesktop = document.querySelector(".logo");
const beforeTopNavMobile = document.querySelector("header");
const hamburgerBtn = document.querySelector(".top-nav-hamburger-btn");
const bodyExceptNav = document.querySelector("body");


// console.log(topNav, beforeTopNavDesktop, beforeTopNavMobile);

hamburgerBtn.addEventListener("click", toggleNav);

function showNav() {
  beforeTopNavMobile.after(topNav);
  topNav.classList.add("mobile");

  console.log(bodyExceptNav);
  // bodyExceptNav.style.opacity = "0.3";
  // topNav.style.opacity = "1";
}

function hideNav() {
  beforeTopNavDesktop.after(topNav);
  topNav.classList.remove("mobile");
  // bodyExceptNav.style.opacity = "1";
  // topNav.style.opacity = "1";
}

function toggleNav() {
  if (topNav.previousElementSibling == beforeTopNavDesktop) {
    showNav();
  }
  else {
    hideNav();
  }
}


window.addEventListener("resize", () => {
  if (window.matchMedia("(min-width: 768px)").matches) {
    hideNav();
  }
});


// window.addEventListener("resize", () => {
//   if (window.matchMedia("(min-width: 768px)").matches) {
//     hideNav();
//   }
// });