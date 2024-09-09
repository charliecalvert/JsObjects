// const { exec } = require('child_process');
const { log } = require('console');
const fs = require('fs');
const path = require('path');
const { debugParams } = require('./src/debugParams');
const { programStub } = require('./src/programStub');
const { runParseJson } = require('./src/run-parse-json');
const { writeAuditDataReport } = require('./src/utils');

let newEntriesLength = 0;
/*
 * This script searches for a file in a directory and its subdirectories.
 * When the file is found, it executes a program with the file as an argument.
 * The program is expected to parse the file and do something with it.
 */
const useDebug = false;

log('Audit data reports type:', typeof auditDataReports);
if (debugParams === undefined) {
    throw new Error('debugParams is not defined');
}
if (programStub === undefined) {
    throw new Error('programStub is not defined');
}
if (runParseJson === undefined) {
    throw new Error('runParseJson is not defined');
}

// A recursive function that searches for package.json
// in a directory and its subdirectories
// call runParseJson when the file is found.
async function go(entries, dir, fileName, programToRun, auditDataReports) {
    await Promise.all(entries.map(async (entry) => {
        const fullPath = path.join(dir, entry.name);

        // Skip directories that are not needed
        if (entry.isDirectory() && ['node_modules', '.git', 'bower_components'].includes(entry.name)) {
            return;
        }
        if (useDebug && entry.name === fileName) {
            log(`Checking: ${fullPath}`);
        }

        if (entry.isDirectory()) {
            const newEntries = await fs.promises.readdir(fullPath, { withFileTypes: true });
            newEntriesLength += 1;
            if (useDebug) {
                log(`Directory found: ${fullPath} ${newEntries.length}`);
            }

            // Recursively search the subdirectory
            await go(newEntries, fullPath, fileName, programToRun, auditDataReports);
        } else if (entry.isFile() && entry.name === fileName) {
            if (useDebug) {
                log(`File found: ${fullPath}`);
            }

            if (useDebug) {
                log(`Executing program: ${programStub} ${fullPath}`);
                programStub(fullPath);
            } else {
                log(`Executing program: ${programToRun.name} ${fullPath}`);
            }
            if (auditDataReports === undefined) {
                throw new Error('auditDataReports is not defined');
            } else {
                auditDataReports.push(fullPath);
            }

            // Why can't I pass auditDataReports to runParseJson? I want to update it.
            // log('Audit data reports type2:', typeof auditDataReports);
            log('before runParse Audit data reports length:', auditDataReports.length);
            // await r
        }
    }));
}

/*
 * This function searches for instances of package.js
 * in a directory and its subdirectories.
 * When the file is found, it executes an audit on it.
 * The program looks for errors recorded in the audit.
 */
async function start(auditDataReports) {
    if (auditDataReports === undefined) {
        throw new Error('auditDataReports is not defined in start');
    }
    async function searchFile(directoryToSearch, fileName, programToRun) {
        // Find all subdirectories in the directoryToSearch
        const entries = await fs.promises.readdir(directoryToSearch, { withFileTypes: true });
        if (programToRun === undefined) {
            throw new Error('Program to run is not defined');
        }
        if (entries.length === 0) {
            log(`No entries found in ${directoryToSearch}`);
        } else {
            log(`Entries found in ${directoryToSearch} ${fileName}: ${entries.length}`);
        }
        if (useDebug) { debugParams(directoryToSearch, fileName, programToRun, entries); }

        await go(entries, directoryToSearch, fileName, programToRun, auditDataReports);
    }

    const directoryToSearch = './'; // The directory we want to search
    const fileNameToSearch = 'package.json'; // The file name we are looking for

    let programToRun;
    if (useDebug) {
        programToRun = 'programStub.js';
    } else {
        programToRun = runParseJson;
        // start(directoryToSearch, fileNameToSearch, programToRun);
    }

    log(`Searching for ${fileNameToSearch} in ${directoryToSearch} with program ${programToRun.name}`);
    await searchFile(directoryToSearch, fileNameToSearch, programToRun)
        .then(() => {
            console.log('call to searchFile completed successfully.');
            // log('Audit data reports length:', auditDataReports.length);
            /* writeAuditDataReport(auditDataReports);
            log('Audit data reports written to file'); */
        })
        .catch((err) => console.error(`Error: ${err.message}`));
    // log('after searcfFile Audit data reports length:', auditDataReports.length);
}

async function run() {
    log('run', newEntriesLength);
    const auditDataReports = [];
    await start(auditDataReports);
    log('run Audit data reports length:', auditDataReports.length);
    // convert the array to valid JSON
    const auditDataReportsJson = JSON.stringify(auditDataReports);
    writeAuditDataReport(auditDataReportsJson);
    log('Audit data reports written to file');
}
run();
// log('Audit data reports length:', auditDataReports.length);

// End of file
