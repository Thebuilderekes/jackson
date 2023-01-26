const navMenu = document.getElementById("col-1");
const hamburgerMenuBtn = document.getElementById("hamburger__menu--btn");
const currentState = hamburgerMenuBtn.getAttribute("aria-pressed");
function openMenu() {
  navMenu.style.display = "block";

  hamburgerMenuBtn.setAttribute("aria-pressed", currentState === "true");
}

function closeMenu() {
  navMenu.style.display = "none";
  hamburgerMenuBtn.setAttribute("aria-pressed", currentState === "false");
}
