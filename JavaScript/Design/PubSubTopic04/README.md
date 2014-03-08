# PubSub Topic 01

This is an example of using the Publish Subscribe 
pattern in JavaScript. The topic objects are found
here:

- [Cowboy](https://github.com/cowboy/jquery-tiny-pubsub)

This example uses requireJs to load in our JavaScript
files. In index.html we include only one line:

	<script data-main="Source/Main" src="Source/require.js"></script>
	
This links in **Main.js**, which in turn configures **jquery** and **TinyPubSub**.
**Main.js** then pulls in **Publisher** and **Subscriber**:

	require(["Subscriber", "Publisher",], function(sub, pub) {

Both **Publisher** and **Subscriber** explicitly pull in **jquery** 
and **TinyPubSub**:

	define(['jquery', 'tinyPubSub'], function() {