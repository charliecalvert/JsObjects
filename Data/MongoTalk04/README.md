# MongoTalk04

# Updates

- March 1- Added client side unit tests. This is a half way step to a more
complete separation of UI and business rules. Also, we need to make sure
the business rules and Ui don't know so much about one another. But this
current implementation is easy to understand, if you understood the earlier
versions of this program.

Be sure you have installed Bower. On Linux:

	sudo npm install -g bower
	sudo npm install -g grunt-cli

Then run **npm install**.

## Unit Tests

The following describes how to run unit tests on on node applications 
	
## Install Jasmine-Node

	sudo npm install -g jasmine-node
	
You will also want to install request locally:

	npm install request
	
Or

	npm install request --save-dev
	
## Create Route

Create a simple route you want to test:

	app.get('/hello', function(request, response) { 'use strict';
		response.send('Hi there.');
	});
	
## Basic Jasmine-Noded

Now test it by saving the following as **Tests/SimpleSpec.js**:

	var request = require('request');

	describe("A suite", function() {
		it("should respond with hello world", function(done) {
			request("http://localhost:30025/hello", function(error, response, body) {
				expect(body).toEqual("Hi there.");
				done();
			});
		});
	}); 

## Run the test:

Now run start your server running in one shell:

	node Server.js
	
Then open a second shell and run your tests:

	jasmine-node Tests/
	
## PubSub

	{	
		"type":"foo",
		"timeStamp":1393874949067,
		"jQuery210004470331803895533":true,
		"isTrigger":3,
		"namespace":"",
		"namespace_re": null,
		"target":{},
		"delegateTarget":{},
		"currentTarget":{},
		"handleObj": {
			"type":"foo",
			"origType":"foo",
			"guid":1,
			"namespace":""
		}
	}

