# Make sure ~/Source directory exists
cd
SOURCE_DIR=~/Source
if [ ! -d "$SOURCE_DIR" ]; then
	/bin/mkdir $SOURCE_DIR
	/bin/chmod 755 $SOURCE_DIR
fi

cd Source

TEMPAPP_DIR=~/Source/TempApp
if [ ! -d "$TEMPAPP_DIR" ]; then
	/bin/mkdir $TEMPAPP_DIR
	/bin/chmod 755 $TEMPAPP_DIR
fi

cd TempApp
yo webapp
bower install underscore
grunt
