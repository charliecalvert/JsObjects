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
			Crafty.game = elfGameService;
		}
	};
});

