#!/usr/bin/env node

const path = require('path');

const { log } = require('console');
// const { runNcu } = require('./exec-ncu-try-o2');
const { readFileSync } = require('fs');
// const execProgram = require('./utils');
const { exec } = require('child_process');

log('runNcu starting', runNcu); // Function

log("__dirName:", __dirname);
log("__filename:", __filename);

data = readFileSync(__dirname + '/audit-check/auditDataReports.json', 'utf8', (err, data) => {
    if (err) {
        console.error(`Error reading file: ${err.message}`);
        return;
    }

    log('Data:', data);
});

log('Data:', data);
const dataAry = JSON.parse(data);
log('TypeOf Data:', typeof dataAry);
log('Data:', dataAry[0]);
log('Data:', dataAry[1]);



// How can I run this loop safely with no emitter errors?
/* for (let i = 0; i < dataAry.length; i += 1) {
    process.chdir(path.dirname(dataAry[i]));
    runNcu();
} */

function runNcu() {
    return new Promise((resolve, reject) => {
        exec('ncu', (error, stdout, stderr) => {
            if (error) {
                reject(`Error: ${stderr}`);
            } else {
                console.log(stdout);
                resolve();
            }
        });
    });
}

async function runLoopSafely(dataAry) {
    for (let i = 0; i < dataAry.length; i += 1) {
        process.chdir(path.dirname(dataAry[i]));
        try {
            const result = await runNcu();
            console.log("result:", result);
        } catch (error) {
            console.error(error);
        }
    }
}

runLoopSafely(dataAry);