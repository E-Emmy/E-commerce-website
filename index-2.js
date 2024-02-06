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

//--~~~~~~ Dynamic Image Switching on Click ~~~~~~//

//<--Get the main image element by its ID-->//
var MainImg = document.getElementById("MainImg");

//<--Get the smaller image elements by their class name-->//
var smallimg = document.getElementsByClassName("small-img");

//<--Assign click event handlers to each smaller image element-->//
for (let i = 0; i < smallimg.length; i++) {
  smallimg[i].onclick = function () {
    //<--Set the source of the main image to the source of the clicked smaller image-->//
    MainImg.src = smallimg[i].src;
  };
}
