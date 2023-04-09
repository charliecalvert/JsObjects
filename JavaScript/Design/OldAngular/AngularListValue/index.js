/**
 * @author Charlie Calvert
 */

var angularNotify = angular.module('AngularNotify', ['noteArchive']);

// angularNotify.constant('MAX_LEN', 3);

// Value objects
// Value Objects cannot depend on another service. There is no place to do that.
angularNotify.value('noteArchive', new NoteArchive());

/* Service Example
angularNotify.service('noteService', NoteService);


// Factory Example
angularNotify.factory('noteService', function(noteArchive) {
	var MAX_LEN = 3;
	var noteArray = [];
	
	return {
		push: function(notification) {
			var noteToArchive;
			// Add item to beginning of array
			var newLen = noteArray.unshift(notification);
			if (newLen > MAX_LEN) {
				notificationToArchive = noteArray.pop();
				noteArchive(noteToArchive);				
			}
		},
		
		description: "I'm from the factory"
	};
		
});

// Provide example
angularNotify.provider('noteService', function() {
	var config = {
		maxLen: 3	
	};
	
	var noteArray = [];
	
	return {
		setMaxLen: function(maxLen) {
			config.maxLen = maxLen || config.maxLen;
		},
		
		$get: function(notificationsArchive) {
			return {
				push: function(notification) {
					if (newLen > config.maxLen) {
						notificationToArchive = noteArray.pop();
						notificationsArchive(notificationsToArchive);	
					}
				}
			};
		},
		
		description: "I'm from the provider"
	};
}); */

var NoteController = function($scope, noteArchive) {
    'use strict';
    $scope.noteData = 'DataMy ' + noteArchive.description;
};
