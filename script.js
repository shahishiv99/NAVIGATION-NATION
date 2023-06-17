const menuBar = document.getElementById("menu-bar");
const nav1 = document.getElementById("nav-a");
const nav2 = document.getElementById("nav-b");
const nav3 = document.getElementById("nav-c");
const nav4 = document.getElementById("nav-d");
const nav5 = document.getElementById("nav-e");
const overlay = document.getElementById("overlay");

function toggleNav() {
  menuBar.classList.toggle("change");
  overlay.classList.toggle("overlay-active");
  if (overlay.classList.contains("overlay-active")) {
    overlay.classList.add("overlay-slide-right");
    overlay.classList.remove("overlay-slide-left");
  } else {
    overlay.classList.add("overlay-slide-left");
    overlay.classList.remove("overlay-slide-right");
  }
}

menuBar.addEventListener("click", toggleNav);
nav1.addEventListener("click", toggleNav);
nav2.addEventListener("click", toggleNav);
nav3.addEventListener("click", toggleNav);
nav4.addEventListener("click", toggleNav);
nav5.addEventListener("click", toggleNav);
