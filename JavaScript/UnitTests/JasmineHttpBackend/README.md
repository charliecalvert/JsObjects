Json From Server
===========

This sample code shows how to:

- Load JSON data using Angular
- Test the load method using Jasmine
- Use httpBackend to mock the loading of the JSON data
- Run Karma to give you continuous feedback as you edit your code and tests

Portions of this example depend on NodeJs. You can run the core
example without Node in an Web Server, but some of the code, such
as the Karma server, depend on NodeJs.

- [Home page for Node Js](http://nodejs.org/)

Use httpBackend
----------------

Jasmine wants you to mock up methods that access other services, 
such as HTTP or database requests. Here are some examples of how 
to do it with $HttpBackend. When checking whether you load a JSon file, you write code like this:

	var $httpBackend = null;

	beforeEach(inject(function(_$httpBackend_) {
		$httpBackend = _$httpBackend_;
	}));

	afterEach(function() {
		$httpBackend.verifyNoOutstandingExpectation();
		$httpBackend.verifyNoOutstandingRequest();
	});

	it("Test load json hitPoints", function() {
		$httpBackend.expectGET('data.json').respond({
			"name": "NPC01",
			"hitPoints": 37,
			"damage": 5});
		myController.loadJson();
		$httpBackend.flush();
		expect(myController.data.hitPoints).toEqual(37);
	});

Start Karma
-----------

Karma will give you continuous feedback on your code by running
your unit tests every time you modify a file.

- Be sure Karma is installed globally: $ npm install -g karma
- Install the dependencies by processing package.json: $ npm install
- Run Karma: karma start

Note that when karma starts, it automatically process karma.conf.js. 
There is no need to modify karma.conf.js, but you should be aware 
that the files that will be tested are listed in it starting 
around line 11:

```
files: [   
      'angular.js',
      'angular-mocks.js',
      'angular-resource.js',            
      'index.js',
      'TestJsonLoader.js'
    ],
``` 

- [Karma home page](https://github.com/karma-runner/karma)

