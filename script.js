const menuBar = document.getElementById("menu-bar");
const nav1 = document.getElementById("nav-a");
const nav2 = document.getElementById("nav-b");
const nav3 = document.getElementById("nav-c");
const nav4 = document.getElementById("nav-d");
const nav5 = document.getElementById("nav-e");

const overlay = document.getElementById("overlay");
const nevItems = [nav1, nav2, nav3, nav4, nav5];

function navAnimation(dir1, dir2) {
  nevItems.forEach((nav, i) => {
    console.log(`slide-${dir1}-${i + 1}`, `slide-${dir2}-${i + 1}`);
    nav.classList.replace(`slide-${dir1}-${i + 1}`, `slide-${dir2}-${i + 1}`);
  });
}

function toggleNav() {
  menuBar.classList.toggle("change");
  overlay.classList.toggle("overlay-active");
  if (overlay.classList.contains("overlay-active")) {
    overlay.classList.replace("overlay-slide-left", "overlay-slide-right");
    // Animation
    navAnimation("out", "in");

    // Animation
  } else {
    overlay.classList.replace("overlay-slide-right", "overlay-slide-left");
    // Animation
    navAnimation("in", "out");
  }
}

menuBar.addEventListener("click", toggleNav);

nevItems.forEach((nav) => {
  nav.addEventListener("click", toggleNav);
});
