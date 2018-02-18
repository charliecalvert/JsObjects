/**
 * @author Charlie Calvert
 */

/* jshint devel: true */

angular.module('elfPlayer')
    .factory('gameEventService', function($rootScope) { 'use strict';
        return new GameEvent($rootScope);
    });


const GameEvent = (function() {

    const bc = new BroadcastChannel('test_channel');
    var message = "";
    rootScope = null;

    function GameEvent($rootScope) {
        rootScope = $rootScope;
    }

    GameEvent.prototype.towerBroadcast = function(message) {
        this.message = message;
        broadcastMessage('towerBroadcast');
        return true;
    };

    GameEvent.prototype.debugBroadcast = function(message) {
        this.message = message;
        broadcastMessage('debugBroadcast', message);
        return true;
    };

    GameEvent.prototype.encounterBroadcast = function(message) {
        this.message = message;
        broadcastMessage('encounterBroadcast', message);
    };

    GameEvent.prototype.changeDirectionBroadcast = function(message) {
        this.message = message;
        broadcastMessage('changeDirectionBroadcast', message);
        return true;
    };

    var broadcastMessage = function(broadcastType, message) {
        try {
            bc.postMessage({'type': broadcastType, message: message});
        } catch(err) {
            console.log(err);
        }
        rootScope.$broadcast(broadcastType);
    };

    return GameEvent;
}());

