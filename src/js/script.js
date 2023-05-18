// Navbar
window.onscroll = function () {
  const header = document.querySelector("#header");
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector("#to-top");
  if (window.pageYOffset > fixedNav) {
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
    header.classList.add("navbar-fixed");
  } else {
    toTop.classList.add("hidden");
    toTop.classList.remove("flex");
    header.classList.remove("navbar-fixed");
  }
};
// Humberger
const humberger = document.querySelector("#humberger");
const navMenu = document.querySelector("#nav-menu");
humberger.addEventListener("click", function () {
  humberger.classList.toggle("humberger-active");
  navMenu.classList.toggle("hidden");
});
// klik di luar humberger
window.addEventListener("click", function (e) {
  if (e.target != humberger && e.target != navMenu) {
    humberger.classList.remove("humberger-active");
    navMenu.classList.add("hidden");
  }
});

// toogle dark mode
const darkToggle = document.querySelector("#check");
const html = document.querySelector("html");
darkToggle.addEventListener("click", function () {
  if (darkToggle.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
});

// mengembalikan toggle dark
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}
