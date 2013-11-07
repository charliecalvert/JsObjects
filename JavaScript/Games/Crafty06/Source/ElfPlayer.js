 /**
 * @author Charlie Calvert
 */

 /* jshint devel: true */

angular.module('elfPlayer', ['elfGameMod'])
.factory('gameEventService', function($rootScope) { 'use strict';
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

		encounterBroadcast: function(message) {
			this.message = message;
			this.broadcastMessage('encounterBroadcast');
		},

		changeDirectionBroadcast: function(message) {
			this.message = message;
			this.broadcastMessage('changeDirectionBroadcast');
		},

		broadcastMessage: function(broadcastType) {
			$rootScope.$broadcast(broadcastType);
		}
	};
})

/*.controller('starter', function() {
	game.start();
}); */

.controller('ElfController', function($scope, gameEventService, elfgame) { 'use strict';

	$scope.name = "ElfPlayer";
	$scope.eventNote = "no messages";
	$scope.crazyFoo = "";
	$scope.debugMessages = [];
	$scope.moveMessages = [];
	
	elfgame.start();

	// This event is fired from inside crafty when a tower is found.
	// We need to call $apply because we are calling from Crafty, not from Angular.
	$scope.$on('towerBroadcast', function() {
		// this.$scope.eventNote = gameEventService.message;
		$scope.$apply(function() { $scope.eventNote = gameEventService.message; });
		console.log(gameEventService.message);
	});

	$scope.$on('debugBroadcast', function() {
		// this.$scope.eventNote = gameEventService.message;
		$scope.$apply(function() { $scope.debugMessages.unshift(gameEventService.message); });
		console.log(gameEventService.message);
	});

	$scope.$on('changeDirectionBroadcast', function() {
		$scope.eventNote = gameEventService.message;
		$scope.$apply(function() { $scope.moveMessages.unshift(gameEventService.message); });
		console.log(gameEventService.message);
	});

	$scope.$on('encounterBroadcast', function() {
		// this.$scope.eventNote = gameEventService.message;
		$scope.$apply(function() { $scope.encounterMessage = gameEventService.message; });
		console.log(gameEventService.message);
	});

	$scope.goLeft = function() {
		elfgame.goLeft();
	};

	$scope.stopMove = function() {
		elfgame.stopMove();
	};
});

// ElfPlayer.$inject = ['$scope', 'gameEventService'];

