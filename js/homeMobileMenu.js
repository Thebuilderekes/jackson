const mobileNav = document.getElementById("col-1");
const hamburgerMenuBtn = document.getElementById("hamburger__menu--btn");
const currentbuttonState = hamburgerMenuBtn.getAttribute("aria-pressed");
function openMenu() {
  mobileNav.style.display = "block";

  hamburgerMenuBtn.setAttribute("aria-pressed", currentbuttonState === "true");
}

function closeMenu() {
  mobileNav.style.display = "none";
  hamburgerMenuBtn.setAttribute("aria-pressed", currentState === "false");
}
