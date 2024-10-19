#!/usr/bin/env node

const path = require('path');
const { log } = require('console');
const { readFileSync } = require('fs');
const { exec } = require('child_process');
const { cwd } = require('process');

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
                const output = stdout;
                if (output.includes('No package.json file found')) {
                    reject(`Error: ${output}`);
                }
                if (output.includes('Run ncu -u to upgrade package.json')) {
                    log('need to upgrade', cwd());
                }
                console.log(output);
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