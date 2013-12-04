/* jshint browser: true */

angular.module('elfGameMod', ['characterMod', 'gameWrapMod'])
.factory('elfGameService', function(gameEventService, people, gameWrap) { 
	'use strict';
	return {

		map_grid : null,
		
		misses: 0,

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
			return gameEventService.towerBroadcast(message);
		},

		changeDirectionMessage : function(message) {
			return gameEventService.changeDirectionBroadcast(message);
		},

		sendDebugMessage : function(message) {
			return gameEventService.debugBroadcast(message);
		},

		rollD3 : function(village) {
			village.tower.hitPoints -= Math.floor(Math.random() * 3);
		},

        encounterFood : function(food, count) {
            gameEventService.debugBroadcast("food");
            gameEventService.encounterBroadcast('Food success');
            return true;
        },
        
		encounter : function(village) {
			this.rollD3(village);

			gameEventService.debugBroadcast('Tower hit points: ' + village.tower.hitPoints);
			if (village.tower.hitPoints <= 0) {
				gameEventService.encounterBroadcast('success');
				return true;
			} else {
				gameEventService.encounterBroadcast('miss');
				if (this.misses++ > 3) {
					Crafty.trigger('youLose', Crafty);
				}
				
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

		initMapGrid : function(mapGrid) {
			this.map_grid = mapGrid;
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
			gameWrap.startGame(gameDiv, this);	
		}
	};
});

