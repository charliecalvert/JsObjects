#! /bin/bash

FLAGSA='--exclude=bundle.js --exclude=package-lock.json '
FLAGSB='--exclude-dir=node_modules --exclude-dir=static '
FLAGSC='--exclude-dir=bower_components '
FLAGSD='--exclude-dir=.config --exclude-dir=.mozilla '
FLAGSE='--exclude-dir=.metadata '
FLAGS="${FLAGSA}${FLAGSB}${FLAGSC}${FLAGSD}${FLAGSE}"

LOOKA='grunt-contrib*[^\"]*.|grunt-jasmine*[^\"]*.|grunt-jscs*[^\"]*.'
LOOKB='phantomjs*[^\"]*.|grunt-lib-phantomjs\"|grunt-karma\"|grunt-jsbeautifier\"'
LOOKC='node-static\"'

grep -roh --include="*.json" ${FLAGS} \
    "\"karma-*[^\"]*." \
    | xargs -r npm rm

grep -roh --include="*.json" ${FLAGS} \
    "\"jasmine-*[^\"]*." \
    | xargs -r npm rm && npm i jest --save-dev \
    && npm i jest-cli --save-dev \
    && mkdir -p __tests__ \
    && cp ${ELF_TEMPLATES}/UnitTest/test-basic-module.js __tests__/elven-basic.test.js

grep -roh --include="*.json" ${FLAGS} \
    "\"jade-*[^\"]*." \
    | xargs -r npm rm && npm i pug

# -E, --extended-regexp: Extended regular expression for parenthesis
grep -Eroh --include="*.json" ${FLAGS} \
    "\"(${LOOKA}|${LOOKB}|${LOOKC})"| xargs -r npm rm

grep -Eroh --include="*.json" ${FLAGS} \
    "(\"babel-cli\"|\"babel-core\")" \
    | xargs -r npm rm && npm i @babel/cli @babel/core --save-dev