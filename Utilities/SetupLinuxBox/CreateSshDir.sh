SSH_DIR=~/.ssh


if [ ! -d "$SSH_DIR" ]; then
	/bin/mkdir $SSH_DIR
	/bin/chmod 700 $SSH_DIR
fi
