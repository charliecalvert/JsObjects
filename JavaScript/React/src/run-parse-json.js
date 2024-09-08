const { exec } = require('child_process');
const { log } = require('console');
const { writeFile } = require('fs');
const { dirname } = require('path');
// const { stdout } = require('process');
const { getAudit } = require('./parse-json-func');
const { getCurrentDateTime } = require('./utils');
// const { parseJson } = require('./parse-json-func');

const useDebug = false;

async function runParseJson(packageJson) {
    /* const start = '/home/ubuntu/Git/JsObjects/Utilities/Templates';
    const end = '/JavaScript/parse-json-func.js';
    const parseJsonFuncPath = `${start}${end}`; */

    // const { getAudit } = require(parseJsonFuncPath);
    // Define the paths
    const auditFilePath = '/home/ubuntu/temp/audit.json';

    // log('in run-parse-json argv[1]', process.argv[1]);
    // log('in run-parse-json argv[2]', process.argv[2]);

    // packageJson = process.argv[2];
    const packageJsonPath = `${dirname(packageJson)}/`;
    log('CSCPackage JSON path:', packageJsonPath);
    // get path from packageJson

    // Run npm audit and save  the output to a file
    exec('npm audit --summary --json', { cwd: packageJsonPath }, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing npm audit: ${error.message} for ${packageJsonPath}`);
            return;
        }
        if (stderr) {
            console.error(`stderr: ${stderr}`);
            return;
        }

        const auditDataReport = stdout;
        const currentDateTime = getCurrentDateTime();
        const aPathDateData = `${packageJsonPath}, ${currentDateTime}`;
        const auditReport = [currentDateTime, packageJsonPath, auditDataReport];
        log(`auditData:, ${aPathDateData} \n ${auditDataReport}`);
        log(`auditReport:, ${auditReport}`);
        // log(`run parse json stdout: ${stdout}`);
        // Write the audit output to a file
        writeFile(auditFilePath, auditDataReport, (err) => {
            if (err) {
                console.error(`Error writing audit file: ${err.message}`);
                return;
            }

            // Import and execute the parse-json.js script
            // const parseJsonScriptPath = `${process.env.ELF_TEMPLATES}/JavaScript/` +
            // `parse-json-func.js`;

            // const { getAudit } = require(parseJsonScriptPath);
            if (useDebug) {
                console.log('parseJson:', typeof getAudit);
            }

            // parseJson(auditFilePath);
            getAudit(auditFilePath);
        });
    });
}

module.exports = { runParseJson };
