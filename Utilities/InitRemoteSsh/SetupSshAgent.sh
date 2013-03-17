#!/bin/sh

# Load the private key
eval `ssh-agent`
ssh-add ~/.ssh/CharlieMainKey.pem

# Ensure server key is cached
ssh foo@bitbucket.org

# Clone the repository
git clone git@bitbucket.org:ccalvert/test03-calvert.git
