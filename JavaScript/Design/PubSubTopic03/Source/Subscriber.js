/**
 * @author Charlie Calvert
 */

define(['jquery', 'tinyPubSub'], function() {

	/*
	 * The point is that there is no reference to Publisher
	 * in this module and yet it can recieve messages from
	 * it
	 */
	function subscriber() {
		console.log("Subscriber constructor called.");
		$.subscribe('debugDetail01', function01);
		$.subscribe('debugDetail02', function02);
		$.subscribe('debugDetail03', function03);
	}

	function function01(event, customMessage) {
		console.log("Subscriber function01 called.");
		console.log(event);
		$("#message01").html(customMessage.message);
	}

	function function02(event, customMessage) {
		console.log("Subscriber function02 called.");
		console.log(event);
		var reply = "I got your message: " + customMessage.sender;
		customMessage.callback(reply);
	}
	
	function function03(event, customMessage) {
		console.log("Subscriber function02 called.");
		console.log(event);
		var reply = "I got your message: " + customMessage.sender;
		var calculation = customMessage.value + 2;
		customMessage.callback(reply, calculation);
	}

	return {subscriber: subscriber};

});
