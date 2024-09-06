const { exec } = require('child_process');
const { log } = require('console');
const fs = require('fs');
const path = require('path');

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
        if (false && entry.name === fileName) {
            log(`Checking: ${fullPath}`);
        }

        if (entry.isDirectory()) {
            await searchFile(fullPath, fileName, programToRun);
        } else if (entry.isFile() && entry.name === fileName) {
            console.log(`File found: ${fullPath}`);
            exec(`node ${programToRun} ${fullPath}`, (error, stdout, stderr) => {
                if (error) {
                    console.error(`Error executing ${programToRun}: ${error.message}`);
                    return;
                }
                if (stderr) {
                    console.error(`stderr: ${stderr}`);
                    return;
                }
                console.log(`stdout: ${stdout}`);
            });
        }
    }));
}

const directoryToSearch = './'; // Change this to the directory you want to search
const fileNameToSearch = 'package.json'; // Change this to the file name you are looking for
const programToRun = 'programStub.js'; // Change this to the program you want to run
log(`Searching for ${fileNameToSearch} in ${directoryToSearch} with program ${programToRun}`);
searchFile(directoryToSearch, fileNameToSearch, programToRun)
    .then(() => console.log('Search completed'))
    .catch((err) => console.error(`Error: ${err.message}`));
