const body = document.querySelector("body");
const hamburgerBtn = document.querySelector(".top-nav-hamburger-btn");
const nav = document.querySelector(".top-nav-list.mobile");
const sections = document.querySelectorAll("section");


function showNav() {
  nav.style.display = "flex";
  sections.forEach(section => {
    section.style.opacity = "0.2";
  })
}
function hideNav() {
  nav.style.display = "none";
  sections.forEach(section => {
    section.style.opacity = "1";
  })
}

function toggleNav() {
  if (nav.style.display == "flex") {
    hideNav();
  }
  else {
    showNav();
  }
}

hamburgerBtn.addEventListener("click", toggleNav)


window.addEventListener("resize", () => {
  if (window.matchMedia("(min-width: 768px)").matches) {
    hideNav();
  }
});

sections.forEach(section => {
  section.addEventListener("click", () => {
    hideNav();
  })
})

