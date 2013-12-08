/**
 * @author Charlie Calvert
 */

var NoteService = function(notificationsArchive) { 'use strict';
	this.notificationsArchive = notificationsArchive;
	
	/*this.MAX_LEN = 10;
	this.notificationsArchive = new NotificationsArchive();
	this.notifications = []; */
};

NoteService.prototype.push = function(notification) { 'use strict';
	var newLen, notificationToArchive;
	newLen = this.notifications.unshift(notification);
	if (newLen > this.MAX_LINE) {
		notificationToArchive = this.notifications.pop();
		this.notificationsArchive.archive(notificationToArchive);	
	}	
};

NoteService.prototype.getCurrent = function() { 'use strict';
	return this.notifications;
};

