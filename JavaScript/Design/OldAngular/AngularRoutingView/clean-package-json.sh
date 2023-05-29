#! /bin/bash

grep -roh --include="*.json" \
    --exclude=bundle.js --exclude=package-lock.json \
    --exclude-dir=node_modules --exclude-dir=static \
    --exclude-dir=bower_components \
    --exclude-dir=.config --exclude-dir=.mozilla \
    --exclude-dir=.metadata "\"karma-*[^\"]*." \
    | xargs npm rm

grep -roh --include="*.json" \
    --exclude=bundle.js --exclude=package-lock.json \
    --exclude-dir=node_modules --exclude-dir=static \
    --exclude-dir=bower_components \
    --exclude-dir=.config --exclude-dir=.mozilla \
    --exclude-dir=.metadata "\"jasmine-*[^\"]*." \
    | -q xargs npm rm && npm i jest --save-dev \
    && npm i jest-cli --save-dev \
    && mkdir -p __tests__ \
    && mv ${ELF_TEMPLATES}/UnitTest/test-basic-module.js __tests__/elven-basic.test.js

# grep -roh --include="*.json" \
#     --exclude=bundle.js --exclude=package-lock.json \
#     --exclude-dir=node_modules --exclude-dir=static \
#     --exclude-dir=bower_components \
#     --exclude-dir=.config --exclude-dir=.mozilla \
#     --exclude-dir=.metadata "\"grunt-*[^\"]*." \
#     | xargs npm rm

grep -roh --include="*.json" \
    --exclude=bundle.js --exclude=package-lock.json \
    --exclude-dir=node_modules --exclude-dir=static \
    --exclude-dir=bower_components \
    --exclude-dir=.config --exclude-dir=.mozilla \
    --exclude-dir=.metadata "\"jade-*[^\"]*." \
    | xargs npm rm && npm i pug
