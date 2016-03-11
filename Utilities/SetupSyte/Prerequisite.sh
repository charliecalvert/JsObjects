#!/bin/sh

# This script has never been tested
git clone git://github.com/rigoneri/syte.git
sudo apt-get install python-setuptools
sudo apt-get install libpq-dev python-dev
sudo easy_install pip
sudo pip install --use-mirrors -r requirements.txt
echo "You should now go here: https://github.com/rigoneri/syte/blob/master/README.md"
