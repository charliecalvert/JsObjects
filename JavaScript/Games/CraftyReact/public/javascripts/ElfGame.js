/* jshint browser: true */

angular.module('elfGameMod', ['characterMod', 'gameWrapMod'])
    .factory('elfGameService',
        function(gameEventService, encounters, people, gameWrap, utility) {
        'use strict';
        return {

            map_grid: null,

            misses: 0,

            bushHits: 0,

            defaultMapGrid: {
                width: 18,
                height: 12,
                tile: {
                    width: 32,
                    height: 32
                }
            },

            villages: [],

            encounters: encounters,

            reportEvent: function(message) {
                return gameEventService.towerBroadcast(message);
            },

            changeDirectionMessage: function(message) {
                return gameEventService.changeDirectionBroadcast(message);
            },

            sendDebugMessage: function(message) {
                return gameEventService.debugBroadcast(message);
            },

            newVillage: function(village) {
                village.tower = people.tower();
                return this.villages.push(village);
            },

            goLeft: function() {
                Crafty.trigger('goLeft', Crafty);
                return true;
            },

            stopMove: function() {
                Crafty.trigger('stopMove', Crafty);
                return true;
            },

            // Get width of the game screen in pixels
            width: function() {
                return this.map_grid.width * this.map_grid.tile.width;
            },

            // Get height of the game screen in pixels
            height: function() {
                return this.map_grid.height * this.map_grid.tile.height;
            },

            initMapGrid: function(mapGrid) {
                this.map_grid = mapGrid;
            },

            // Initialize and start our game
            start: function(mapGrid) {
                utility.addStringFormat();
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

