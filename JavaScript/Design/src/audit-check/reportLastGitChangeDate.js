const { exec } = require('child_process');
const fs = require('fs');
const util = require('util');
const { log } = require('console');
// const { dirname } = require('path');
// const { getFileDateTime, getPackageJsonPath, handleAuditCheckError } = require('../utils');
const filePathToPackageJson = "/home/ubuntu/Git/JsObjects/JavaScript/Design/OldAngular/AngularThreeModules02/package.json"
const command = `git log -1 --pretty="format:%cI" ${filePathToPackageJson}`;
// Promisify exec
const execPromise = util.promisify(exec);

async function gitDateChangeCheck(command) {
    await exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`Stderr: ${stderr}`);
            return;
        }

        const lastChange = stdout;
        log('stdout:', lastChange);

        return lastChange;
    });
    return null;
}



// Execute a command and return the output
async function executeGitDateChangeCheck(command) {
    try {
        const { stdout, stderr } = await execPromise(command);
        return stdout;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

executeGitDateChangeCheck(command)
    .then(output => {
        console.log('Output:', output);
        fs.writeFileSync('lastChange.txt', output);
    })
    .catch(error => console.error('Error:', error));


// Call the function
async function callGitDateChangeCheck() {
    const lastChange = await gitDateChangeCheck();
    log('Last Change from gitDateChangeCheck:', lastChange);
    if (lastChange) {
        fs.writeFileSync('lastChange.txt', lastChange);
    } else {
        log('No lastChange');
    }
}

// callGitDateChangeCheck();
