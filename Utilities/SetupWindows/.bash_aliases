#! /bin/bash

BABASE=/cygdrive/c

# Commands
alias go="npm install && npm start"
alias ba="less ~/.bash_aliases"
alias sshadd="ssh-add ~/.ssh/rsa-key-git.pem"
alias chrome="/usr/bin/chromium-browser"

# General
export GEN=$BABASE/Src
alias awsb="cd $GEN/Batch/AwsBasicS3"
alias gitdir="cd $GEN/Git"
alias batch="cd $GEN/Batch"
alias isit="cd $GEN/Git/Isit3202014"
alias chr="/usr/bin/chromium-browser"
alias nm="ln -s $GEN/tmp/node_modules/"
alias p28='cd $GEN/Git/Prog282'
alias p2='cd $GEN/Git/Prog270-2014'

# Docs
alias cn='cd $BABASE/Dropbox/Elvenware/CloudNotes'

# Writing
export WRITE=$BABASE/Src/Git/Writing
alias writing='cd $WRITE'
alias wt='cd $WRITE'
alias wtt="cd $WRITE/Tech"
alias wtg="cd $WRITE/Tech/Games"
alias wtd='cd $WRITE/Tech/DataStructures/'
alias wtj='cd $WRITE/Tech/JsSyntax/'
alias wtu='cd $WRITE/UnitTests/Js/'
alias wtp="cd $WRITE/Tech/Programmable"
alias wtpl="cd $WRITE/Tech/Games/ThreePointerLock"
alias wtgl="cd $WRITE/Tech/Games/GameListener"
alias wtaa="cd $WRITE/Tech/AaCode"
alias wtnt="cd $WRITE/Tech/Network"

# JsObjects
export JSOBJECTS=$BABASE/Src/Git/JsObjects
alias jo="cd $JSOBJECTS"
alias jod="cd $JSOBJECTS/Data"
alias jodes="cd $JSOBJECTS/JavaScript/Design"
alias joj="cd $JSOBJECTS/JavaScript"
alias jop="cd $JSOBJECTS/Python"
alias jos="cd $JSOBJECTS/JavaScript/Syntax"
alias jou="cd $JSOBJECTS/Utilities"
