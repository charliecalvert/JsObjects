#!/bin/bash

# ---------------------------------------------------
# This script needs to have execute permissions
#
# Copy files from a local directory to your web site.
# for instance this script can help you copy files:
#   * from /home/user/temp/site to these directories
#   *   /var/www/simple
#   *   /usr/lib/cgi/bin/simple
# You may set the variable called DESTDIR
#   DESTDIR: A directory relative to your /var/www and /usr/lib/cgi-bin
#   For instance /var/www/simple where simple is the word you supply
#
# The files you want to deploy should be placed in two subdirectories:
#   *  /html
#   *  /scripts
# The first should contain all your HTML files 
# The second should contain all your Python scripts
# This script will handle copying subdirectories of html and cgi-bin
#
# This script assumes the standard crlf.py script is in !/bin and 
# that it has execute permissions. crlf is part of andelf and
# can be found in the directory ../andelf/Python/PythonUtils
# ---------------------------------------------------

# DESTDIR: The folder where you want to place files relative to 
#    * /var/www 
#    * /usr/lib/cgi-bin
DESTDIR="Simple"
DIRECTORY_CGI=scripts
DIRECTORY_HTML=html

HTMLDIR="/var/www"
CGIDIR="/usr/lib/cgi-bin"
HTMLDEST=$HTMLDIR/$DESTDIR/
CGIDEST=$CGIDIR/$DESTDIR/

echo "HTML Destination = " $HTMLDEST
echo "CGI Destination = " $CGIDEST

dirCopy() 
{
	echo "DirStuff Called"
	if [ -d $2 ]; then
		echo "Copying files to: " $2
		sudo cp -R $1/. $2/.
	else
		echo "No " $2
	fi
}

dirMake()
{
	if [ -d $1 ]; then
		echo $1 "exists. We will remove it"
		sudo rm -R $1
	fi

	echo "Creating " $1
	sudo mkdir $1	
}

# Unzip our zip file
# unzipFiles $DIRECTORY $1

# Now we need to set up our destination directories
dirMake $HTMLDEST
dirMake $CGIDEST

# Now we copy files to our destination directories
dirCopy $DIRECTORY_HTML $HTMLDEST
dirCopy $DIRECTORY_CGI $CGIDEST
# And set up the permissions
echo Setting up permissions for Python scripts
find $CGIDEST -type f -name *.py | xargs sudo chmod +x
echo Checking for CRLF issues
find $CGIDEST -type f -name *.py | xargs sudo python ~/bin/crlf.py
echo Setting up permissions for .boto file
sudo chmod 666 $CGIDEST.boto
echo Test by going to http://localhost/Simple/SimpleDb.html

