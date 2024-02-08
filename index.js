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

let div = document.querySelector("#banner-2");
let women = div.firstElementChild;
women.addEventListener("click", () => {
  window.location.href = targetURLs[0];
});

let trousers = div.lastElementChild;
trousers.addEventListener("click", () => {
  window.location.href = targetURLs[1];
});

let men = div.children[1];
men.addEventListener("click", () => {
  window.location.href = targetURLs[2];
});

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
