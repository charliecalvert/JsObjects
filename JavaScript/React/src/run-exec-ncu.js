#!/usr/bin/env node

const { log } = require('console');
const execNcu = require('./exec-ncu');
const execProgram = require('./utils');

log('runNcu starting', execNcu);

execNcu.runNcu();
