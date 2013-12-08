/**
 * @author Charlie Calvert
 */

var NoteService = function(noteArchive) { 'use strict';
	this.notesArchive = noteArchive;
	this.MAX_NOTES = 10;
	this.notes = []; 
};

NoteService.prototype.push = function(note) { 'use strict';
	var newLen, notificationToArchive;
	newLen = this.notes.unshift(note);
	if (newLen > this.MAX_NOTES) {
		noteToArchive = this.notes.pop();
		this.notesArchive.archive(noteToArchive);
	}	
};

NoteService.prototype.getNotes = function() { 'use strict';
	return this.notes;
};

