#!/usr/bin/env node

const { log } = require('console');
const { existsSync, readFileSync } = require('fs');

const useDebug = false;

function colorTrace(msg, color) {
    console.log('=================', color);
    console.log(`Current directory: ${process.cwd()}`);// pwd
    console.log(msg);
}

// We pass in the name of audit.json;
// usually ~/temp/audit.json
// This function reads the file and returns the parsed JSON
async function parseJson(filename) {
    // const filePath = path.join(__dirname, filename);
    // console.log("parseJson filename: " + filename);

    if (existsSync(filename)) {
        const fileContents = readFileSync(filename, 'utf8');
        if (useDebug) {
            // console.log('fileContents:', fileContents);
            log('filename:', filename);
        }
        // if this fails it's because ~/temp/audit.json
        // is not a valid JSON file
        return JSON.parse(fileContents);
    }

    console.error('File does not exist:', filename);
    return null;
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
                colorTrace(`Total vulnerabilities: ${data.metadata.vulnerabilities.total} `, 'red');
            }
        });
    } catch (err) {
        console.error('Failed to parse JSON:', err);
    }
}

module.exports = { getAudit, parseJson, colorTrace };
