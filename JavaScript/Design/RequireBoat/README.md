# Require Boat

This is a very simple example showing how to get up to
speed with require.

In **index.html** we link in **Main** and **require.js**:

	<script data-main="Source/Main" src="Source/require.js"> </script>
	
**Main** then configures **jquery**:

	require.config({
	  paths: {
	    "jquery": "http://code.jquery.com/jquery-1.11.0.min",     
	  }
	});

Then we create a simple module called **Boat** which is
found in **Boat.js**:

	define(['jquery'], function() { 'use strict';
	
		function describe() {  
			$("#list").append("<li>I'm a boat.</li>");
		};	
		
		return {describe: describe};
	});

This code says that our **Boat** module requires **jquery**. It
then defines a simple function which adds an item to a list. Finally
we return a link to the function:

	return {describe: describe};
	
Back in **Main**, we can now link in **Boat** and call **Boat.describe:**

	require(["Boat"], function(boat) {
		boat.describe();
	});
	
The first **Boat**, the one in the array, links in the **Boat.js**
module. For this we get a reference to a **boat** which is passed
as a parameter to our anonymous function. Finally, we use the 
reference to call the describe method:

	boat.describe();