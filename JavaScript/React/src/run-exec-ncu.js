#!/usr/bin/env node

const { log } = require('console');
const execNcu = require('./exec-ncu');

log('runNcu starting', execNcu);

execNcu.runNcu();
