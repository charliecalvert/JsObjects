# Title

This project shows how to use requirejs, jasmine and karma.

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
	