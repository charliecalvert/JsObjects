/**
 * @author Charlie Calvert
 */

// Publisher
PubSub.Publisher = ( function() {		

		function Publisher() {			
			$("#privateButton").click(privateMethod);			
			$.publish('debug', 
					{ message: "Publisher Constructor Called" }
			);
		}
		
		var privateMethod = function() {
			$.publish('debugDetail', 'Publisher privateMethod called by Messenger');
		};

		return Publisher;

	}());

$(document).ready(function() {
	new PubSub.Subscriber();
	new PubSub.Publisher();
});

