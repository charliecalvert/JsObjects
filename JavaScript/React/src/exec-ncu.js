const { exec } = require('child_process');
const { argv } = require('process');
const { log } = require('console');
const fs = require('fs');
const path = require('path');
const { ncu, run } = require('npm-check-updates');
const { getCurrentDateTime } = require('./utils');

// const { cli } = require('webpack');

// const { cli } = require('/home/ubuntu/npm/lib/node_modules/npm-check-updates/build/cli.js');

function execPromise() {
    log('execPromise starting');
    return new Promise((resolve, reject) => {
        log('execPromise inside');
        exec('./ncu-test.sh', (error, stdout, stderr) => {
            log('execPromise inside exec');
            if (error) {
                log('execPromise inside error');
                console.error(`Error executing ncu -u in execPromise: ${stderr.message}`);
                console.error(`Error executing ncu -u in execPromise: ${error.message}`);
                reject(error);
                return;
            }
            if (stderr) {
                log(`execPromise inside stderr: ${stderr}`);
                console.error(`stderr: ${stderr}`);
                reject(stderr);
                return;
            }

            log('execPromise inside exec got passed error and stderr');
            const currentDateTime = getCurrentDateTime();
            const result = `[\n"${currentDateTime}",\n${stdout}\n]`;
            log(`Command output: ${result}`);
            resolve(result);
        });
    });
}

// Function to check for the presence of a string in a file
async function runExecPromise() {
    log('runExecPromise');
    try {
        const result = await execPromise();
        console.log('Command output:', result);
        return result;
    } catch (error) {
        console.error('Error executing command in runExecPromise:', error);
        // process.exit(1);
        return error;
    }
}

// Function to check for the presence of a string in a file
function checkStringInFile(filePath, searchString) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(`Error reading file: ${err.message}`);
            return;
        }

        if (data.includes(searchString)) {
            console.log(`The string "${searchString}" is present in the file.`);
            // runExecPromise(ncu);
            // const resulta = cli();
            const resulta = 'blah';
            console.log('Command output csc:', resulta);
        } else {
            console.log(`The string "${searchString}" is not present in the file.`);
        }
    });
}

// Example usage
const filePath = path.join(__dirname, 'ncu-output.txt'); // Replace with your file path
const searchString = 'Run ncu -u to upgrade package.json'; // Replace with the string you want to search for

// checkStringInFile(filePath, searchString);
// return null;

/* execPromise().then(result => {
    console.log('Command output:', result);
}).catch(error => {
    console.error('Command failed:', error);
}); */
// cli;

function runNcu() {
    run({
        // Pass any cli option
        packageFile: './package.json',
        upgrade: true,
        // Defaults:
        // jsonUpgraded: true,
        // silent: true,
    }).then((upgraded) => {
        console.log(upgraded);
    });
}

/* const upgraded = await ncu.run({
    // Pass any cli option
    packageFile: './package.json',
    upgrade: false,
    // Defaults:
    // jsonUpgraded: true,
    // silent: true,
  })

  console.log(upgraded)
  */
module.exports.runNcu = runNcu;
module.exports.runExecPromise = runExecPromise;
module.exports.checkStringInFile = checkStringInFile;
module.exports.execPromise = execPromise;
