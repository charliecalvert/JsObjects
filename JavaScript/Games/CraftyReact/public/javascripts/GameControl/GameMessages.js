angular.module('elfGameMod')
    .factory('gameMessages', function(gameEventService, people) {
        'use strict';
        return new GameMessages(gameEventService, people);
    });

const GameMessages = (function() {

    let gameEventService = null;

    function GameMessages(gameEventServiceInit) {
        gameEventService = gameEventServiceInit;
    }

    GameMessages.prototype.changeDirectionMessage = function(message) {
        return gameEventService.changeDirectionBroadcast(message);
    };

    GameMessages.prototype.reportEvent = function(message) {
        return gameEventService.towerBroadcast(message);
    };

    GameMessages.prototype.sendDebugMessage = function(message) {
        return gameEventService.debugBroadcast(message);
    };
    return GameMessages;
})();