#!/bin/sh

# This script clones a private repository into GIT_DIR.
# It loads a key into memory, then clones the repository.

GIT_DIR=~/Git

if [ ! -d "$GIT_DIR" ]; then
	mkdir $GIT_DIR
fi

# Load the private key
eval `ssh-agent`
ssh-add ~/.ssh/CharlieMainKey.pem

# Ensure server key is cached
ssh foo@bitbucket.org

# Clone the repository
cd $GIT_DIR
git clone git@bitbucket.org:ccalvert/test03-calvert.git
