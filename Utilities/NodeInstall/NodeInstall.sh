#! /bin/bash

sudo apt-get install curl
curl -sL https://deb.nodesource.com/setup | sudo bash -
sudo apt-get install -y nodejs

echo Add to .bashrc
echo export NODE_PATH=$NODE_PATH:$HOME/npm/lib/node_modules
#  echo "export NODE_PATH=$NODE_PATH:$HOME/npm/lib/node_modules" >> ~/.bashrc && source ~/.bashrc

