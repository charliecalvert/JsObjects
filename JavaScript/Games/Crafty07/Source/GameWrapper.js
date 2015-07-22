/**
 * @author Charlie Calvert
 */

angular.module('gameWrapMod', [])
.constant('CONFIG', {
	testing: false
})
.factory('gameWrap', function() { 'use strict';
	return {
		startGame: function(gameDiv, elfGameService) {
			Crafty.init(elfGameService.width(), elfGameService.height(), gameDiv);
			Crafty.game = elfGameService;
			Crafty.background('rgb(0, 109, 20)');
			// Load the game
			Crafty.enterScene('Loading');
		},

		trigger: function() {

		}

	};
});

