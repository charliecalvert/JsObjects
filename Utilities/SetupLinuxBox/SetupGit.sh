GIT_DIR=~/Git
JSOBJECTS_DIR=JsObjects
PRESIDENT_DIR=~/president

if [ ! -d "$GIT_DIR" ]; then
	mkdir $GIT_DIR
fi

cd $GIT_DIR

if [ ! -d "$JSOBJECTS_DIR" ]; then
	git clone git://github.com/charliecalvert/JsObjects.git
fi

if [ ! -L "$PRESIDENT_DIR" ]; then
	ln -s ~/Git/JsObjects/JavaScriptObjects/NodeCode/Presidents/ $PRESIDENT_DIR
fi

cd $PRESIDENT_DIR
nodejs server.js
