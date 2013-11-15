/* jshint browser: true */

angular.module('elfGame', ['gameWrapper'])
.factory('elfgameService', function(gameEventService, gameWrap) {'use strict';
	// Game.elfWorld = elfworld;
	return {

		map_grid : null,

		// Get width of the game screen in pixels
		width : function() {
			return this.map_grid.width * this.map_grid.tile.width;
		},

		// Get height of the game screen in pixels
		height : function() {
			return this.map_grid.height * this.map_grid.tile.height;
		},

		initMapGrid : function(mapGrid) {
			this.map_grid = mapGrid;
		},

		reportEvent: function(message) {
			return gameEventService.towerBroadcast(message);
		},
	
		sendDebugMessage: function(message) {
			return gameEventService.debugBroadcast(message);
		},
		
		// Initialize and start our game
		start : function(mapGrid) {
			// Start crafty
			this.initMapGrid(mapGrid);
			var gameDiv = document.getElementById("gameBoard");	
			gameWrap.startGame(gameDiv, this);			
		}
	};
});

