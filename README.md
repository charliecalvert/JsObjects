# JsObjects

Code by Charlie Calvert for Elvenware.

Various JavaScript, HTML, CSS, Node, and Python Projects covering 
basic programming issues. To install a readonly copy:

    git clone http://github.com/charliecalvert/JsObjects.git

I have many different example programs stored in this 
repository. Note especially the Utilities and JavaScript
directories. And many other things as well.

All the code in JsObjects is released under the MIT license. 

## Core Setup

Learn about it here: [Core Setup](http://www.elvenware.com/charlie/os/linux/ConfigureLinux.html#core-setup)

## Node Install

On Windows, run the install found at the [nodejs](https://nodejs.org/) site.

On Linux:

Learn about it here: [Node Install](http://www.elvenware.com/charlie/os/linux/ConfigureLinux.html#install-node)

More information:

- <http://www.elvenware.com/charlie/development/web/JavaScript/NodeJs.html#node>


## Global installs

You will want to install express, karma, grunt, nodemon and jasmine-node globally.

If on Linux, first do this so that you don't have to use sudo:

    mkdir ~/npm
    npm config set prefix ~/npm

Then add this to the bottom of your .bashrc and restart or source bash:

    export PATH="$PATH:$HOME/npm/bin"

You can now install express, karma, etc globally without using sudo:

    npm install -g karma-cli
    npm install -g grunt-cli
    npm install -g jasmine-node
    npm install -g express-generator
    npm install -g nodemon
    npm install -g mocha

If on Windows, you can issue the above commands without worrying about
**sudo**. 
