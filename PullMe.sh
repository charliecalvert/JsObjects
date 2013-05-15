#!/bin/sh

# Unless you are Charlie, you probably don't have rights to
# modify this repository. As a result, you don't need to use
# this file. Just type git pull to update the repository.
# You might, however, want to use this file as a model for
# a script you might use in a repository that you do own.

eval `ssh-agent`
ssh-add ~/.ssh/GitHub.pem
git pull

