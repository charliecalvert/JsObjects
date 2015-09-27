var GameEvent = (function() {

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
		broadcastMessage('debugBroadcast');
		return true;
	};

	GameEvent.prototype.encounterBroadcast = function(message) {
		this.message = message;
		broadcastMessage('encounterBroadcast');
	};

	GameEvent.prototype.changeDirectionBroadcast = function(message) {
		this.message = message;
		broadcastMessage('changeDirectionBroadcast');
		return true;
	};

	var broadcastMessage = function(broadcastType) {
		rootScope.$broadcast(broadcastType);
	};

	return GameEvent;
}());