const { exec, spawn } = require('child_process');
const { argv } = require('process');
const { log } = require('console');
const { getCurrentDateTime } = require('../src/utils');
const fs = require('fs');
const path = require('path');
const { ncu } = require('npm-check-updates');

function execPromise(ncu) {
    log('execPromise starting');
    return new Promise((resolve, reject) => {
        log('execPromise inside');
        spawn('~/npm/bin/ncu()', (error, stdout, stderr) => {
            log('execPromise inside exec');
            if (error) {
                log('execPromise inside error');
                console.error(`Error executing ncu -u in execPromise: ${stderr.message}`);
                console.error(`Error executing ncu -u in execPromise: ${error.message}`);
                reject(error);
                return;
            }
            if (stderr) {
                console.error(`stderr: ${stderr}`);
                reject(stderr);
                return;
            }

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
            runExecPromise(ncu);
        } else {
            console.log(`The string "${searchString}" is not present in the file.`);
        }
    });
}



// Example usage
const filePath = path.join(__dirname, 'ncu-output.txt'); // Replace with your file path
const searchString = 'Run ncu -u to upgrade package.json'; // Replace with the string you want to search for

checkStringInFile(filePath, searchString);
return null;
// execPromise();
/*         } else {
            console.log(`The string "${searchString}" is not present in the file.`);
        }
    });
} */

// Example usage
/* const filePath = path.join(__dirname, 'ncu-output.txt'); // Replace with your file path
const searchString = 'Run ncu -u to upgrade package.json'; // Replace with the string you want to search for

checkStringInFile(filePath, searchString); */

/* function checkStringInFile(filePath, searchString) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(`Error reading file: ${err.message}`);
            return;
        }

        if (data.includes(searchString)) {
            // console.log(`The string "${searchString}" is present in the file.`);
            function execPromise() {
                return new Promise((resolve, reject) => {
                    exec('ncu -u', (error, stdout, stderr) => {
                        if (error) {
                            console.error(`Error executing ncu -u in execPromise: ${error.message}`);
                            reject(error);
                            return;
                        }
                        if (stderr) {
                            console.error(`stderr: ${stderr}`);
                            reject(stderr);
                            return;
                        }

                        const currentDateTime = getCurrentDateTime();
                        const result = `[\n"${currentDateTime}",\n${stdout}\n]`;
                        log(`Command output: ${result}`);
                        resolve(result);
                    });
                });
            } */