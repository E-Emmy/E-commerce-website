//--~~~~~~ BLINKING TEXT~~~~~~//
//<-- function to make text blink-->//

function blinkText(elementId, interval) {
  var blinkingText = document.getElementById(elementId);
  //<--Toggle visibility at regular intervals-->//
  setInterval(function () {
    blinkingText.style.visibility =
      blinkingText.style.visibility === "hidden" ? "visible" : "hidden";
  }, interval);
}
blinkText("blinkingText1", 500);
blinkText("blinkingText2", 1000);
blinkText("blinkingText3", 1200);
blinkText("blinkingText4", 300);

//--~~~~~~ NAVIGATION LINKS FOR BANNER SECTIONS~~~~~~//
//<--Array of target URLs corresponding to each div-->//
const targetURLs = ["women.html", "men.html", "men.html"];
//<-- Loop through each div and add click event listeners-->//
for (let i = 1; i <= 3; i++) {
  let div = document.querySelector(`#banner-2 > div:nth-child(${i})`);
  //<--Change cursor style on hover-->//
  div.style.cursor = "pointer";
  div.addEventListener("click", () => {
    window.location.href = targetURLs[i - 1];
  });
}

const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

//--~~~~~~ SHOW MENU~~~~~~//

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}
//--~~~~~~ MENU HIDDEN~~~~~~//

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}


//--~~~~~~ SCROLL SELECTION ACTIVE LINK~~~~~~//
// get all sections that have an id defined
const sections = document.querySelectorAll("section[id]");

// add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  // get current scroll position
  let scrollY = window.pageYOffset;
  // Now we loop through sections to get height, top, and ID values for each
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 58;
    const sectionId = current.getAttribute("id");

    /* if our current scroll position enters the space where the current section is, 
    add .active class to the corresponding navigation link, else remove it - 
    To know which link needs an active class, we use the sectionId variable
    we are getting while looping through sections as a selector */

    // check if the navigation link exists before manipulating its classList
    const navLink = document.querySelector(
      ".nav-menu a[href*=" + sectionId + "]"
    );
    if (navLink) {
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLink.classList.add("active-link");
      } else {
        navLink.classList.remove("active-link");
      }
    }
  });
}