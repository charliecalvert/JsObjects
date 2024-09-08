// const { exec } = require('child_process');
const { log } = require('console');
const fs = require('fs');
const path = require('path');
const { debugParams } = require('./src/debugParams');
const { programStub } = require('./src/programStub');
const { runParseJson } = require('./src/run-parse-json');
const { writeAuditDataReport } = require('./src/utils');

/*
 * This script searches for a file in a directory and its subdirectories.
 * When the file is found, it executes a program with the file as an argument.
 * The program is expected to parse the file and do something with it.
 */
const useDebug = false;
const auditDataReports = [];

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
async function go(entries, dir, fileName, programToRun) {
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
            if (useDebug) {
                log(`Directory found: ${fullPath}`);
            }

            // Recursively search the subdirectory
            await go(newEntries, fullPath, fileName, programToRun);
        } else if (entry.isFile() && entry.name === fileName) {
            if (useDebug) {
                log(`File found: ${fullPath}`);
            }

            if (useDebug) {
                log(`Executing program: ${programStub} ${fullPath}`);
                programStub(fullPath);
            } else {
                if (useDebug) {
                    log(`Executing program: ${programToRun.name} ${fullPath}`);
                }
                runParseJson(fullPath, auditDataReports);
            }
        }
    }));
}

/*
 * This function searches for instances of package.js
 * in a directory and its subdirectories.
 * When the file is found, it executes an audit on it.
 * The program looks for errors recorded in the audit.
 */
function start() {
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

        await go(entries, directoryToSearch, fileName, programToRun);
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
    searchFile(directoryToSearch, fileNameToSearch, programToRun)
        .then(() => {
            console.log('call to searchFile completed successfully.');
            writeAuditDataReport(auditDataReports);
            log('Audit data reports written to file');
        })
        .catch((err) => console.error(`Error: ${err.message}`));
}

start();

// End of file
