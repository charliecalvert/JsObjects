/*jshint jquery: true, browser: true, strict: true, devel: true */

const App = (function() { 'use strict';

	let context = null;
	const rectSizeX = 400;
	const rectSizeY = 300;
	const pictures = {};
	const path = 'images/';

	function App() {
		context = getCanvas();
		makeImageData();
	}

	const draw = function() {
		let countX = 0;
		let countY = 0;
		for (const imageName in pictures) {
			const xFactor = (countX++ * rectSizeX);
			const yFactor = (countY * rectSizeY);
			context.drawImage(pictures[imageName],
					0, 0, rectSizeX, rectSizeY,
					0 + xFactor, 0 + yFactor, rectSizeX, rectSizeY);
			if (countX === 2) {
				countX = 0;
				countY = 1;
			}
		}
	};

	const makeImageData = function() {
		const images = ["IMG_2721-400.jpg", "IMG_2726-400.jpg", "IMG_2728-400.jpg", "IMG_2729-400.jpg"];
		loadImages(images, function(pictures, a) {
		});
	};

	const loadImages = function(images, callback) {

		let a = 0;

		function onload() {
			callback(pictures, a++);
		}

		for (let i = 0; i < images.length; i++) {
			const fileName = images[i];
			pictures[fileName] = new Image();
			pictures[fileName].onload = onload;
			pictures[fileName].src = path + fileName;
		}
	};

	const getCanvas = function() {
		const canvas = document.getElementById('mainCanvas');
		if (canvas !== null) {
			const context = canvas.getContext('2d');
			setInterval(draw, 100);
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

window.onload = () => {'use strict';
	new App();
};
