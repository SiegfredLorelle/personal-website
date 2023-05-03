const colorThemeButton = document.querySelector(".toggle-theme-btn");
const colorThemeIcon = document.querySelector(".toggle-theme-btn > i")


colorThemeButton.addEventListener("click", () => {
  toggleColorThemeIcon();
  toggleColorTheme();
});

function toggleColorTheme() {
  document.documentElement.classList.toggle("light");
}

function toggleColorThemeIcon() {
  if (colorThemeIcon.classList.contains("fa-sun")) {
      colorThemeIcon.classList.remove("fa-sun");
      colorThemeIcon.classList.add("fa-moon");
    }
    else {
    colorThemeIcon.classList.remove("fa-moon");
    colorThemeIcon.classList.add("fa-sun");
  }
}
