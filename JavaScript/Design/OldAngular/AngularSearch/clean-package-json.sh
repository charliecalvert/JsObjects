#! /bin/bash

grep -roh --include="*.json" \
    --exclude=bundle.js --exclude=package-lock.json \
    --exclude-dir=node_modules --exclude-dir=static \
    --exclude-dir=bower_components \
    --exclude-dir=.config --exclude-dir=.mozilla \
    --exclude-dir=.metadata "\"karma-*[^\"]*." \
    | xargs npm rm