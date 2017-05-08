#! /bin/bash

# Exports

export GIT_HOME=$HOME/Git
export GIT_HUB_IO=$GIT_HOME/charliecalvert.github.io
export JSOBJECTS=$GIT_HOME/JsObjects
export ELF_UTILS=$JSOBJECTS/Utilities
export NODE_UTILS=$JSOBJECTS/Utilities/NodeInstall
export ELF_TEMPLATES=$ELF_UTILS/Templates
export ELF_UNIT_TEST=$ELF_TEMPLATES/UnitTest
export SETUP_LINUXBOX=$ELF_UTILS/SetupLinuxBox

# Alias definitions.

# Put your custom aliases into ~/.my_bash_aliases
if [ -f ~/.my_bash_aliases ]; then
    . ~/.my_bash_aliases
fi

# General
alias gd="cd $GIT_HOME"
alias chr="/usr/bin/chromium-browser"
alias chrome="/usr/bin/chromium-browser"
alias killwebstorm="ps -Alf |grep -i webstorm |grep -v grep |awk -F' ' '{print \$4}' |xargs kill -9 "

# Commands
alias sshadd="ssh-add ~/.ssh/main-key"
alias ba="less ~/.bash_aliases"
alias platform="cordova platform add android"
alias go="npm install && bower install && npm start"
alias runnpm="npm install && npm start"
alias runexpress='npm install && bower install && grunt check'
alias gck='npm install && bower install && grunt check'
alias run="nm && components && npm start"
alias mh="cd ~/Source/MakeHtml"
alias vwh="cd /var/www/html"
alias cpfavi="cp -v $ELF_TEMPLATES/Images/favicon.ico ."
alias cpfavp="cp -v $ELF_TEMPLATES/Images/favicon.png ."
alias gss="git status"
alias gitlog="git log --pretty=format:'%h: %ad'"

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
alias slb="cd $SETUP_LINUXBOX"

# Navigate
alias cd1="cd .."
alias cd2="cd ../.."
alias cd3="cd ../../.."
alias cd4="cd ../../../.."
alias cd5="cd ../../../../.."
