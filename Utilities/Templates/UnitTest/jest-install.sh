#!/bin/bash

# Install Jest
npm i jest --save-dev \
    && npm i jest-cli --save-dev \
    && mkdir -p __tests__ \
    && cp ${ELF_TEMPLATES}/UnitTest/test-basic-module.js __tests__/elven-basic.test.js