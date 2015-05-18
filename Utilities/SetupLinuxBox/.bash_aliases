#! /bin/bash

BABASE=$HOME
export GIT_HOME=$BABASE/Git
export GIT_HUB_IO=$GIT_HOME/charliecalvert.github.io

# Commands
alias go="npm install && npm start"
alias ba="less ~/.bash_aliases"
alias sshadd="ssh-add ~/.ssh/rsa-key-git.pem"
alias chrome="/usr/bin/chromium-browser"
alias platform="cordova platform add android"
alias run="nm && bower install && grunt serve"

# General
export GEN=$BABASE
alias awsb="cd $BABASE/bin/AwsBasicS3"
alias gitdir="cd $GIT_HOME"
alias gitio="cd $GIT_HUB_IO"
alias elfsite="cd $GIT_HOME/ElfSite/Code"
alias batch="cd $GEN/Batch"
alias isit="cd $GEN/Git/Isit322-2015"
alias chr="/usr/bin/chromium-browser"
alias nm="ln -s ~/tmp/node_modules/"
alias p28='cd ~/Git/Prog282'
alias p2='cd ~/Git/prog272-2015'
alias runexpress='npm install && bower install && grunt'

# Docs
alias cn='cd $GIT_HOME/CloudNotes'

# Writing
export WRITE=$BABASE/Git/writings
alias writing='cd $WRITE'
alias wt='cd $WRITE'
alias wtt="cd $WRITE/Tech"
alias wta="cd $WRITE/Tech/AaCode"
alias wtg="cd $WRITE/Tech/Games"
alias wtds='cd $WRITE/Tech/DataStructures/'
alias wtjs='cd $WRITE/Tech/JsSyntax/'
alias wtpl="cd $WRITE/Tech/Games/ThreePointerLock"
alias wtgl="cd $WRITE/Tech/Games/GameListener"
alias wtaa="cd $WRITE/Tech/AaCode"
alias wtnt="cd $WRITE/Tech/Network"
alias wtp="cd $WRITE/Tech/Programmable"
alias wtu="cd $WRITE/UnitTests/Js"

# Elvenware
export WRITE_ELF=$WRITE/Elvenware
alias ec="cd $WRITE/Elvenware"
alias ecc="cd $WRITE/Elvenware/development/cloud/"
alias ecj="cd $WRITE/Elvenware/development/web/JavaScript"

# JsObjects
export JSOBJECTS=$BABASE/Git/JsObjects
alias jo="cd $JSOBJECTS"
alias joc="cd $JSOBJECTS/Cordova"
alias jod="cd $JSOBJECTS/Data"
alias jodes="cd $JSOBJECTS/JavaScript/Design"
alias joj="cd $JSOBJECTS/JavaScript"
alias jon="cd $JSOBJECTS/JavaScript/NodeCode"
alias jop="cd $JSOBJECTS/Python"
alias jos="cd $JSOBJECTS/JavaScript/Syntax"
alias jot="cd $JSOBJECTS/JavaScript/UnitTests"
alias jou="cd $JSOBJECTS/Utilities"


