/**
 * @author Charlie Calvert
 */

angular.module('gameWrapper', [])
.factory('gameWrap', function() {
	return {
		startGame: function(gameDiv, elfGame) {
			Crafty.init(elfGame.width(), elfGame.height(), gameDiv);
			Crafty.game = elfGame;
			Crafty.background('rgb(0, 109, 20)');
			// Load the game			
			Crafty.scene('Loading');
		}, 
		
		trigger: function() {
			
		}
		
	};
});

