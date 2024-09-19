'use strict';

var createApp = function(canvas) { 
	var c = canvas.getContext("2d");

	// Create the ground
	var floor = canvas.height/2;
	var grad = c.createLinearGradient(0,floor,0,canvas.height);
	grad.addColorStop(0, "green");
	grad.addColorStop(1, "black");
	c.fillStyle=grad;
	c.fillRect(0, floor, canvas.width, canvas.height);

	// common size for windows
	var windowSpacing = 2, floorSpacing = 3;
	var windowHeight = 5, windowWidth = 3;

	// colors of buildings
	var blgColors = [ 'red', 'blue', 'gray', 'orange'];

	//build a building
	var build = function() { 
		var x0 = Math.random()*canvas.width;
		var blgWidth = (windowWidth+windowSpacing) * Math.floor(Math.random()*10);
		var blgHeight = Math.random()*canvas.height/3;

    var color_index = Math.floor(Math.random()*blgColors.length)
		c.fillStyle= blgColors[color_index];
		c.fillRect(x0, floor - blgHeight, blgWidth, blgHeight);
		c.fillStyle="yellow";

		const dy = floorSpacing + windowHeight;
		const dx = windowSpacing + windowWidth;
		const floors = Math.floor(blgHeight/dy);
		const cols = Math.floor(blgWidth/dx) - 1;
		const range = (n, delta, x0) => Array(n).fill(1).map((_, i) => x0 + i * delta);
		range(floors, dy, floor - blgHeight + dy).forEach(y => {
      range(cols, dx, windowSpacing).forEach(x => {
          // Random chance to turn off the window
          var isWindowOn = Math.random() > 0.3; // 30% chance the window will be off
          c.fillStyle = isWindowOn ? "yellow" : blgColors[color_index];
			    c.fillRect(x0 + x, y - windowHeight, windowWidth, windowHeight)
		    })
		})
	};

	return {
		build: build
	}
};

var canvas;
var ctx;
var mySun = {
  x: 100,
  y: 60,
  r: 25,
  color: 'yellow'
};

function init() {
  canvas = document.querySelector("canvas");
  ctx = canvas.getContext('2d');
  moveSun();
}

function drawSun() {
    ctx.clearRect(mySun.x - mySun.r - 1, mySun.y - mySun.r - 1, mySun.r * 2 + 1, mySun.r * 2 + 1);
    ctx.fillStyle = mySun.color;
    ctx.beginPath();
    ctx.arc(mySun.x, mySun.y, mySun.r, 0, 2 * Math.PI); 
    ctx.fill();
    ctx.closePath();
}

function updateSun() {
  mySun.x += 1;
}

function moveSun() {
  updateSun();
  drawSun();
  window.requestAnimationFrame(moveSun);
}

window.onload = function() {
	var app = createApp(document.querySelector("canvas"));
  document.getElementById("build").onclick = app.build
  
  init();

};

