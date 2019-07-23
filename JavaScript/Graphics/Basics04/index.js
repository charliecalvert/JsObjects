const App = (function() {

	let context = null;
	const rectSize = 25;
	const pictures = {};

	function App() {
		context = getCanvas();
		makeImageData();
	}

	const makeImageData = function() {
		const images = ["cscGarden01.gif", "cscGarden02.gif"];
		const x = 10;
		loadImages(images, function(pictures, a) {
			const fileName = images[a];
			context.drawImage(pictures[fileName], 0,
				rectSize, rectSize, rectSize,
				rectSize * (a + 1), 10, rectSize, rectSize);
		});
	};

	const loadImages = function(images, callback) {
		let a = 0;
		for (let i = 0; i < images.length; i++) {
			const fileName = images[i];
			pictures[fileName] = new Image();
			pictures[fileName].onload = function() {
				callback(pictures, a++);
			};
			pictures[fileName].src = fileName;
		}
	};

	const getCanvas = function() {
		const canvas = document.getElementById('mainCanvas');
		if (canvas !== null) {
			return canvas.getContext('2d');
		} else {
			return null;
		}
	};
	return App;
})();

window.onload = () => {'use strict';
	new App();
};
