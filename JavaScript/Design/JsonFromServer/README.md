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

