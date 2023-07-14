const $HTML = document.documentElement;
let isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (sessionStorage.getItem("theme")) {
  $HTML.dataset.theme = sessionStorage.getItem("theme");
} else {
  $HTML.dataset.theme = isDark ? "dark" : "light";
}

// let isPressed = false;

const changeTheme = function () {
  // isPressed = isPressed ? false : true;
  // this.setAttribute("aria-pressed", isPressed);
  // $HTML.setAttribute("data-theme", ($HTML.dataset.theme === "light") ? "dark" : "light");
  // sessionStorage.setItem("theme", $HTML.dataset.theme);
  
  isDark = sessionStorage.getItem("theme");
  sessionStorage.setItem("theme", isDark === "light" ? "dark" : "light");
  $HTML.dataset.theme = sessionStorage.getItem("theme");
}

window.addEventListener("load", () => {
  const $themeBtn = this.document.querySelector("[data-theme-toggler]");

  $themeBtn.addEventListener("click", changeTheme);
});
