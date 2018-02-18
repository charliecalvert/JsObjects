angular.module('elfPlayer', ['elfGameMod'])
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
            $scope.$apply(function() {
                $scope.eventNote = gameEventService.message;
            });
        });

        $scope.$on('debugBroadcast', function() {
            $scope.$apply(function() {
                $scope.debugMessages.unshift(gameEventService.message);
            });
        });

        $scope.$on('changeDirectionBroadcast', function() {
            $scope.eventNote = gameEventService.message;
            $scope.$apply(function() {
                $scope.moveMessages.unshift(gameEventService.message);
            });
        });

        $scope.$on('encounterBroadcast', function() {
            $scope.$apply(function() {
                $scope.encounterMessage = gameEventService.message;
            });
        });

        // Respond to ButtonClick
        $scope.goLeft = function() {
            elfGameService.goLeft();
        };

        // Respond to ButtonClick
        $scope.stopMove = function() {
            elfGameService.stopMove();
        };
    });

// ElfPlayer.$inject = ['$scope', 'gameEventService'];

