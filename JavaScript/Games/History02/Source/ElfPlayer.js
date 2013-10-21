/**
 * @author Charlie Calvert
 */

var ElfWorld = angular.module('elfworld', []);

/*.controller('starter', function() {
    game.start();
}); */

function ElfPlayer($scope) {
    mapGrid = {
        width:  24,
        height: 16,
        tile: {
            width:  32,
            height: 32
        }
    };
    
    $scope.name = "ElfPlayer";
    $scope.game = Game;
    $scope.game.start(mapGrid);
    // Game.start();
} 
