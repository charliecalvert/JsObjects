Simple Buttons
==============

Respond to clicks on buttons or links.

We have:

* index.html
* jquery.js
* index.js

A button and link are clicked and a response is sent from
index.js back to the HTML file where the link and button
reside.

Your HTML might look like this:

~~~~
	<!DOCTYPE html>
	<html>
	<head>
		<title>Simple Buttons - Calvert</title>
		<script src="jquery.js"></script>
		<script src="index.js"></script>
	</head>
	<body>
		<h1>jQuery: Respond to Button and Link Clicks</h1>
		<button id=button01>Button 01</button>
		<p><a id="link01" href="#">Link01</a></p>
		<p id="data01">Click the button or link.</p>
	</body>
	</html>
~~~~

Your JavaScript might look like this:

~~~~
	var linkClick = function() {
		$("#data01").html("Link clicked");
	};

	var buttonClick = function() {
		$("#data01").html("Button Clicked");
	};


	$(document).ready(function() { 
		$("#link01").click(linkClick);
		$("#button01").click(buttonClick);
	});
~~~~

The code in document.ready links the buttons to the linkClick and buttonClick
functions. The functions place data in a paragraph element when the button or
href are clicked.
