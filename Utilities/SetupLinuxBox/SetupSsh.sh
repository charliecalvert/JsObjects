#! /bin/bash

KEY_NAME=Test-Key
SSH_DIR=$HOME/.ssh
FULL_PATH=$SSH_DIR/$KEY_NAME
PUBLIC_KEY=$FULL_PATH.pub
AUTHORIZED_KEY_FILE=$SSH_DIR/authorized_keys

cd $HOME
pwd
echo $FULL_PATH

function setupKey() {
	# -t: Type of key
	# -P: Passphrase which is initially empty
	# -f: The file name of the key to create
	# -v: Describe what you are doing
	ssh-keygen -v -t rsa -P '' -f $FULL_PATH 
	cat $PUBLIC_KEY >> $AUTHORIZED_KEY_FILE

	# Change the passphrase
	ssh-keygen -p -f $FULL_PATH
}

function removeKey() {
	rm -v $FULL_PATH
	rm -v $PUBLIC_KEY
	rm -v $AUTHORIZED_KEY_FILE
}

# removeKey
setupKey
