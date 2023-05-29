#! /bin/bash

grep -roh --include="*.json" \
    --exclude=bundle.js --exclude=package-lock.json \
    --exclude-dir=node_modules --exclude-dir=static \
    --exclude-dir=bower_components \
    --exclude-dir=.config --exclude-dir=.mozilla \
    --exclude-dir=.metadata "\"karma-*[^\"]*." \
    | xargs -r npm rm

grep -roh --include="*.json" \
    --exclude=bundle.js --exclude=package-lock.json \
    --exclude-dir=node_modules --exclude-dir=static \
    --exclude-dir=bower_components \
    --exclude-dir=.config --exclude-dir=.mozilla \
    --exclude-dir=.metadata "\"jasmine-*[^\"]*." \
    | xargs -r npm rm && npm i jest --save-dev \
    && npm i jest-cli --save-dev \
    && mkdir -p __tests__ \
    && cp ${ELF_TEMPLATES}/UnitTest/test-basic-module.js __tests__/elven-basic.test.js

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
    | xargs -r npm rm && npm i pug

grep -Eroh --include="*.json" \
    --exclude=bundle.js --exclude=package-lock.json \
    --exclude-dir=node_modules --exclude-dir=static \
    --exclude-dir=bower_components \
    --exclude-dir=.config --exclude-dir=.mozilla \
    --exclude-dir=.metadata "\"(grunt-jscs*[^\"]*.|phantomjs*[^\"]*.|grunt-lib-phantomjs\")" \
    | xargs -r npm rm
