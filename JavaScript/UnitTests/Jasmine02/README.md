# Title

This project shows how to use requirejs, jasmine-node and karma. 

To run this project, do one of the three things:

- Use karma: ./RunKarma.sh
- Use jasmine-node with requirejs support: /RunWithRequireJs
- Use the Jasmine library and display in an HTML file

When using Karma, requirejs uses Source/MainKarma.js
When using jasmine node, requirejs uses Spec/LoadTests.spec.js
When using HTML files, requirejs uses Main.js

## Start a web server

	python3 -m http.server 30025

## Global installs

You will want to install karma, grunt and jasmine-node globally.

If on Linux, first do this:

	npm config set prefix ~/npm
	
Then add this to your .bashrc:

	export PATH="$PATH:$HOME/npm/bin"
	
To install karma globally:

	npm install -g karma-cli
	npm install -g grunt-cli
	npm install -g jasmine-node
	