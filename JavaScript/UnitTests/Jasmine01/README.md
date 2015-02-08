# Jasmine01

This project shows how to use requirejs, jasmine-node and karma. 

To run this project, do one of the three things:

- Use grunt to run karma: grunt test

Here are the various requirejs files:

- When using Karma, requirejs uses **Source/MainKarma.js**

There are numerous ways to run karma and grunt.

- Run both jshint and karma: **grunt test**
- Just jshint: **grunt jshint**
- Just karma: **karma start**
- Just karma tests: **grunt karma**

If you run karma in interactive mode (single run = false) you can edit 
your files and see the results of each change. If you run and exit, you 
see if your tests and code, in the current state, all pass.  


## Global installs

You will want to install karma, grunt and jasmine-node globally.

If on Linux, first do this:

	npm config set prefix ~/npm

Then add this to your .bashrc:

	export PATH="$PATH:$HOME/npm/bin"
	
To install karma globally:

	npm install -g karma-cli
	npm install -g grunt-cli

