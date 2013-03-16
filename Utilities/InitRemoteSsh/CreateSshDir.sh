SSH_DIR=~/.ssh


if [ ! -d "$BIN_DIR" ]; then
	/bin/mkdir $SSH_DIR
	/bin/chmod 700 $SSH_DIR
fi
