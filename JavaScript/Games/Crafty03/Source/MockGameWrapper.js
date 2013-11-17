/**
 * @author Charlie Calvert
 */

angular.module('gameWrapper', [])
.factory('gameWrap', function() { 'use strict';
	return {
		startGame: function(gameDiv, elfGame) {
			Crafty.game = elfGame;
		},

		trigger: function() {

		}

	};
});

