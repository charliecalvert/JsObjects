/**
 * @author Charlie Calvert
 */

// Publisher
PubSub.Publisher = ( function() {		

		function Publisher() {
			new PubSub.Subscriber();
			$("#privateButton").click(privateMethod);
			$.Topic('debug').publish('Publisher constructor Called');
		}
		
		var privateMethod = function() {
			$.Topic('debugDetail').publish('Publisher privateMethod called by Pub Sub');
		};

		return Publisher;

	}());

$(document).ready(function() {
	new PubSub.Publisher();
});

