#!/bin/sh

eval `ssh-agent`
ssh-add ~/.ssh/CharlieMainKey02.pem
git pull

