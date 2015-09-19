#! /bin/bash

sudo apt-get install curl

curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.26.1/install.sh | bash

source ~/.bashrc

nvm install stable

