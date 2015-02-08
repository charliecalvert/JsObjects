# Jasmine02

This project shows how to use requirejs, jasmine-node and karma. 

To run this project, do one of the three things:

- Use grunt to run karma: grunt test
- Use karma without grunt: **./RunKarma.sh**
- Use the Jasmine library and display in an HTML file: node TestRunner.js

Here are the various requirejs files:

- When using Karma, requirejs uses **Source/MainKarma.js**
- When using HTML files, requirejs uses **MainTest.js**
- There is an index.html file that has nothing to do with the tests. It uses **Main.js**.

There are numerous ways to run karma and grunt.

- Run both jshint and karma: **grunt test**
- Just jshint: **grunt jshint**
- Just karma in interactive mode: **karma start** or **RunKarma.sh**
- Just karma tests and exit: **grunt karma**

If you run karma in interactive mode you can edit your files and
see the results of each change. If you run and exit, you see
if your tests and code, in the current state, all pass.  

## Start a web server

	python3 -m http.server 30025
	
One the server is up and running, just browse to: <http://localhost:30025>

## Global installs

You will want to install karma, grunt and jasmine-node globally.

If on Linux, first do this:

	npm config set prefix ~/npm
	
Then add this to your .bashrc:

	export PATH="$PATH:$HOME/npm/bin"
	
To install karma globally:

	npm install -g karma-cli
	npm install -g grunt-cli
	npm install -g nodemon
	
