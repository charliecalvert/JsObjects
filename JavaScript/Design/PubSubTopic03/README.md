# PubSub Require

This is an example of using the Publish Subscribe 
pattern in JavaScript. The topic objects are found
here:

- [Cowboy](https://github.com/cowboy/jquery-tiny-pubsub)

This example uses requireJs to load in our JavaScript
files. This means we don't need a series of **script**
tags in our HTML. Instead, we use **require** to link
in our JavaScript. In **index.html** we include only one line:

	<script data-main="Source/Main" src="Source/require.js"></script>
	
This links in **Main.js** and **require.js**. **Main.js** in turn 
configures **jquery** and **TinyPubSub**:

	require.config({
	  paths: {
	    "jquery": "http://code.jquery.com/jquery-1.11.0.min",
	    "tinyPubSub": "TinyPubSub"    
	  }
	});

**Main.js** then pulls in **Publisher** and **Subscriber**:

	require(["Subscriber", "Publisher",], function(sub, pub) {

Both **Publisher** and **Subscriber** explicitly pull in **jquery** 
and **TinyPubSub**:

	define(['jquery', 'tinyPubSub'], function() {
	
## Getting Input and Callback

Look at this code:

	var getMessage = function() {
		return {
			sender : 'publisher.privateMethod02',
			value: parseInt($("#input01").val()),
			callback : function(reply, value) {
				$("#message03").html(reply + "\nThe value is now: " + value);				
			}
		};
	};

	var privateMethod02 = function() {
		console.log("Publisher private method called.");
		$.publish('debugDetail03', getMessage());
	};

In **privateMethod02 we publish an event and send some data, including a hardcoded
message and some input from the user. Then in the code that subscribes to the method, 
we use the data that was send, perform a calculation on it, and use the callback
to send back the result:

	function function03(event, customMessage) {
		console.log("Subscriber function02 called.");
		console.log(event);
		var reply = "I got your message: " + customMessage.sender;
		var calculation = customMessage.value + 2;
		customMessage.callback(reply, calculation);
	}