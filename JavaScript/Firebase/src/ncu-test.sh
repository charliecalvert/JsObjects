#!/bin/bash

# Test ncu
MY_OUTPUT="$(ncu)"

# echo ${OUTPUT}
MESSAGE01="Run ncu -u to upgrade package.json"
MESSAGE02="All dependencies match the latest package versions"

echo ${MY_OUTPUT}
if [ $? -eq 0 ]; then
    # echo OK ${OUTPUT}
    # Check if there are any outdated packages
    if [[ ${MY_OUTPUT} == *"Run ncu -u to upgrade package.json"* ]]; then
        echo -h "We got message01: \"${MESSAGE01}\"!\n We will run ncu -u"
        ncu -u && npm install
    fi
    if [[ ${MY_OUTPUT} == *"All dependencies match the latest package versions"* ]]; then
        echo "We got message02: \"${MESSAGE02}\". NO NEED to run ncu -u"
    fi
else
    echo FAIL
fi
