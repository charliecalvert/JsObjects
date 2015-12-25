#! /bin/bash

# General
export GIT_HOME=$HOME/Git
export GIT_HUB_IO=$GIT_HOME/charliecalvert.github.io
alias gd="cd $GIT_HOME"
alias batch="cd $HOME/Batch"
alias chr="/usr/bin/chromium-browser"
alias runexpress='npm install && bower install && grunt'

# Commands
alias sshadd="ssh-add ~/.ssh/rsa-key-git.pem"
alias go="npm install && npm start"
alias ba="less ~/.bash_aliases"
alias chrome="/usr/bin/chromium-browser"
alias platform="cordova platform add android"
alias run="nm && bower install && grunt serve"

# JsObjects
export JSOBJECTS=$GIT_HOME/JsObjects
export ELF_TEMPLATES=$JSOBJECTS/Utilities/Templates
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
alias syscheck="$JSOBJECTS/Utilities/SetupLinuxBox/SystemCheck"

####################################################
# Begin Charlie Specific aliases and exports
# You can delete or ignore the following definitions
#####################################################

# Writing
export WRITE=$GIT_HOME/writings
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
alias nt="cd $WRITE/Tech/Network"

# Elvenware
export WRITE_ELF=$WRITE/Elvenware
alias ec="cd $WRITE/Elvenware"
alias ecc="cd $WRITE/Elvenware/development/cloud/"
alias ecj="cd $WRITE/Elvenware/development/web/JavaScript"

# My Courses
alias isit="cd $GEN/Git/Isit322-2015"
alias p28='cd ~/Git/Prog282'
alias p2='cd ~/Git/isit320-2015'
alias p2c='cd $GIT_HOME/isit320-calvert-2015'
alias i3='cd ~/Git/isit320-2015'
alias i3c='cd $GIT_HOME/isit320-calvert-2015'

alias www='cd /var/www/html'

# My Programs
alias cn='cd $GIT_HOME/CloudNotes'
alias awsb="cd $HOME/bin/AwsBasicS3"
alias gitio="cd $GIT_HUB_IO"
alias elfsite="cd $GIT_HOME/ElfSite/Code"
alias nm="ln -s ~/tmp/node_modules/"
export GIT_HUB_IO=$GIT_HOME/charliecalvert.github.io
