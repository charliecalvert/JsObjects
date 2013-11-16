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
			return true;
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
.controller('ElfController', function($scope, gameEventService, elfGameService) { 'use strict';

	$scope.name = "ElfPlayer";
	$scope.eventNote = "no messages";
	$scope.crazyFoo = "";
	$scope.debugMessages = [];
	$scope.moveMessages = [];
	
	elfGameService.start();

	// This event is fired from inside crafty when a tower is found.
	// We need to call $apply because we are calling from Crafty, not from Angular.
	$scope.$on('towerBroadcast', function() {		
		$scope.$apply(function() { $scope.eventNote = gameEventService.message; });		
	});

	$scope.$on('debugBroadcast', function() {		
		$scope.$apply(function() { $scope.debugMessages.unshift(gameEventService.message); });		
	});

	$scope.$on('changeDirectionBroadcast', function() {
		$scope.eventNote = gameEventService.message;
		$scope.$apply(function() { $scope.moveMessages.unshift(gameEventService.message); });		
	});

	$scope.$on('encounterBroadcast', function() {		
		$scope.$apply(function() { $scope.encounterMessage = gameEventService.message; });		
	});

	$scope.goLeft = function() {
		elfGameService.goLeft();
	};

	$scope.stopMove = function() {
		elfGameService.stopMove();
	};
});

// ElfPlayer.$inject = ['$scope', 'gameEventService'];

