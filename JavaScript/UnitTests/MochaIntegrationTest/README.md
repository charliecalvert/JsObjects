# Mocha Integration Tests

This example shows two things:

- How to write integration tests
- How to insert HTML into a mocha test

Note that in our tests we never click (trigger) the <strong>Get Scientists</strong> button
because we have not provided a way to know when it returns with our JSON. We can however,
call the public method of <strong>Control.js</strong> called <strong>getScientists</strong>.
That method can be usefully called by our tests because we can know when it returns.
In particular, we pass it a callback which is called when it retrieves the JSON we requested.

## Important Files

- public/js/Control.js
- test/index.html
- test/spec/test.js
- JadeToHtml
- test/MainCode.html

In particular, we use JadeToHtml to create the HTML that we manually insert into MainCode.html.
We then write code in our test to inject **MainCode.html** into a **DIV** of **test/index.html**.

## The *done* Parameter

In some of our tests we use the done parameter:

```
beforeEach(function(done) {
	$('#mainArea').load('MainCode.html', function() {
		done();
	});
});
```

This code is designed to ensure that our tests won't run until the system has [asynchronously](http://searchnetworking.techtarget.com/definition/asynchronous) loaded **MainCode.html**. Some of our tests may rely on that file, so we wait until it is loaded. Here is a more detailed overview of the process we are engaged in:

- We want to use the jQuery ajax based [**$.load**](http://api.jquery.com/load/) method to asynchronously load an HTML file.
- We want the file loaded before each of our tests is run
- We don't know how long it will take to load the file, so we need to wait for it to load. 
- The code is designed to guarantee that our tests won't run until the file is loaded.

Let's break it out even further: 

- The **beforeEach** method is part of mocha. We use it when we have code we want to run **beforeEach** of our tests.
- In this **beforeEach** method we want to load into the HTML DIV with the ID of **mainArea** the contents of **MainCode.html**. 
- We don't know how long it is going to take to load **MainCode.html**. So we load it with an async call such as **$.ajax**, **$.getJSON** or **$.load**. 
- We ask **$.load** to load the HTML and to execute our simple callback when it is done. 

In cases like this, we are usually loading a partial HTML file that does not include the HTML and BODY tags. The point is that we are inserting a chunk of HTML into an existing page. The existing page already has HTML and BODY tags. We just need to insert a bit of HTML, perhaps the contents of a single DIV.

