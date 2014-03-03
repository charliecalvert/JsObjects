/**
 * @author Charlie Calvert
 */

var PubSub = {};

PubSub.Subscriber = ( function() {

		/* 
		 * The point is that there is no reference to Publisher
		 * in this module and yet it can recieve messages from
		 * it
		 */
		function Subscriber() {
			$.subscribe('debug', function01);
			$.subscribe('debugDetail', function02);			
		}

		function function01(a, b) {
			console.log(a);
			$("#message01").html(b.message);
		}

		function function02(a, b) {
			console.log(a);
			$("#message02").html(b);
		}

		return Subscriber;

	}());
