const App = (function() {

	let context = null;
	const rectSize = 25;
	//const images = {};

	function App() {
		context = getCanvas();
		makeImageData();
	}

	function draw() {}

	const makeImageData = function() {
		const image01 = "cscGarden.gif";

		const callback = function(image, x, y) {
			context.drawImage(image, rectSize, 0, rectSize, rectSize, x, y, rectSize, rectSize);
		};

		const image = new Image();
		image.onload = function() {
			callback(image, 10, 10);
		};

		image.src = image01;
	};

	const getCanvas = function() {
		const canvas = document.getElementById('mainCanvas');
		if (canvas !== null) {
			const context = canvas.getContext('2d');
			setInterval(draw, 250);
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

	return App;
})();

window.onload = () => {
 	'use strict';
	new App();
};
