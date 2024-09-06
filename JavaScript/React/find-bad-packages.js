const { exec } = require('child_process');
const { log } = require('console');
const fs = require('fs');
const path = require('path');

const useDebug = false;

async function searchFile(dir, fileName, programToRun) {
    const entries = await fs.promises.readdir(dir, { withFileTypes: true });
    if (programToRun === undefined) {
        throw new Error('Program to run is not defined');
    }
    /* log(`Searching in: ${dir}`);
    log(`Searching for: ${fileName}`);
    log(`Program to run: ${programToRun}`);
 */
    await Promise.all(entries.map(async (entry) => {
        const fullPath = path.join(dir, entry.name);
        // Ignore specific directories
        if (entry.isDirectory() && ['node_modules', '.git', 'bower_components'].includes(entry.name)) {
            return;
        }
        if (useDebug && entry.name === fileName) {
            log(`Checking: ${fullPath}`);
        }

        if (entry.isDirectory()) {
            await searchFile(fullPath, fileName, programToRun);
        } else if (entry.isFile() && entry.name === fileName) {
            if (useDebug) {
                log(`File found: ${fullPath}`);
            }
            exec(`node ${programToRun} ${fullPath}`, (error, stdout, stderr) => {
                if (error) {
                    console.error(`Error executing ${programToRun}: ${error.message} for ${fullPath}`);
                    return;
                }
                if (stderr) {
                    console.error(`stderr: ${stderr}`);
                    return;
                }
                console.log(`exec shows stdout: ${stdout}`);
            });
        }
    }));
}

const directoryToSearch = './'; // Change this to the directory you want to search
const fileNameToSearch = 'package.json'; // Change this to the file name you are looking for

let programToRun;
if (useDebug) {
    programToRun = 'programStub.js';
} else {
    programToRun = '~/bin/run-parse-json.js';
}

log(`Searching for ${fileNameToSearch} in ${directoryToSearch} with program ${programToRun}`);
searchFile(directoryToSearch, fileNameToSearch, programToRun)
    .then(() => console.log('call to searchFile completed successfully.'))
    .catch((err) => console.error(`Error: ${err.message}`));
