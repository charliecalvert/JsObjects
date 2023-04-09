/*jshint jquery: true, browser: true, strict: true, devel: true */

const App = (function() { 'use strict';

	let context = null;
	const rectSize = 25;
	const pictures = {};

	function App() {
		context = getCanvas();
		makeImageData();
	}

	const draw = function() {
		let count = 0;
		for (const imageName in pictures) {
			if (pictures.hasOwnProperty(imageName)) {
				context.drawImage(pictures[imageName], 0, rectSize, rectSize, rectSize,
					rectSize * (count++ + 1), 135, rectSize, rectSize);
			}
		}
	};

	const makeImageData = function() {
		const images = ["cscGarden01.gif", "cscGarden02.gif"];
		loadImages(images, function(pictures, a) {
			const fileName = images[a];
			context.drawImage(pictures[fileName], 0,
				rectSize, rectSize, rectSize,
				rectSize * (a + 1), 10, rectSize, rectSize);
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
			pictures[fileName].src = fileName;
		}
	};

	const getCanvas = function() {
		const canvas = document.getElementById('mainCanvas');
		if (canvas !== null) {
			const context = canvas.getContext('2d');
			setInterval(draw, 50);
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
