#!/bin/sh

eval `ssh-agent`
ssh-add ~/.ssh/CharlieMainKey.pem
ssh foo@bitbucket.org
git clone git@bitbucket.org:ccalvert/test03-calvert.git
