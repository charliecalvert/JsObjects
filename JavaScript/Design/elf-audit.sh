#! /usr/bin/env bash

RED='\033[0;31m'
LIGHT_RED='\033[1;31m'
LIGHT_GREEN='\033[1;32m'
YELLOW='\033[1;33m'
BLUE='\033[1;36m'
NC='\033[0m' # No Color

START_DIR=$HOME'/Git/JsObjects/JavaScript/Design/'

function check-node-modules {
    DIR="./node_modules"
    if [ -d "$DIR" ]; then
        echo "Deleting ${DIR}..."
        rm -r ${DIR}
    else
        echo "${DIR} not found."
    fi
}

function check-package-lock {
    FILE="./package-lock.json"
    if [ -f "$FILE" ]; then
        echo "Deleting ${FILE}..."
        rm ${FILE}
    else
        echo "${FILE} not found."
    fi
}

function check-return-value {
    retVal=$?
    if [ $retVal -ne 0 ]; then
        echo -e ${LIGHT_RED}"Error"${NC}
        ncu -u
        check-node-modules
        check-package-lock
        npm i
    else
        echo -e ${LIGHT_GREEN}"Ok"${NC}
    fi
}

function check-dir {
    cd $START_DIR
    cd $1
    pwd
    npm audit --json > elf-audit.json
    check-return-value
}

function get-directories-containing-package-json {
    FindNp package.json | xargs -I{} dirname {} | xargs printf "check-dir %s\n" | sort
}

# get-directories-containing-package-json

check-dir ./BridgeSailor
check-dir ./DecorateSailor
check-dir ./ElfRoutes01
check-dir ./ElfRoutes02
check-dir ./FactoryInterface
# check-dir ./FactorySimple01
# check-dir ./GridExpress
# check-dir ./GridExpressFetch
# check-dir ./IBitDay2016
# check-dir ./JadeMixinComplete
# check-dir ./JadeMixinSimple
# check-dir ./JsonFromServer
# check-dir ./JsonFromServer02
# check-dir ./MaterialComponents
# check-dir ./OldAngular/AngularCalculator
# check-dir ./OldAngular/AngularCalculatorWithScope
# check-dir ./OldAngular/AngularInclude01
# check-dir ./OldAngular/AngularListFactory
# check-dir ./OldAngular/AngularModularKarma
# check-dir ./OldAngular/AngularResolve
# check-dir ./OldAngular/AngularRoutingView
# check-dir ./OldAngular/AngularSearch
# check-dir ./OldAngular/AngularSearch02
# check-dir ./OldAngular/AngularSignIn
# check-dir ./OldAngular/AngularTestBackend
# check-dir ./OldAngular/AngularTestController
# check-dir ./OldAngular/AngularTestControllerAs
# check-dir ./OldAngular/AngularTestDirectives
# check-dir ./OldAngular/AngularThreeModules02
# check-dir ./PubSubTopic04
# check-dir ./RequireCrafty
# check-dir ./SimpleQueue
# check-dir ./Singleton
