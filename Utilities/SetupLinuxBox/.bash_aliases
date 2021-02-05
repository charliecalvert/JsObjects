#! /usr/bin/env bash

# Exports

export GIT_HOME=$HOME/Git
export GIT_HUB_IO=$GIT_HOME/charliecalvert.github.io
export JSOBJECTS=$GIT_HOME/JsObjects
export ELF_UTILS=$JSOBJECTS/Utilities
export NODE_UTILS=$JSOBJECTS/Utilities/NodeInstall
export ELF_TEMPLATES=$ELF_UTILS/Templates
export ELF_SCRIPTS=$ELF_TEMPLATES/Scripts
export ELF_TEMPLATES_DATABASE=$ELF_TEMPLATES/Database
export ELF_UNIT_TEST=$ELF_TEMPLATES/UnitTest
export SETUP_LINUXBOX=$ELF_UTILS/SetupLinuxBox
export ELF_SSH_DIR=$HOME/.ssh
export PORT=30025
export SERVER_PORT=30026
export WEB_CRAFTS_PORT=30200


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
alias killchrome="pkill -9 chrome"
alias killchromium="pkill -9 chromium"
alias killnode="killall node"
#alias killchrome2="kill -9 `ps -A | grep chrome | cut -d "?" -f1`"

# Commands
alias sshadd="ssh-add $ELF_SSH_DIR/main-key"
alias bcy="build-concurrency"
alias dsee="docker container ls -a && echo 'Docker Images:' && docker image ls -a && echo 'Docker Volumes:' && docker volume ls && echo Docker networks: && docker network ls"
alias drms="docker ps -a -q | xargs docker container stop"
alias drmc="docker ps -a -q | xargs docker container rm"
alias drmi="docker image ls | grep 'week04' | xargs docker image rm"
alias drmg="docker image ls | grep 'git-tester' | xargs docker image rm && docker image prune"
alias drmv="docker volume ls | xargs docker volume rm"
alias drmn="docker network ls | grep 'week04' | xargs docker network rm"
alias drip="docker image prune"
alias drsp='docker system prune --all --force --volumes'
alias gossh="cd $ELF_SSH_DIR/"
alias ba="less ~/.bash_aliases"
alias platform="cordova platform add android"
alias go="npm install && npm start"
alias elfgo="npm install && bower install"
alias et="cd $GIT_HOME/elf-timer"
alias fbgo="firebase serve --port 30025"
alias fbs="cd functions && npm i && cd .. && firebase serve --port=30025"
alias fbsp="npm i && npm run build && cd functions && npm i && cd .. && npm start"
alias runnpm="npm install && bower install && npm start"
alias runexpress='npm install && bower install && grunt check'
alias runy='yarn install && bower install && yarn start'
alias runs='yarn install && yarn start'
alias runl='ln -s ~/tmp/node_modules . && npm start'
alias runcln='cd client && npm i && cd ../server && npm i && bower install && cd .. && npm i'
alias runmicros='cd git-gist && npm i && cd ../qux && pwd && npm i && bower install && cd ../git-user && pwd && npm i && bower install && cd ..'
alias runa="runcln && cd micros && runmicros && cd ../project-sanity-tests && runtest"
alias runtest='npm i && npm test'
alias runew="npm i && cd server/ && npm i && cd .."
alias runcs='cd client && npm i && cd ../server && npm i && npm start'
alias yni="yarn install"
alias runt="yarn && yarn test"
alias gck='npm install && bower install && grunt check'
alias run="nm && components && npm start"
alias runlint="yarn && eslint ."
alias mh="cd ~/Source/MakeHtml"
alias vwh="cd /var/www/html"
alias cpfavi="cp -v $ELF_TEMPLATES/Images/favicon.ico ."
alias cpfavp="cp -v $ELF_TEMPLATES/Images/favicon.png ."
alias gss="git status"
alias gitlog="git log --pretty=format:'%h: %ad'"
alias cleanpl="rm -r node_modules/ && rm package-lock.json && npm i"
alias cleanpj="rm -r node_modules/ && rm package-lock.json && cd client && rm -r node_modules && rm package-lock.json"
alias pj="git co package.json"
alias plj="git co package-lock.json package.json"
alias elf-server="nodemon ${PWD}/server/bin/www"
alias elf-client="cd client && ${PWD}/client/node_modules/react-scripts/bin/react-scripts.js start"
alias cleanher="git co client && git co server && find . -iname 'nohup.out' ! -type l | xargs rm -rv"
alias kcp="killnode && cleanher && plj"

#alias run="npm install && bower install && npm start"

# JsObjects
alias jo="cd $JSOBJECTS"
alias joc="cd $JSOBJECTS/Cordova"
alias jod="cd $JSOBJECTS/Data"
alias jodes="cd $JSOBJECTS/JavaScript/Design"
alias joj="cd $JSOBJECTS/JavaScript"
alias joui="cd $JSOBJECTS/Utilities/InstallScripts"
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

# Git

git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.st status
git config --global alias.last 'log -1 HEAD'
