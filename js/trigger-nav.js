let body = document.querySelector("body");
let hamburgerBtn = document.querySelector(".top-nav-hamburger-btn");
let nav = document.querySelector(".top-nav-list.mobile");
let sections = document.querySelectorAll("section");

sections.forEach(section => {
  console.log(section);
})

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



console.log(nav.style.display);
hamburgerBtn.addEventListener("click", () => {
  console.log(nav.style.display);

  if (nav.style.display == "flex") {
    hideNav();
  }
  else {
    showNav();
  }
})

window.addEventListener("resize", () => {
  if (window.matchMedia("(min-width: 768px)").matches) {
    hideNav();
  }
});

