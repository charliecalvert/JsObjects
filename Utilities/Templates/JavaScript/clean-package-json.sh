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

grep -Eroh --include="*.json" ${FLAGS} \
    "(\"jasmine-*[^\"]*.|\"mocha*[^\"]*.\"|\"chai*[^\"]*.|\"sinon*[^\"]*.|\"jest-serializer-enzyme\")" \
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
    "(\"babel-cli\"|\"babel-core\"|\"react-addons-test-utils\")" \
    | xargs -r npm rm && npm i @babel/cli @babel/core --save-dev

grep -Eroh --include="*.json" ${FLAGS} \
    "(\"react-addons-test-utils\")" \
    | xargs -r npm rm \
    && npm i --save-dev @testing-library/react

grep -Eroh --include="*.json" ${FLAGS} \
    "(\"sessionstore\")" \
    | xargs -r npm rm \
    && npm i --save-dev connect-redis

// Just get rid of it.
grep -Eroh --include="*.json" ${FLAGS} \
    "(\"styles\"|\"cradle\"|\"simpledb\"|\"request\"|\"jshint-stylish\")" \
    | xargs -r npm rm

grep -Eroh --include="*.json" ${FLAGS} \
    "(\"node-uuid\")" \
|   xargs -r npm rm \
    && npm i --save-dev uuid

# grep -Eroh --include="*.json" ${FLAGS} \
#     "(\"babel-preset-es2015\"|\"babel-preset-react\")" \
#     | xargs -r npm rm && npm i @babel/preset-env @babel/preset-react --save-dev

# grep -Eroh --include="*.json" ${FLAGS} \
#     "(\"babel-preset-stage-0\"|\"babel-preset-stage-1\")" \
#     | xargs -r npm rm && npm i @babel/preset-stage-0 @babel/preset-stage-1 --save-dev
