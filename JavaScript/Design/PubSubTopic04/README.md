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