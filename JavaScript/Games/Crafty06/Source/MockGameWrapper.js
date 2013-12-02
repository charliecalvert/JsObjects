/**
 * @author Charlie Calvert
 */

angular.module('gameWrapMod', [])
.factory('gameWrap', function() { 'use strict';
	return {
		startGame: function(gameDiv, elfGameService) {
			Crafty.game = elfGameService;
		},

		trigger: function() {

		}

	};
});

