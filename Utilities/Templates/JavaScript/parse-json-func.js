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
    log("argv2", process.argv[2]);
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

// getAudit();
getAudit();


module.exports = { getAudit, parseJson, colorTrace };