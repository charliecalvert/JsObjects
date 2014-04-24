/**
 * @author Charlie Calvert
 */

var App = (function() {
	'use strict';
	// Private variables
	var useKeys = true;

	// Constructor
	function App() {
		$('#toggleKeys').click(toggleKeys);
		toggleKeys();
	}

	var toggleKeys = function() {
		if (useKeys) {
			window.addEventListener('keydown', doKeyDown, true);
			$('#keyStatus').html('Keyboard on');
		} else {
			window.removeEventListener('keydown', doKeyDown, true);
			$('#keyStatus').html('Keyboard off');
		}
		useKeys = !useKeys;		
	};
	
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
	'use strict';
	new App();
});
