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
		$.subscribe('debug', function01);
		$.subscribe('debugDetail', function02);
	}

	function function01(event, customMessage) {
		console.log("Subscriber function01 called.");
		console.log(event);
		$("#message01").html(customMessage.message);
	}

	function function02(event, customMessage) {
		console.log("Subscriber function02 called.");
		console.log(event);
		$("#message02").html(customMessage);
	}

	return {subscriber: subscriber};

});
