/**
 * @author Charlie Calvert
 */

var angularNotify = angular.module('AngularNotify', []);

// angularNotify.constant(MAX_NOTES, 3);



angularNotify
.controller('NoteController', function ($scope, numberService) { 'use strict';

	var count = 1;
	$scope.noteData = "I'm the Add Numbers Controller";
	$scope.debug = "Debug";
	$scope.number = 0;

	$scope.addNote = function() {
		numberService.push($scope.number);
		$scope.number += count++;
		$scope.debug = numberService.getTotal();
		$scope.archiveCount = 'Archive Total: ' + numberService.getArchiveCount();
	};

	$scope.getNotes = function () {
		return numberService.getNotes();
	};

	$scope.getArchive = function() {
		return numberService.getArchive();
	};

});

// Factory Example
angularNotify.factory('numberService', function(noteArchive) {  'use strict';
	var MAX_NOTES = 3;

	var noteArray = [];

	return {
		push: function(note) {
			var noteToArchive;
			// Add item to beginning of array
			var newLen = noteArray.unshift(note);
			if (newLen > MAX_NOTES) {
				noteToArchive = noteArray.pop();
				noteArchive.archive(noteToArchive);
			}
		},

		getNotes: function() {
			return noteArray;
		},

		getTotal: function() {
			var total = 0;
			for (var i = 0; i < noteArray.length; i++) {
				total += noteArray[i];
			}
			return total;
		},

		getArchiveCount: function() {
			return noteArchive.itemCount();
		},

		getArchive: function() {
			return noteArchive.getArchive();
		},

		description: "I'm from the factory"
	};

});

angularNotify.factory('noteArchive', function() {  'use strict';

	var description = "noteArchive text";
	var archive = [];

	return {
		archive: function(item) {
			archive.push(item);
		},

		itemCount: function() {
			var total = 0;
			for (var i = 0; i < archive.length; i++) {
				total = total + archive[i];
			}
			return total;
		},

		getArchive: function() {
			return archive;
		}
	};
});


