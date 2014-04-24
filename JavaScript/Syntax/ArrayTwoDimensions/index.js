/*jshint jquery: true, devel: true, browser: true, strict: true */

var App = (function() {
	'use strict';
	
	var MAX = 3;
	var grid = [
		[0, 1, 0], 
		[1, 0, 1], 
		[0, 1, 0]
	];

	function App() {
		for (var column = 0; column < MAX; column++) {
			for (var row = 0; row < MAX; row++) {
				var item = "#item" + row + column;
				if (grid[row][column] === 0) {					
					$(item).html("0");
				} else {
					$(item).html("X");
				}
			}
		}
	}

	return App;
})();

$(document).ready(function() {
	'use strict';
	new App();
}); 