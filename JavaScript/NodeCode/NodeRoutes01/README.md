NodeRoutes01
===========

This program shows how to handle Express Routes.

When you are in the browser, and you can make an ajax call to the client using **$.ajax**, **$.load**,
**$.get** etc. When you make these calls, you generally pass in a URL:

	$("#MyId").load('/getNine');
	
The end part of the URL is called a route. You can also pass that information with a plain URL:

	http://localhost:30025/getNine
	
In either case, the server has to find the **getNine** route and do something with it. In
general, this means that you set up an Express route like this:

	app.get('/getNine', function(request, response) {});
	
Or you might set one up like this, if you want to do a post:

	app.post('/getNine', function(request, response) {});
	
These methods are called when the ajax function is called on the browser, or when the 
appropriate URL is passed in via the address bar.

This program shows how to call and set up these routes, and how to pass information
back and forth between the client and the server.

