/* jshint browser: true */

angular.module('elfGameMod', ['characters'])
.factory('elfgame', function(gameEventService, people) {

	return {

		map_grid : null,

		defaultMapGrid : {
			width : 18,
			height : 12,
			tile : {
				width : 32,
				height : 32
			}
		},

		villages : [],

		reportEvent : function(message) {
			gameEventService.towerBroadcast(message);
		},

		changeDirectionMessage : function(message) {
			gameEventService.changeDirectionBroadcast(message);
		},

		sendDebugMessage : function(message) {
			gameEventService.debugBroadcast(message);
		},

		rollD3 : function(village) {
			village.tower.hitPoints -= Math.floor(Math.random() * 3);
		},

		encounter : function(village) {
			this.rollD3(village);

			gameEventService.debugBroadcast('Tower hit points: ' + village.tower.hitPoints);
			if (village.tower.hitPoints <= 0) {
				gameEventService.encounterBroadcast('success');
				return true;
			} else {
				gameEventService.encounterBroadcast('miss');
				return false;
			}
		},

		newVillage : function(village) {
			village.tower = people.tower();
			this.villages.push(village);
		},

		goLeft : function() {
			Crafty.trigger('goLeft', Crafty);
		},

		stopMove : function() {
			Crafty.trigger('stopMove', Crafty);
		},

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
			if (mapGrid) {
				this.map_grid = mapGrid;
			} else {
				this.map_grid = this.defaultMapGrid;
			}
			Crafty.init(this.width(), this.height(), gameDiv);
			Crafty.game = this;
			Crafty.background('rgb(0, 109, 20)');

			// Call load scene, defined below
			Crafty.scene('Loading');
		}
	};
});

