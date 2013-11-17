/**
 * @author Charlie Calvert
 */

angular.module('gameWrapper', [])
.factory('gameWrap', function() { 'use strict';
	return {
		startGame: function(gameDiv, elfGameService) {
			Crafty.init(elfGameService.width(), elfGameService.height(), gameDiv);
			Crafty.game = elfGameService;
			Crafty.background('rgb(0, 109, 20)');
			// Load the game
			Crafty.scene('Loading');
		},

		trigger: function() {

		}

	};
});

