#!/bin/sh

sudo apt-get install erlang

GIT_DIR=~/git

if [ ! -d "$GIT_DIR" ]; then
	/bin/mkdir $GIT_DIR
fi

cd $GIT_DIR
git clone git://github.com/benoitc/erica.git
cd erica
make
make install

# build an app
WORK_DIR=~/dev
APP_DIR=goober

if [ ! -d "$WORK_DIR" ]; then
	/bin/mkdir $WORK_DIR
fi

cd ~/$WORK_DIR
if [ ! -d "$APP_DIR" ]; then
	mkdir $APP_DIR
	cd $APP_DIR
	erica create-webapp
	cd myapp
	erica push http://127.0.0.1:5984/myapp
fi