const hamburgerMenuBtn = document.getElementById("hamburger__menu--btn");
const mobileMenu = document.getElementById("mobile__menu--container");
let menuState = "closed";

function toggleIsOpen() {
  const currentState = hamburgerMenuBtn.getAttribute("aria-pressed");
  hamburgerMenuBtn.setAttribute("aria-pressed", currentState === "true");
}
function toggleIsClosed() {
  const currentState = hamburgerMenuBtn.getAttribute("aria-pressed");
  hamburgerMenuBtn.setAttribute("aria-pressed", currentState === "false");
}

function openNav() {
  console.log("work");
  if (menuState === "closed") {
    mobileMenu.style.display = "block";
    menuState = "open";
    toggleIsOpen();
  }
}

function closeNav() {
  console.log("close menu");
  if (menuState === "open") {
    mobileMenu.style.display = "none";
    menuState = "closed";
    toggleIsClosed();
  }
}

console.log(menuState);
