/*
 * @author: Charlie Calvert
 */

var App = (function() {

	// Private variables
	var myCanvas;
	var context;
	var mainDiv;
	
	// Constructor
	function App() {		
		$("#switch01").click(screen01);
		$("#switch02").click(screen02);
		$("#switch03").click(htmlOnly01);
		$("#switch04").click(htmlOnly02);
		mainDiv = $('#mainDiv');
		base();
		screen02();
	}

	var base = function() {
		$("body").css("overflow", "hidden");
		myCanvas = $('<canvas />');
		$(myCanvas).css({
			left : 0
		});

		context = myCanvas.get(0).getContext("2d");
		myCanvas.attr("width", mainDiv[0].clientWidth);
		myCanvas.attr("height", mainDiv[0].clientHeight);
	}
	
	var clear = function() {
		$(mainDiv).empty();
	}
	
	var hide = function() {

		$(myCanvas).click(function() {
			$(myCanvas).hide();
			$("body").css("overflow", "auto");
		});
	}
	
	var screen01 = function() {
		clear();
		mainDiv.append(myCanvas);
		context.lineWidth = 35;
		context.strokeStyle = "green";
		context.fillStyle = "lightgreen";
		context.fillRect(0, 0, myCanvas.width(), myCanvas.height());
		context.strokeRect(0, 0, myCanvas.width(), myCanvas.height());
		context.fillStyle = "green";
		context.font = "36px Comic Sans MS";
		context.fillText("Using Canvas", 35, 65);
		context.font = "24px Comic Sans MS";
		context.fillText("The big cat walked in graphics mode.", 35, 100);
	}

	var screen02 = function() {
		clear();
		mainDiv.append(myCanvas);
		context.lineWidth = 35;
		context.strokeStyle = "blue";
		context.fillStyle = "lightblue";
		context.fillRect(0, 0, myCanvas.width(), myCanvas.height());
		context.strokeRect(0, 0, myCanvas.width(), myCanvas.height());

		context.fillStyle = "blue";
		context.font = "36px Comic Sans MS";
		context.fillText("Using Canvas", 35, 65);
		context.font = "24px Comic Sans MS";
		context.fillText("The bird flew through the jungle", 35, 100);
	}
	
		
	var htmlOnly01 = function() {
		clear();
		mainDiv.load("data.html #data01");
	}
	
	var htmlOnly02 = function() {
		clear();
		mainDiv.load("data.html #data02");
	}

	return App;
})();

$(document).ready(function() {'use strict';
	new App();
});
