

var App = (function() {

	// Private variables (in closure)
	var context = null;
	var rectSize = 25;
	var WIDTH = 300;
	var HEIGHT = 300;

	// Constructor has Caps, must be called with new, returned from App
	function App() {
		context = getCanvas();

	}

	var getCanvas = function() {
		var example = document.getElementById('mainCanvas');
		if (example !== null) {
			var context = example.getContext('2d');
			setInterval(draw, 50);
			return context;
		} else {
			$("#debugs").css({
				backgroundColor : "blue"
			});
			$("#debugs").html("No Canvas");
			return null;
		}
	}
	var draw = function() {
		drawRectangle();
		drawPyramid();
		circle(10, 10, 5);
		drawNpc(4, 2);
		drawGreen(5, 3);
		drawRed(6, 4);
	}
	var drawImage = function() {
		var sources = this.loadBitmap();

		that.loadImages(sources, function() {
			for (var i = 0; i < 12; i++) {
				context.drawImage(images.darthVader, 0, 0, rectSize, rectSize, rectSize * i, 0, rectSize, rectSize);
			}
		});
	};

	var circle = function(x, y, r) {
		context.fillStyle = "rgb(0,15,122)";
		context.beginPath();
		context.arc(x, y, r, 0, Math.PI * 2, true);
		context.fill();
	};

	var clear = function() {
		context.clearRect(0, 0, WIDTH, HEIGHT);
	};

	var drawNpc = function(row, col) {
		context.fillStyle = "rgb(0,0,255)";
		context.fillRect(row * rectSize, col * rectSize, rectSize, rectSize);
	};

	var drawGreen = function(row, col) {
		context.fillStyle = "rgb(0,255,0)";
		context.fillRect(row * rectSize, col * rectSize, rectSize, rectSize);
	};

	var drawRed = function(row, col) {
		context.fillStyle = "rgb(255,0,0)";
		context.fillRect(row * rectSize, col * rectSize, rectSize, rectSize);
	};

	var drawPyramid = function() {
		context.fillStyle = "rgb(255, 15, 0)";
		context.beginPath();
		context.moveTo(rectSize, rectSize);
		context.lineTo(50, 75);
		context.lineTo(75, rectSize);
		context.fill();
	};

	var drawRectangle = function() {
		context.fillStyle = "rgb(23,255,22)";
		context.fillRect(130, 130, 150, 150);
	};

	return App;

})();

$(document).ready(function() {"use strict";
	new App();
});
