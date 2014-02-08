# Script for downloading and installing DropBox on Linux server
# and on other headless Linux boxes that have no GUI frontend.
# You can use dropbox.py to help you manage dropbox.
# I recommend running the script show below from $HOME/bin

dropBoxName=dropbox.tar.gz
wget -O dropbox.py "https://www.dropbox.com/download?dl=packages/dropbox.py"
wget -O $dropBoxName "https://www.dropbox.com/download?plat=lnx.x86"
tar xzf $dropBoxName
if [ ! -e ~/.dropbox-dist/dropboxd ]
then
	mv .dropbox-dist ~/.
else
	echo "I see that /home/$USER/.dropbox-dist already exists."
	echo "I did not expect that. I am going to exit and let you"
	echo "handle this manually."
	exit
fi
~/.dropbox-dist/dropboxd
