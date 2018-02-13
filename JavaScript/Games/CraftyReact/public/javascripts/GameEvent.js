var GameEvent = (function() {

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
		broadcastMessage('debugBroadcast');
		return true;
	};

	GameEvent.prototype.encounterBroadcast = function(message) {
		this.message = message;
		broadcastMessage('encounterBroadcast');
	};

	GameEvent.prototype.changeDirectionBroadcast = function(message) {
		this.message = message;
		broadcastMessage('changeDirectionBroadcast', message);
		return true;
	};

	var broadcastMessage = function(broadcastType, message) {
        bc.postMessage({'ElfTest: ': broadcastType, message: message});
		rootScope.$broadcast(broadcastType);
	};

	return GameEvent;
}());