// const { exec } = require('child_process');
const { log } = require('console');
const fsp = require('fs/promises');
const { debugParams } = require('./src/debugParams');
const { programStub } = require('./src/programStub');
const { runParseJson } = require('./src/run-parse-json');
const { writeAuditDataReport, execProgram } = require('./src/utils');

/*
 * This script searches for a file in a directory and its subdirectories.
 * When the file is found, it executes a program with the file as an argument.
 * The program is expected to parse the file and do something with it.
 */
const useDebug = false;

// Error checking: log('Audit data reports length:', auditDataReports.length);
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

/*
 * This function searches for instances of package.js
 * in a directory and its subdirectories.
 * When the file is found, it executes an audit on it.
 * The program looks for errors recorded in the audit.
 */
async function setupCallToExecProgram(auditDataReports) {
    if (auditDataReports === undefined) {
        throw new Error('auditDataReports is not defined in start');
    }
    async function readDirectory(directoryToSearch, packageJson, programToRun) {
        if (programToRun === undefined) {
            throw new Error('Program to run is not defined');
        }

        // Find all subdirectories in the directoryToSearch
        const directoryEntries = await fsp.readdir(directoryToSearch, { withFileTypes: true });

        // Error handling. If no entries are found, log it.
        if (directoryEntries.length === 0) {
            log(`No entries found in ${directoryToSearch}`);
        } else {
            log(`Entries found in ${directoryToSearch} ${packageJson}: ${directoryEntries.length}`);
        }
        if (useDebug) {
            debugParams(directoryToSearch, packageJson, programToRun, directoryEntries);
        }

        // Parameters to pass to execProgram
        const params = [
            directoryEntries, directoryToSearch, packageJson, programToRun, auditDataReports,
        ];

        // Execute the programToRun on packageJson
        // in directoryToSearch and its subdirectories.
        await execProgram(...params);
    }

    const directoryToSearch = './'; // The directory we want to search
    const packageJson = 'package.json'; // The file name we are looking for

    let programToRun;
    if (useDebug) {
        programToRun = 'programStub.js';
    } else {
        programToRun = runParseJson;
    }

    log(`Searching for ${packageJson} in ${directoryToSearch} with program ${programToRun.name}`);
    await readDirectory(directoryToSearch, packageJson, programToRun)
        .then(() => {
            console.log('call to searchFile completed successfully.');
        })
        .catch((err) => console.error(`Error: ${err.message}`));
    // log('after searcfFile Audit data reports length:', auditDataReports.length);
} // setupCallToExecProgram

async function run() {
    const auditDataReports = [];
    await setupCallToExecProgram(auditDataReports);
    log('run Audit data reports length:', auditDataReports.length);
    // convert the array to valid JSON
    const auditDataReportsJson = JSON.stringify(auditDataReports);
    writeAuditDataReport(auditDataReportsJson);
    log('Audit data reports written to file');
} // run

run();
// log('Audit data reports length:', auditDataReports.length);

// End of file
