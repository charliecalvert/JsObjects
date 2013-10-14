/**
 * @author Charlie Calvert
 */

var angularNotify = angular.module('AngularNotify', ['noteArchive']);

angularNotify.constant('MAX_LEN', 10);

// Value objects 
// Value Objects cannot depend on another service. There is no place to do that.
angularNotify.value('noteArchive', new NoteArchive());

// Service Example
angularNotify.service('noteService', NoteService);


// Factory Example
angularNotify.factory('noteService', function(notificationsArchive) {
	var MAX_LEN = 10;
	var notifications = [];
	
	return {
		push: function(notification) {
			var notificationToArchive;
			var newLen = notifications.unshift(notification);
			if (newLen > MAX_LEN) {
				notificationToArchive = this.notification.pop();
				notificationsArchive(notificationsToArchive);				
			}
		},
	};
		
});

// Provide example
angularNotify.provider('noteService', function() {
	var config = {
		maxLen: 10	
	};
	
	var notifications = [];
	
	return {
		setMaxLen: function(maxLen) {
			config.maxLen = maxLen || config.maxLen;
		},
		
		$get: function(notificationsArchive) {
			return {
				push: function(notification) {
					if (newLen > config.maxLen) {
						
					}
				}
			};
		}
	};
});

var NoteController = function($scope, noteArchive) {
	$scope.noteData = "DataMy " + noteArchive.description;
};
