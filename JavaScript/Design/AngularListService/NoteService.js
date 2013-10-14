/**
 * @author Charlie Calvert
 */

var NoteService = function(noteArchive) {
	this.notesArchive = noteArchive;
	this.MAX_NOTES = 10;
	this.notes = []; 
};

NoteService.prototype.push = function(note) {
	var newLen, notificationToArchive;
	newLen = this.notes.unshift(note);
	if (newLen > this.MAX_NOTES) {
		noteToArchive = this.notes.pop();
		this.notesArchive.archive(noteToArchive);	
	}	
};

NoteService.prototype.getNotes = function() {
	return this.notes;
};

