const moreButton = document.querySelector(".more-btn");
const moreIcon = document.querySelector(".more-icon");
const moreButtonText = document.querySelector(".more-icon + p");
const moreProjects = document.querySelector(".more-projects");

console.log(moreButton, moreIcon);

moreButton.addEventListener("click", () => {
  console.log(moreIcon.classList.contains("fa-angle-down"));
  if (moreIcon.classList.contains("fa-angle-down")) {
    showMore();
  }
  else {
    showLess();
  }
});

function showMore() {
  moreProjects.style.display = "flex";
  changeIcon(moreIcon, "fa-angle-down", "fa-angle-up");
  moreButtonText.innerHTML = "See Less";
}

function showLess() {
  moreProjects.style.display = "none";
  changeIcon(moreIcon, "fa-angle-up", "fa-angle-down");
  moreButtonText.innerHTML = "See More";

}


function changeIcon(icon, oldClass, newClass) {
  icon.classList.remove(oldClass);
  icon.classList.add(newClass);
}

