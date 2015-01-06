#! /bin/bash

# This script installs commonly used in Charlie's classes
mkdir ~/npm
npm config set prefix ~/npm

# Then add this to the bottom of your .bashrc:
# export PATH="$PATH:$HOME/npm/bin"

# For now  we will do this:
PATH="$PATH:$HOME/npm/bin"

# To install express, karma, etc globally:
npm install -g karma-cli
npm install -g grunt-cli
npm install -g jasmine-node
npm install -g express-generator
npm install -g nodemon

echo "Add this to the bottom of your .bashrc file:"
echo 'export PATH="$PATH:$HOME/npm/bin"'
