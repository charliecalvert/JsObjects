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
			$.Topic('debug').subscribe(function01);
			$.Topic('debugDetail').subscribe(function02);			
		}

		function function01(a) {
			console.log(a);
			$("#message01").html(a);
		}

		function function02(a) {
			console.log(a);
			$("#message02").html(a);
		}

		return Subscriber;

	}());
