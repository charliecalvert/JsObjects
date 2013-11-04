/**
 * @author Charlie Calvert
 */

angular.module('elfworld', ['modGame'])
.controller("ElfPlayer", function($scope, game) {
    var mapGrid = {
        width:  24,
        height: 16,
        tile: {
            width:  32,
            height: 32
        }
    };
    
    $scope.name = "ElfPlayer";
    Crafty.game = game;
    Crafty.game.start(mapGrid);
    // Game.start();
}); 
