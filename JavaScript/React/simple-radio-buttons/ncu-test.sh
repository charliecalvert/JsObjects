#!/bin/bash
# Test ncu
OUTPUT="$(ncu)"
if [ $? -eq 0 ]; then
    echo OK ${OUTPUT}
    # Check if there are any outdated packages
    if [[ ${OUTPUT} == *"Run ncu -u to upgrade package.json"* ]]; then
        echo "It's there! Need to run ncu -u"
        ncu -u && npm install
    fi
    if [[ ${OUTPUT} == *"All dependencies match the latest package versions"* ]]; then
        echo "It's NOT there! NO NEED to run ncu -u"
    fi
else
    echo FAIL
fi
