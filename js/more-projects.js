const moreButton = document.querySelector(".more-btn");
const moreIcon = document.querySelector(".more-icon");
const moreButtonText = document.querySelector(".more-icon + span");
const moreProjects = document.querySelector(".more-projects");


moreButton.addEventListener("click", () => {
  if (moreIcon.classList.contains("fa-angle-down")) {
    showMore();
  }
  else {
    showLess();
  }
});

function showMore() {
  moreProjects.classList.toggle("hidden");
  changeIcon(moreIcon, "fa-angle-down", "fa-angle-up");
  moreButtonText.innerHTML = "See Less";
}

function showLess() {
  moreProjects.classList.toggle("hidden");
  changeIcon(moreIcon, "fa-angle-up", "fa-angle-down");
  moreButtonText.innerHTML = "See More";

}


function changeIcon(icon, oldClass, newClass) {
  icon.classList.remove(oldClass);
  icon.classList.add(newClass);
}

