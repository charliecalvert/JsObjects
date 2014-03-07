/**
 * @author Charlie Calvert
 */

// Publisher
PubSub.Publisher = (function() { 'use strict';

	function Publisher() {
		$("#privateButton").click(privateMethod);
		var event = {
			message : 'Publisher constructor Called',
			acknowledge : function(value) {
				$("#response").html(value);
			}
		};
		$.Topic('debug').publish(event);
	}

	var privateMethod = function() {
		$.Topic('debugDetail').publish(
				'Publisher privateMethod called by Pub Sub');
	};

	return Publisher;

}());

$(document).ready(function() {
	new PubSub.Subscriber();
	new PubSub.Publisher();
});
