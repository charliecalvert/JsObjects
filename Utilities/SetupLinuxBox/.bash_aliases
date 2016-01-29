#! /bin/bash

# Alias definitions.
# You may want to put all your custom additions into a separate file 
# called ~/.my_bash_aliases, instead of adding them here directly.
# See /usr/share/doc/bash-doc/examples in the bash-doc package.

if [ -f ~/.my_bash_aliases ]; then
    . ~/.my_bash_aliases
fi

# General
export GIT_HOME=$HOME/Git
export GIT_HUB_IO=$GIT_HOME/charliecalvert.github.io
alias gd="cd $GIT_HOME"
alias batch="cd $HOME/Batch"
alias chr="/usr/bin/chromium-browser"
alias runexpress='npm install && bower install && grunt'

# Commands
alias sshadd="ssh-add ~/.ssh/main-key"
alias go="npm install && npm start"
alias ba="less ~/.bash_aliases"
alias chrome="/usr/bin/chromium-browser"
alias platform="cordova platform add android"
#alias run="npm install && bower install && npm start"
alias run="nm && components && npm start"
alias runnpm="npm install && npm start"

# JsObjects
export JSOBJECTS=$GIT_HOME/JsObjects
export ELF_UTILS=$JSOBJECTS/Utilities
export ELF_TEMPLATES=$ELF_UTILS/Templates
export ELF_UNIT_TEST=$ELF_TEMPLATES/UnitTest
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
export ELF_WRITE=$GIT_HOME/writings
alias writing='cd $ELF_WRITE'
alias wt='cd $ELF_WRITE'
alias wtt="cd $ELF_WRITE/Tech"
alias wta="cd $ELF_WRITE/Tech/AaCode"
alias wtg="cd $ELF_WRITE/Tech/Games"
alias wtds='cd $ELF_WRITE/Tech/DataStructures/'
alias wtjs='cd $ELF_WRITE/Tech/JsSyntax/'
alias wtpl="cd $ELF_WRITE/Tech/Games/ThreePointerLock"
alias wtgl="cd $ELF_WRITE/Tech/Games/GameListener"
alias wtaa="cd $ELF_WRITE/Tech/AaCode"
alias wtnt="cd $ELF_WRITE/Tech/Network"
alias wtp="cd $ELF_WRITE/Tech/Programmable"
alias wtu="cd $ELF_WRITE/UnitTests/Js"

# Elvenware
export WRITE_ELF=$ELF_WRITE/Elvenware
alias ec="cd $ELF_WRITE/Elvenware"
alias ecc="cd $ELF_WRITE/Elvenware/development/cloud/"
alias ecj="cd $ELF_WRITE/Elvenware/development/web/JavaScript"

# My Courses
alias isit="cd $GEN/Git/Isit322-2015"
alias p28='cd ~/Git/Prog282'
alias p2='cd ~/Git/isit320-2015'
alias p2c='cd $GIT_HOME/isit320-calvert-2015'
alias i3='cd ~/Git/isit322-2016'
alias i3c='cd $GIT_HOME/isit322-calvert-2016'

alias www='cd /var/www/html'

# My Programs
alias cn='cd $GIT_HOME/CloudNotes'
alias elfa='cd $GIT_HOME/elven-assignments'
alias awsb="cd $HOME/bin/AwsBasicS3"
alias gitio="cd $GIT_HUB_IO"
alias elfsite="cd $GIT_HOME/ElfSite/Code"
alias nm="ln -s ~/tmp/node_modules/"
alias components="ln -s ~/tmp/components/ public/components"
alias slb="cd $ELF_UTILS/SetupLinuxBox"
export GIT_HUB_IO=$GIT_HOME/charliecalvert.github.io
