const App = (function() {

	// Private variables (in closure)
	let context = null;
	const rectSize = 25;
	let width = -1;
	let height = -1;
	let count = 1;

	// Constructor has Caps, must be called with new
	function App() {
		context = getCanvas();
	}

	const getCanvas = function() {
		const canvas = document.getElementById('mainCanvas');
		if (canvas !== null) {
			width = canvas.width;
			height = canvas.height;
			context = canvas.getContext('2d');
			setInterval(draw, 500);
			return context;
		} else {
			const debugs = document.getElementById('debugs');
			debugs.style.color = "rgb(0,0,255)";
			debugs.style.backgroundColor = "yellow";
			debugs.style.fontSize = "x-large";
			debugs.style.fontWeight = "bold";
			debugs.textContent = "Could not retrieve Canvas!";
			return null;
		}
	};

	const draw = function() {
		clear();
		drawRectangle();
		drawPyramid();
		circle(10, 10, 5);
		drawNpc(4, 2);
		drawGreen(5, 3);
		if (count > 6) { count = 1; }
		drawRed(6, 4 + count++);
		//drawImage();
	};

	/*const drawImage = function() {
		const sources = this.loadBitmap();

		that.loadImages(sources, function() {
			for (let i = 0; i < 12; i++) {
				context.drawImage(images.darthVader, 0, 0,
					rectSize, rectSize, rectSize * i,
					0, rectSize, rectSize);
			}
		});
	};*/

	const circle = function(x, y, r) {
		context.fillStyle = "rgb(0,15,122)";
		context.beginPath();
		context.arc(x, y, r, 0, Math.PI * 2, true);
		context.fill();
	};

	const clear = function() {
		context.clearRect(0, 0, width, height);
	};

	const drawNpc = function(row, col) {
		context.fillStyle = "rgb(0,0,255)";
		context.fillRect(row * rectSize, col * rectSize, rectSize, rectSize);
	};

	const drawGreen = function(row, col) {
		context.fillStyle = "rgb(0,255,0)";
		context.fillRect(row * rectSize, col * rectSize, rectSize, rectSize);
	};

	const drawRed = function(row, col) {
		context.fillStyle = "rgb(255,0,0)";
		context.fillRect(row * rectSize, col * rectSize, rectSize, rectSize);
	};

	const drawPyramid = function() {
		context.fillStyle = "rgb(255, 15, 0)";
		context.beginPath();
		context.moveTo(rectSize, rectSize);
		context.lineTo(50, 75);
		context.lineTo(75, rectSize);
		context.fill();
	};

	const drawRectangle = function() {
		context.fillStyle = "rgb(23,255,22)";
		context.fillRect(130, 130, 150, 150);
	};

	return App;

})();

window.onload = () => {
	"use strict";
	new App();
};
