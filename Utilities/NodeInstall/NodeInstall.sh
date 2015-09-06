#! /bin/bash

sudo apt-get install curl

# Optionally uncomment the canonical setup script for Node.js v0.10
# If you do this, then comment out the v0.12 script below
# Details are here: https://nodesource.com/blog/nodejs-v012-iojs-and-the-nodesource-linux-repositories
# curl -sL https://deb.nodesource.com/setup | sudo bash -

# The new setup script name for Node.js v0.12
curl -sL https://deb.nodesource.com/setup_0.12 | sudo bash -

# Install node
sudo apt-get install -y nodejs

echo Add to .bashrc
echo export NODE_PATH=$NODE_PATH:$HOME/npm/lib/node_modules
#  echo "export NODE_PATH=$NODE_PATH:$HOME/npm/lib/node_modules" >> ~/.bashrc && source ~/.bashrc

