/**
 * @author Charlie Calvert
 */

var angularNotify = angular.module('AngularNotify', []);

angularNotify.controller('NoteController', function($scope, noteService) {

	var count = 1;
	$scope.noteData = "I'm the Note Controller";
	$scope.debug = "Debug";
	$scope.note = "Test 0";

	$scope.addNote = function() {
		noteService.push($scope.note);
		$scope.note = 'Test' + ' ' + count++;
		$scope.archiveCount = 'ArchiveCount: ' + noteService.getArchiveCount();
	};

	$scope.getNotes = function() {
		return noteService.getNotes();
	};

	$scope.getArchive = function() {
		return noteService.getArchive();
	};

});

// Provide example to show ability to configure
angularNotify.provider('noteService', function() {
	var config = {
		maxNotes : 3
	};

	var noteArray = [];

	return {
		setMaxLen : function(maxLen) {
			config.maxLen = maxLen || config.maxLen;
		},

		$get : function(noteArchive) {
			return {
				push : function(note) {
					var noteToArchive;
					// Add item to beginning of array
					var newLen = noteArray.unshift(note);
					if (newLen > config.maxNotes) {
						noteToArchive = noteArray.pop();
						noteArchive.archive(noteToArchive);
					}
				},
				
				getNotes : function() {
					return noteArray;
				},

				getArchiveCount : function() {
					return noteArchive.itemCount();
				},

				getArchive : function() {
					return noteArchive.getArchive();
				},

				description : "I'm from the factory"
			};
		}
	};
}).config(function(noteServiceProvider) {
	noteServiceProvider.setMaxLen(5);
});

angularNotify.factory('noteArchive', function() {

	var description = "noteArchive text";
	var archive = [];

	return {
		archive : function(item) {
			archive.push(item);
		},

		itemCount : function() {
			return archive.length;
		},

		getArchive : function() {
			return archive;
		}
	};
});
