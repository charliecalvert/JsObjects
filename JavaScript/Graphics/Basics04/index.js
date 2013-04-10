var App = (function() {

	var context = null;
	var rectSize = 25;
	var pictures = {};

	function App() {
		context = getCanvas();
		makeImageData();
	}

	var draw = function() {

	};

	var makeImageData = function() {
		var images = ["cscGarden01.gif", "cscGarden02.gif"];
		var x = 10;
		loadImages(images, function(pictures, a) {
			var fileName = images[a];
			context.drawImage(pictures[fileName], 0, rectSize, rectSize, rectSize, rectSize * (a + 1), 10, rectSize, rectSize);
		});
	};

	var loadImages = function(images, callback) {
		var a = 0;
		for (var i = 0; i < images.length; i++) {
			var fileName = images[i];
			pictures[fileName] = new Image();
			pictures[fileName].onload = function() {
				callback(pictures, a++);
			};
			pictures[fileName].src = fileName;
		}
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
