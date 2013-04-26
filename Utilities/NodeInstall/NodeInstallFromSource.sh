#!/bin/sh

GIT_DIR=~/Git

sudo apt-get update
sudo apt-get -y upgrade
sudo apt-get -y install git

if [ ! -d "$GIT_DIR" ]; then
	mkdir $GIT_DIR
fi

cd $GIT_DIR

git clone https://github.com/joyent/node.git
cd node
git checkout v0.10.4 
sudo apt-get -y install build-essential
# sudo apt-get -y install gcc
./configure && make && sudo make install