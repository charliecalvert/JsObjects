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

		var callback = function(image, x, y) {
			context.drawImage(image, rectSize, 0, rectSize, rectSize, x, y, rectSize, rectSize);
		};
		
		var image = new Image();
		image.onload = function() {
			callback(image, 10, 10);
		};
		
		image.src = image01;
	};

	var getCanvas = function() {
		var canvas = document.getElementById('mainCanvas');
		if (canvas !== null) {
			var context = canvas.getContext('2d');
			setInterval(draw, 250);
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
