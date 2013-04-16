var App = (function() {

	var context = null;
	var rectSize = 25;
	var images = {};

	function App() {
		context = getCanvas();
		makeImageData();
	}

	var makeImageData = function() {
		var image01 = "cscGarden.gif"

		loadImage(image01, function(image, x, y) {
			context.drawImage(image, rectSize, 0, rectSize, rectSize, 
				x, y, rectSize, rectSize);
		});
	};

	var loadImage = function(fileName, callback) {
		var image = new Image();
		image.onload = function() {
			callback(image, 10, 10);
		};
		image.src = fileName;
	};

	var getCanvas = function() {
		var canvas = document.getElementById('mainCanvas');
		if (canvas !== null) {
			var context = canvas.getContext('2d');
			return context;
		} else {
			$("#debugs").css({
				backgroundColor : "blue",
				color : "yellow"
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
