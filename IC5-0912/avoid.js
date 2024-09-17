var clicked = false;
var stop = false;
var clickMeBtn = document.getElementById("clickMeBtn");
var clickMeDiv = document.getElementById("clickMeDiv");

window.onload = function() {
  document.addEventListener("keyup", keyUp, false);
  document.addEventListener("keydown", keyDown, false);
  clickMeBtn.addEventListener("mouseover", mouseOver, false);
  clickMeBtn.addEventListener("click", mouseClick, false);
}

function mouseOver() {
  if (!clicked && !stop) {
    var buttonwidth = clickMeBtn.offsetWidth;
		var buttonheight = clickMeBtn.offsetHeight;
		var randomX = Math.random() * (window.innerWidth-buttonwidth);
    var randomY = Math.random() * (window.innerHeight - buttonheight);
    clickMeDiv.style.position = "absolute";
    clickMeDiv.style.left = randomX + "px";
		clickMeDiv.style.top = randomY + "px";
  }
}

function mouseClick() {
  if (!clicked) {
    clicked = true;
    stop = true;
		clickMeBtn.innerHTML = "You won! Play again";
  }
  else {
    clicked = false;
    stop = false;
		clickMeBtn.innerHTML = "Click Me";
	}
}

function keyUp(e) {
  if (e.key == "Shift") {
    stop = false;
  }
}

function keyDown(e) {
  if (e.key == "Shift") {
    stop = true;
  }
}