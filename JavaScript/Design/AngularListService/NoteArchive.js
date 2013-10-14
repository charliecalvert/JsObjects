/**
 * @author Charlie Calvert
 */
angular.module('noteArchive', []);
 
var NoteArchive = function() {
	this.notes = [];

	this.archive = function(item) {
		this.notes.push(item);
	};

 	
 	this.description = "noteArchive text";
 };
 