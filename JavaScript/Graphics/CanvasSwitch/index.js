var App = (function() {
	var myCanvas;
	var context;

	function App() {
		base();
		bar();
		$("#switch01").click(foo);
		$("#switch02").click(bar);
	}

	var base = function() {
		$("body").css("overflow", "hidden");
		myCanvas = $('<canvas />');
		//myCanvas[0].height = 200;
		//myCanvas[0].width = 300;
		//var scrollX = window.pageXOffset;
		//var scrollY = window.pageYOffset;
		$(myCanvas).css({
			//position : "absolute",
			left : 0,
			// top : scrollY
		});

		var div = $('#div01');
		$(div).append(myCanvas);

		context = myCanvas.get(0).getContext("2d");
		myCanvas.attr("width", $(div).get(0).clientWidth);
		myCanvas.attr("height", $(div).get(0).clientHeight);
	}
	
	var bar = function() {

		context.lineWidth = 35;
		context.strokeStyle = "blue";
		context.fillStyle = "lightblue";
		context.fillRect(0, 0, myCanvas.width(), myCanvas.height());
		context.strokeRect(0, 0, myCanvas.width(), myCanvas.height());

		context.fillStyle = "blue";
		context.font = "24px Comic Sans MS";
			context.fillText("The bird flew through the jungle", 50, 100);
	}
	
	var hide = function() {

		$(myCanvas).click(function() {
			$(myCanvas).hide();
			$("body").css("overflow", "auto");
		});
	}
	
	var foo = function() {

		context.lineWidth = 35;
		context.strokeStyle = "green";
		context.fillStyle = "lightgreen";
		context.fillRect(0, 0, myCanvas.width(), myCanvas.height());
		context.strokeRect(0, 0, myCanvas.width(), myCanvas.height());
		context.fillStyle = "green";
		context.font = "24px Comic Sans MS";
		context.fillText("The big cat walked far", 100, 100);
	}

	return App;
})();

$(document).ready(function() {'use strict';
	new App();
});
