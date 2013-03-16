#!/bin/sh

eval `ssh-agent`
ssh-add ~/.ssh/CharlieMainKey.pem
ssh-add ~/.ssh/github_rsa

git clone git@bitbucket.org:ccalvert/test03-calvert.git
