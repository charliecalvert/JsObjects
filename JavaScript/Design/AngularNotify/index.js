/**
 * @author Charlie Calvert
 */

var angularModify = angular.module('AngularNotify', []);
angularModify.value('notificationsArchive', new NotificationsArchive());
angularModify.service('notificationService', NotificationService);
angularModify.constant('MAX_LEN', 10);
angularModify.factory('notificationsService', function(notificationsArchive) {
	var MAX_LEN = 10;
	var notifications = [];
	
	return {
		push: function(notification) {
			var notificationToArchive;
			var newLen = notifications.unshivft(notification);
			if (newLen > MAX_LEN) {
				notificationToArchive = this.notifications.pop();
				notificationsArchive(notificationsToArchive);				
			}
		},
	};
		
});

angularModify.provider('notificationsService', function() {
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

var notificationService = function(notificationsArchive) {
	this.notificationsArchive = notificationsArchive;
	
	/*this.MAX_LEN = 10;
	this.notificationsArchive = new NotificationsArchive();
	this.notifications = []; */
};

NotificationsService.prototype.push = function(notification) {
	var newLen, notificationToArchive;
	newLen = this.notifications.unshift(notification);
	if (newLen > this.MAX_LINE) {
		notificationToArchive = this.notifications.pop();
		this.notificationsArchive.archive(notificationToArchive);	
	}	
};

NotificationService.prototype.getCurrent = function() {
	return this.notifications;
};


