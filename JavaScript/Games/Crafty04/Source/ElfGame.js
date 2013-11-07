/* jshint browser: true, devel: true */

angular.module('elfgame', [])
.controller('GameBoard', function($scope, gameEventService, elfgame) { 'use strict';

    $scope.name = "GameBoard";
    
	// Define our grid's size and the size of its tiles
	var mapGrid = {
		width : 18,
		height : 12,
		tile : {
			width : 32,
			height : 32
		}
	};

	elfgame.start(mapGrid);

	elfgame.reportEvent = function(message) {
		gameEventService.towerBroadcast(message);
	};
	
	elfgame.changeDirectionMessage = function(message) {
		gameEventService.changeDirectionBroadcast(message);
	};

	elfgame.sendDebugMessage = function(message) {
		gameEventService.debugBroadcast(message);
	};

	elfgame.encounter = function(encountered) {
		console.log(encountered);

		var result = Math.floor(Math.random() * 3) + 1;
		gameEventService.debugBroadcast('Result: ' + result);        
		if (result === 1) {            
			gameEventService.encounterBroadcast('success');
			return true;
		} else {            
			gameEventService.encounterBroadcast('miss');
			return false;
		}
	};
	
	elfgame.goLeft = function() { 
		Crafty.trigger('goLeft', Crafty);
	};
	
	elfgame.stopMove = function() { 
		Crafty.trigger('stopMove', Crafty);
	};

}).factory('elfgame', function() { 'use strict';
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

		// Initialize and start our game
		start : function(mapGrid) {
			// Start crafty
			var gameDiv = document.getElementById("gameBoard");
			this.map_grid = mapGrid;
			Crafty.init(this.width(), this.height(), gameDiv);
			Crafty.game = this;
			Crafty.background('rgb(0, 109, 20)');

			// Call load scene, defined below
			Crafty.scene('Loading');
		}
	};
});

