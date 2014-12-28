JsObjects
========

Various JavaScript, HTML, CSS, Node, and Python Projects covering 
basic programming issues.

I have many different example programs stored in this 
repository. Note especially the Utilities and JavaScript/Objects
directories. And many other things as well.

All the code in JsObjects is released under the MIT license. 

## Node Install

	sudo apt-get install python-software-properties python g++ make
	sudo add-apt-repository ppa:chris-lea/node.js
	sudo apt-get update
	sudo apt-get install nodejs
	
See also Node on Elvenware:

- <http://www.elvenware.com/charlie/development/web/JavaScript/NodeJs.html#node>


## Global installs

You will want to install express, karma, grunt and jasmine-node globally.

If on Linux, first do this so that you don't have to use sudo:

	npm config set prefix ~/npm
	
Then add this to your .bashrc:

	export PATH="$PATH:$HOME/npm/bin"
	
To install express, karma, etc globally:

	npm install -g karma-cli
	npm install -g grunt-cli
	npm install -g jasmine-node
	npm install -g express-generator
