#!/usr/bin/env node

/* import fs from 'fs';
import path from 'path';
import { promisify } from 'util'; */

const { log } = require('console');
const fs = require('fs');
// const path = require('path');
const { promisify } = require('util');

const readFile = promisify(fs.readFile);
const useDebug = false;

function colorTrace(msg, color) {
    console.log('=================', color);
    console.log(`Current directory: ${process.cwd()}`);// pwd
    console.log(msg);
}

// We pass in the name of audit.json;
// usually ~/temp/audit.json
async function parseJson(filename) {
    // const filePath = path.join(__dirname, filename);
    // console.log("parseJson filename: " + filename);

    const fileContents = await readFile(filename, 'utf8');
    if (useDebug) {
        // console.log('fileContents:', fileContents);
        log('filename:', filename);
    }

    return JSON.parse(fileContents);
}

// getAudit();
// Print the total number of vulnerabilities from audit.json
function getAudit(auditName) {
    if (useDebug) {
        log('in getAudit');
        log('in getAudit auditName', auditName);
        log('in getAudit argv[0]', process.argv[0]);
        log('in getAudit argv[1]', process.argv[1]);
        log('in getAudit argv[2]', process.argv[2]);
        log('in getAudit argv[3]', process.argv[3]);
        log('in getAudit argv2', process.argv[2]);
    }
    try {
        parseJson(auditName).then((data) => {
            /* if (data.metadata &&
                    data.metadata.vulnerabilities &&
                    data.metadata.vulnerabilities.total > 0) {

            } */

            if (data.metadata
                 && data.metadata.vulnerabilities
                 && data.metadata.vulnerabilities.total > 0) {
                console.log('getAudit data:', data);
                colorTrace(`Total vulnerabilities: ${data.metadata.vulnerabilities.total}`, 'red');
            }
        });
    } catch (err) {
        console.error('Failed to parse JSON:', err);
    }
}

// getAudit();
// getAudit();

module.exports = { getAudit, parseJson, colorTrace };
