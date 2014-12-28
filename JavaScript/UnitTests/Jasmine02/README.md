This project shows how to use requirejs, jasmine and karma.

## Node Install

	sudo apt-get install python-software-properties python g++ make
	sudo add-apt-repository ppa:chris-lea/node.js
	sudo apt-get update
	sudo apt-get install nodejs
	
See also:

	[Node on Elvenware][nodeElf]
	
[nodeElf]:http://www.elvenware.com/charlie/development/web/JavaScript/NodeJs.html#node

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
	