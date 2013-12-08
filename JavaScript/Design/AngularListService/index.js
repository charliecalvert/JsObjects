/**
 * @author Charlie Calvert
 */

var angularNotify = angular.module('AngularNotify', [])
.controller('NoteController', function ($scope, noteService) { 'use strict';
	var base = "Test Note";
	$scope.noteData = "NoteController is Running";
	$scope.totalNotes = 0;
	$scope.note = base + ' ' + $scope.totalNotes++;


	$scope.addNote = function () {
		noteService.push($scope.note);
		$scope.note = base + ' '  + $scope.totalNotes++;
	};

	$scope.getNotes = function () {
		return noteService.getNotes();
	};
}).service('noteService')
.value('noteArchive', new NoteArchive());

