/**
 * @author Charlie Calvert
 */

angular.module('gameWrapper', [])
.factory('gameWrap', function() {
	return {
		startGame: function(gameDiv, elfGameService) {
			Crafty.game = elfGameService;
		}, 
		
		trigger: function() {
			
		}
		
	};
});

