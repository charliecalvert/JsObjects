JsObjects
========

Code by Charlie Calvert for Elvenware under the MIT License.

Various JavaScript, HTML, CSS, Node, and Python Projects covering 
basic programming issues. To install a readonly copy:

    git clone http://github.com/charliecalvert/JsObjects.git

I have many different example programs stored in this 
repository. Note especially the Utilities and JavaScript/Objects
directories. And many other things as well.

All the code in JsObjects is released under the MIT license. 

## Node Install

On Windows, run the install found at the [nodejs](https://nodejs.org/) site.

On Linux:

    sudo apt-get install curl
    curl -sL https://deb.nodesource.com/setup | sudo bash -
    sudo apt-get install -y nodejs

See also Node on Elvenware:

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
