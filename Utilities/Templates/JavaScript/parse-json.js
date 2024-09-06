#!/usr/bin/env node

/* import fs from 'fs';
import path from 'path';
import { promisify } from 'util'; */


const { log } = require('console');
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const readFile = promisify(fs.readFile);

function colorTrace(msg, color) {
    console.log("=================");
    console.log('Current directory: ' + process.cwd());// pwd
    console.log(msg);
}

function elflog(msg, color) {
    color = color || "black";
    bgc = "White";
    switch (color) {
        case "success": color = "Green"; bgc = "LimeGreen"; break;
        case "info": color = "DodgerBlue"; bgc = "Turquoise"; break;
        case "error": color = "Red"; bgc = "Black"; break;
        case "start": color = "OliveDrab"; bgc = "PaleGreen"; break;
        case "warning": color = "Tomato"; bgc = "Black"; break;
        case "end": color = "Orchid"; bgc = "MediumVioletRed"; break;
        default: color = color;
    }

    if (typeof msg == "object") {
        console.log(msg);
    } else if (typeof color == "object") {
        console.log("%c" + msg, "color: PowderBlue;font-weight:bold; background-color: RoyalBlue;");
        console.log(color);
    } else {
        console.log("%c" + msg, "color:" + color + ";font-weight:bold; background-color: " + bgc + ";");
    }
}

function getArgs() {
    const args = {};
    process.argv
        .slice(2, process.argv.length)
        .forEach(arg => {
            // long arg
            if (arg.slice(0, 2) === '--') {
                const longArg = arg.split('=');
                const longArgFlag = longArg[0].slice(2, longArg[0].length);
                const longArgValue = longArg.length > 1 ? longArg[1] : true;
                args[longArgFlag] = longArgValue;
            }
            // flags
            else if (arg[0] === '-') {
                const flags = arg.slice(1, arg.length).split('');
                console.log(flags);
                flags.forEach(flag => {
                    args[flag] = true;
                });
            }
        });
    return args;
}

// We pass in the name of audit.json;
// usually ~/temp/audit.json
async function parseJson(filename) {
    // const filePath = path.join(__dirname, filename);
    // console.log("parseJson filename: " + filename);

    const fileContents = await readFile(filename, 'utf8');
    return JSON.parse(fileContents);
}

// getAudit();
// Print the total number of vulnerabilities from audit.json
function getAudit() {
    try {
        parseJson(process.argv[2]).then(data => {
            if (data.metadata && data.metadata.vulnerabilities && data.metadata.vulnerabilities.total > 0) {
                colorTrace('Total vulnerabilities: ' +
                    data.metadata.vulnerabilities.total,
                    "red");
            }
        });
    } catch (err) {
        console.error("Failed to parse JSON:", err);
    };
}

function getPackage() {
    parseJson('package.json').then(data => {
        console.log(data.name);
    });
}

function showArgs() {
    const args = getArgs();
    console.log(args);
    console.log(process.argv[0]);
    console.log(process.argv[1]);
    console.log(process.argv[2]);
}

// getPackage();
// showArgs();

getAudit();


