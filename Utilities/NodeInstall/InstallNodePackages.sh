#! /bin/bash

# This script installs commonly used global packages in Charlie's classes
# To install express, karma, etc globally:
# - run npm config as shown below
# - use the -g option as shown below

mkdir ~/npm
npm config set prefix ~/npm

# Essentials
npm install -g karma-cli
npm install -g grunt-cli
npm install -g jasmine-node
npm install -g express-generator
npm install -g nodemon
npm install -g mocha

# Optional
npm install -g cordova
npm install -g yo
npm install -g bower

# Yeoman
npm install -g generator-express
npm install -g generator-angular
npm install -g generator-bootstrap

# Add ~/npm/bin to your path for the life of your bash session:
PATH="$PATH:$HOME/npm/bin"

echo "Add this to the bottom of your .bashrc file:"
echo 'export PATH="$PATH:$HOME/npm/bin"'

