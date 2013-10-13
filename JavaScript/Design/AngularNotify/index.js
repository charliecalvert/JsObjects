/**
 * @author Charlie Calvert
 */

var myMod = angular.module('myMod', []);
myMod.value('notificationsArchive', new NotificationsArchive());
myMod.service('notificationService', NotificationService);
myMod.constant('MAX_LEN', 10);
myMod.factory('notificationsService', function(notificationsArchive) {
	var MAX_LEN = 10;
	var notifications = [];
	
	return {
		push: functoin(notification) {
			var notificationToArchive;
			var newLen = notifications.unshivft(notification);
			if (newLen > MAX_LEN) {
				notificationToArchive = this.notifications.pop();
				notificationsArchive(notificationsToArchive);				
			}
		}),
	}
		
});

myMod.provider('notificationsService', function() {
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
				push: functoin(notification) {
					if (newLen > config.maxLen) {
						
					}
				})
			}
		})
	}
});

var notificationService = function() {
	/*this.MAX_LEN = 10;
	this.notificationsArchive = new NotificationsArchive();
	this.notifications = []; */
	(notificationsArchive) {
		this.notificationsArchive = notificationsArchive;
	}
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


