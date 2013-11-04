 /**
 * @author Charlie Calvert
 */

/* jshint devel: true */

var ElfWorld = angular.module('elfworld', ['elfgame'])
.factory('gameEventService', function($rootScope) {
	return {
		message: "",

		towerBroadcast: function(message) {
			this.message = message;
			this.broadcastMessage('towerBroadcast');
		},

		debugBroadcast: function(message) {
			this.message = message;
			this.broadcastMessage('debugBroadcast');
		},

		broadcastMessage: function(broadcastType) {
			$rootScope.$broadcast(broadcastType);
		}
	};
});

/*.controller('starter', function() {
	game.start();
}); */

ElfWorld.controller('ElfController', function($scope, gameEventService, elfgameService) {

	$scope.name = "ElfPlayer";
	$scope.eventNote = "no messages";
	var showTheButton = true;
	
	$scope.start = function() {
		elfgameService.start({
			width : 18,
			height : 12,
			tile : {
				width : 32,
				height : 32
			}
		});
		showTheButton = false;
	};
	
	$scope.showButton = function() {
		return showTheButton;
	};

	// This event is fired from inside crafty when a tower is found.
	// We need to call $apply because we are calling from Crafty, not from Angular.
	$scope.$on('towerBroadcast', function() {
		// this.$scope.eventNote = gameEventService.message;
		$scope.$apply(function() { $scope.eventNote = gameEventService.message; });
		console.log(gameEventService.message);
	});

	$scope.$on('debugBroadcast', function() {
		// this.$scope.eventNote = gameEventService.message;
		$scope.$apply(function() { $scope.debugMessage = gameEventService.message; });
		console.log(gameEventService.message);
	});

});

// ElfPlayer.$inject = ['$scope', 'gameEventService'];

