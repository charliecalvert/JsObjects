#!/usr/bin/env node

const { log } = require('console');
const { runNcu } = require('./exec-ncu-try-o2');
// const execProgram = require('./utils');

log('runNcu starting', runNcu); // Function

runNcu();
