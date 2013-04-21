/*jshint jquery: true, browser: true, strict: true, devel: true */

var App = (function() { 'use strict';

	var context = null;
	var rectSize = 25;
	var pictures = {};

	function App() {
		context = getCanvas();
		makeImageData();
	}

	var draw = function() {
		var count = 0;
		for (var imageName in pictures) {
			context.drawImage(pictures[imageName], 0, rectSize, rectSize, rectSize, 
				rectSize * (count++ + 1), 135, rectSize, rectSize);
		}
	};

	var makeImageData = function() {
		var images = ["cscGarden01.gif", "cscGarden02.gif"];
		loadImages(images, function(pictures, a) {
			var fileName = images[a];
			context.drawImage(pictures[fileName], 0, rectSize, rectSize, rectSize, rectSize * (a + 1), 10, rectSize, rectSize);
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
			pictures[fileName].src = fileName;
		}
	};

	var getCanvas = function() {
		var canvas = document.getElementById('mainCanvas');
		if (canvas !== null) {
			var context = canvas.getContext('2d');
			setInterval(draw, 50);
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
