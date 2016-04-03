#! /bin/bash

# Exports

export GIT_HOME=$HOME/Git
export GIT_HUB_IO=$GIT_HOME/charliecalvert.github.io
export JSOBJECTS=$GIT_HOME/JsObjects
export ELF_UTILS=$JSOBJECTS/Utilities
export ELF_TEMPLATES=$ELF_UTILS/Templates
export ELF_UNIT_TEST=$ELF_TEMPLATES/UnitTest

# Alias definitions.

# Put your custom aliases into ~/.my_bash_aliases
if [ -f ~/.my_bash_aliases ]; then
    . ~/.my_bash_aliases
fi

# General
alias gd="cd $GIT_HOME"
alias chr="/usr/bin/chromium-browser"
alias chrome="/usr/bin/chromium-browser"

# Commands
alias sshadd="ssh-add ~/.ssh/main-key"
alias ba="less ~/.bash_aliases"
alias platform="cordova platform add android"
alias go="npm install && npm start"
alias runnpm="npm install && npm start"
alias runexpress='npm install && bower install && grunt'
alias run="nm && components && npm start"
#alias run="npm install && bower install && npm start"

# JsObjects
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

