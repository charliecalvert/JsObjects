'use strict';

var fs = require('fs');

var file = fs.readFileSync('config.json');
console.log("in setDBanme, config file: " + file);
var tmp = JSON.parse(file);
var dbName = tmp.name;
console.log("in setDBanme, DB name set to : " + dbName);