#! /bin/bash

GIT_DIR=~/Git
HISTORY_CODE_DIR=historycode
HISTORY_CODE_LINK=~/HistoryCode

if [ ! -d "$GIT_DIR" ]; then
	mkdir $GIT_DIR
fi

cd $GIT_DIR

if [ ! -d "$HISTORY_CODE_DIR" ]; then
	git clone https://ccalvert@bitbucket.org/ccalvert/historycode.git
fi

if [ ! -L "$HISTORY_CODE_LINK" ]; then
	ln -s ~/Git/historycode/Presidents/ $HISTORY_CODE_LINK
fi

cd $HISTORY_CODE_LINK
npm install
nodejs Server.js
