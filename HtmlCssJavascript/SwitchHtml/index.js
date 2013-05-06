/**
 * @author Charlie Calvert
 */

ELF.own.App = (function() {
	var mainDiv = null;

	function App() {
		new ELF.own.ElvenEvent();
		$("#switch01").click(screen01);
		$("#switch02").click(screen02);
		$("#switch03").click(htmlOnly);
		mainDiv = $('#mainDiv');
		base();
		screen01();
	}

	var base = function() {
		$("body").css("overflow", "hidden");
		myCanvas = $('<canvas />');
		$(myCanvas).css({
			left : 0,
		});

		context = myCanvas.get(0).getContext("2d");
		myCanvas.attr("width", $(mainDiv).get(0).clientWidth);
		myCanvas.attr("height", $(mainDiv).get(0).clientHeight);
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

	var screen02 = function() {
		clear();
		mainDiv.append(myCanvas);
		context.lineWidth = 35;
		context.strokeStyle = "#77FF88";
		context.fillStyle = "#22EE22";
		context.fillRect(0, 0, myCanvas.width(), myCanvas.height());
		context.strokeRect(0, 0, myCanvas.width(), myCanvas.height());

		context.fillStyle = "#446644";
		context.font = "36px Comic Sans MS";
		context.fillText("Using Canvas", 35, 65);
		context.font = "24px Comic Sans MS";
		context.fillText("The bird flew through the jungle", 35, 100);
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
	
	var htmlOnly = function() {
		clear();
		mainDiv.load("data.html #data");
	}

	return App;

})();

$("document").ready(function() {'use strict';
	new ELF.own.App();
});