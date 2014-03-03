/**
 * @author Charlie Calvert
 */

// Publisher
PubSub.Publisher = ( function() {		

		function Publisher() {
			new PubSub.Subscriber();
			$("#privateButton").click(privateMethod);			
			$.publish('debug', { message: "Publisher Constructor Called" });
		}
		
		var privateMethod = function() {
			$.publish('debugDetail', 'Publisher privateMethod called by Messenger');
		};

		return Publisher;

	}());

$(document).ready(function() {
	new PubSub.Publisher();
});

