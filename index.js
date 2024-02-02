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
