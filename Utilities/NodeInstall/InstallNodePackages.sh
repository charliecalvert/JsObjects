#! /bin/bash

# This script installs commonly used global packages in Charlie's classes
# To install express, karma, etc globally:
# - run npm config as shown below
# - use the -g option as shown below

function message {
    echo
    echo =======================
    echo $1
    echo =======================
    echo
}

DIRECTORY=~/npm

message "Checking NPM Directory"

if [ ! -d "$DIRECTORY" ]; then    
    echo Creating $DIRECTORY
    mkdir $DIRECTORY
else
    echo $DIRECTORY already exists
fi

message "Checking NPM Prefix"

npm config set prefix ~/npm

echo npm home directory is now:
npm get prefix

function testOne {
    if [ -d "$DIRECTORY/lib/node_modules/$1" ]; then
	echo -e "\e[92m$1 installed\e[0m"
    else
	echo -e "\e[91m$1 not installed\e[0m"
    fi 
}

function test {
	echo
        echo "========================================"
	echo "Unit Tests"
	testOne mocha
	testOne jasmine-node
	echo "Yeoman"
	testOne yo
	testOne generator-express
	testOne generator-angular 
	testOne generator-bootstrap
	testOne generator-mocha
	echo "Essential"
	testOne karma-cli
	testOne grunt-cli
	testOne express-generator
	testOne nodemon
	testOne bower
	echo "Optional"
	testOne jade
	testOne cordova
	echo "========================================"
    	echo
	read -n 1 -s
}

function essentials() {
    message "Installing Essentials"
    npm install -g karma-cli
    npm install -g grunt-cli
    npm install -g express-generator
    npm install -g nodemon
    npm install -g bower
}

function unitTests {
    message "Installing Unit Test related code"
    npm install -g jasmine-node
    npm install -g mocha
}

function optional {
    message "Installing Optional packages"
    npm install -g cordova
    npm install -g jade
}

function yeoman {
    message "Installing Yeoman and related files"
    npm install -g yo
    npm install -g generator-express
    npm install -g generator-angular
    npm install -g generator-bootstrap
    npm install -g generator-mocha
}

while true; do
    message "Menu"
    echo "e) Essentials"
    echo "o) Optional"
    echo "t) Test"
    echo "u) Unit Tests"
    echo "y) Yeoman"
    echo "x) Exit"
    echo
    read -p "Please make a selection: " eotuyx
    case $eotuyx in
        [Ee]* ) essentials; continue;;
        [Oo]* ) optional; continue;;
        [Tt]* ) test grunt-cli; continue;;
        [Uu]* ) unitTests; continue;;
        [Yy]* ) yeoman; continue;;
        [Xx]* ) break;;
        * ) echo "Please answer with e, o, u y or x.";;
    esac
done


# Add ~/npm/bin to your path for the life of your bash session:
PATH="$PATH:$HOME/npm/bin"

echo
echo "========================================"
echo "If you have not done so already, please" 
echo "Add this to the bottom of your .bashrc file:"
echo
echo 'export PATH="$PATH:$HOME/npm/bin"'
echo "========================================"

