var App = (function() {

	var context = null;
	var rectSize = 25;
	var images = {};

	function App() {
		context = getCanvas();
		makeImageData();
	}

	var draw = function() {

	};

	var makeImageData = function() {
		var image01 = "cscGarden.gif"

		loadImage(image01, function(image, x, y) {
			//context.drawImage(images[image01], rectSize, 0, rectSize, rectSize, x, y, rectSize, rectSize);
			context.drawImage(image, rectSize, 0, rectSize, rectSize, x, y, rectSize, rectSize);
		});
	};

	var loadImage = function(fileName, callback) {
		var image = new Image();
		image.onload = function() {
			callback(image, 10, 10);
		};
		image.src = fileName;
	};

	var loadImages = function(fileName, callback) {
		images[fileName] = new Image();
		images[fileName].onload = function() {
			callback(10, 10);
		};
		images[fileName].src = fileName;
	};

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
	return App;
})();

$(document).ready(function() {'use strict';
	new App();
});
