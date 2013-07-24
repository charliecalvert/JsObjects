/*jshint jquery: true, browser: true, strict: true, devel: true */

var App = (function() { 'use strict';

	var context = null;
	var rectSizeX = 400;
	var rectSizeY = 300;
	var pictures = {};
	var path = 'images/';

	function App() {
		context = getCanvas();
		makeImageData();
	}

	var draw = function() {
		var countX = 0;
		var countY = 0;
		for (var imageName in pictures) {
			var xFactor = (countX++ * rectSizeX);
			var yFactor = (countY * rectSizeY);
			context.drawImage(pictures[imageName], 
					0, 0, rectSizeX, rectSizeY, 
					0 + xFactor, 0 + yFactor, rectSizeX, rectSizeY);
			if (countX === 2) {
				countX = 0;
				countY = 1;
			}
		}
	};

	var makeImageData = function() {
		var images = ["IMG_2721-400.jpg", "IMG_2726-400.jpg", "IMG_2728-400.jpg", "IMG_2729-400.jpg"];
		loadImages(images, function(pictures, a) {
		});
	};

	var loadImages = function(images, callback) {
	
		var a = 0;
		
		function onload() {
			callback(pictures, a++);
		}		
		
		for (var i = 0; i < images.length; i++) {
			var fileName = images[i];
			pictures[fileName] = new Image();
			pictures[fileName].onload = onload; 
			pictures[fileName].src = path + fileName;
		}
	};

	var getCanvas = function() {
		var canvas = document.getElementById('mainCanvas');
		if (canvas !== null) {
			var context = canvas.getContext('2d');
			setInterval(draw, 100);
			return context;
		} else {
			$("#debugs").css({
				backgroundColor : "blue",
				color: "yellow"
			});
			$("#debugs").html("Could not retrieve canvas");
			return null;
		}
	};
	
	return App;
})();

$(document).ready(function() {'use strict';
	new App();
});
