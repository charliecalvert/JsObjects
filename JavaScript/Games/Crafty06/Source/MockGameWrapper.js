/**
 * @author Charlie Calvert
 */

angular.module('gameWrapper', [])
.factory('gameWrap', function() { 'use strict';
	return {
		startGame: function(gameDiv, elfGameService) {
			Crafty.game = elfGameService;
		},

		trigger: function() {

		}

	};
});

