/* jshint browser: true */

const ElfGame = (function() {
    'use strict';
    // Initialize and start our game


    let people = null;
    let gameEventService = null;

    function ElfGame() {
        people = new People();
        gameEventService = new GameEvent();

    }

//const people = new People();
//const gameEventService = new GameEvent();

//const elfGameService = {

    ElfGame.prototype.getService = function() {
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

            encounters: new Encounters(gameEventService),
            gameMessages: new GameMessages(gameEventService),

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

            start: function(mapGrid) {
                //utility.addStringFormat();
                // Start crafty
                const gameDiv = document.getElementById("gameBoard");
                if (mapGrid) {
                    this.map_grid = mapGrid;
                } else {
                    this.map_grid = this.defaultMapGrid;
                }
                gameWrap.startGame(gameDiv, this);
            }
        };
    }

    return ElfGame;
})();

const elfGame = new ElfGame();
elfGame.getService().start();


