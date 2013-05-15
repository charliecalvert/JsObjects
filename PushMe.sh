#!/bin/sh

# See the notes at the top of PullMe.sh

eval `ssh-agent`
ssh-add ~/.ssh/GitHub.pem
git push


