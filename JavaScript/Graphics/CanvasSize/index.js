var App = (function() {
    'use strict';

	var myCanvas = null;
	var context = null;

	function App() {
		myCanvas = document.getElementById('myCanvas');
		context = myCanvas.getContext('2d');
		drawShape();
		const sizeButton = document.getElementById('sizeButton');
		sizeButton.onclick = fixCanvas;
	}

	var drawShape = function() {
		context.save();
		context.rect(25, 25, 50, 50);
		context.lineWidth = 1.5;
		context.strokeStyle = 'black';
		context.stroke();
		context.restore();
    };

	var fixCanvas = function() {
		//context.clearRect(0, 0, 300, 150);
		myCanvas.width = 400;
		myCanvas.height = 400;
		drawShape();
	};

	return App;

})();

window.onload = () => {
	new App();
};
