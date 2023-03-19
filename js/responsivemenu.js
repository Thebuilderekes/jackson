const hamburgerMenuBtn = document.getElementById("hamburger__menu--btn");
const mobileMenu = document.getElementById("mobile__menu--container");
const body = document.querySelector("#body");
const toggleBtnState = hamburgerMenuBtn.getAttribute("aria-pressed");
let menuState = "closed";

function navIsOpen() {

  hamburgerMenuBtn.setAttribute("aria-pressed", toggleBtnState === "true");
}


function navIsClosed() {
  hamburgerMenuBtn.setAttribute("aria-pressed", toggleBtnState === "false");
}

//open mobile navigation
function openNav() {
  console.log("work");
  if (menuState === "closed") {
    mobileMenu.style.display = "block";
    menuState = "open";
    navIsOpen();
  }
}
//close mobile navigation
function closeNav() {
  console.log("close menu");
  if (menuState === "open") {
    mobileMenu.style.display = "none";
    menuState = "closed";
    navIsClosed()
  }
}

window.addEventListener("mouseup", function(event){

  if(event.target != mobileMenu) {
    closeNav()
  }

})