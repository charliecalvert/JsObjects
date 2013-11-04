/* jshint browser: true */

angular.module('elfgame', []).controller('GameBoard', function($scope, gameEventService, elfgameService) {

	// elfgameService.initMapGrid(mapGrid);
	$scope.name = "GameBoard";

	elfgameService.reportEvent = function(message) {
		return gameEventService.towerBroadcast(message);
	};
	
	elfgameService.sendDebugMessage = function(message) {
		return gameEventService.debugBroadcast(message);
	};
}).factory('elfgameService', function() {
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
		
		// Initialize and start our game
		start : function(mapGrid) {
			// Start crafty
			this.initMapGrid(mapGrid);
			var gameDiv = document.getElementById("gameBoard");			
			Crafty.init(this.width(), this.height(), gameDiv);
			Crafty.game = this;
			Crafty.background('rgb(0, 109, 20)');

			// Call load scene, defined below
			Crafty.scene('Loading');
		}
	};
});

