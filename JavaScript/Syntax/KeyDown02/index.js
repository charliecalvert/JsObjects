/**
 * @author Charlie Calvert
 */

var App = (function() {

	// Private variables
	var MAX = 3;
	var MAXY = 2;

	// Constructor
	function App() {
		window.addEventListener('keydown', doKeyDown, true);

		for (var i = 0; i < MAX; i++) {
			for (var j = 0; j < MAXY; j++) {
				var span = "#span" + j + i;
				$(span).html(span);
			}
		}
	}

	var doKeyDown = function(evt) {
		switch (evt.keyCode) {
			case 38:
				/* Up arrow was pressed */
				$("#debug").html("Up Arrow");
				break;
			case 40:
				/* Down arrow was pressed */
				$("#debug").html("Down Arrow");
				break;
			case 37:
				/* Left arrow was pressed */
				$("#debug").html("Left Arrow");
				break;
			case 39:
				/* Right arrow was pressed */
				$("#debug").html("Right Arrow");
				break;
			default: 
				$("#debug").html(evt.keyCode);
					
		}
	};

	return App;

})();

$(document).ready(function() {
	new App();
});
