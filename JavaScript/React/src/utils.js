const { writeFile } = require('fs');
const { log } = require('console');
const { exec } = require('child_process');
const { dirname } = require('path/posix');

const useDebug = false;

function writeAuditDataReport(auditDataReportsJson) {
    writeFile('/home/ubuntu/temp/auditDataReports.json', auditDataReportsJson, (err) => {
        if (err) {
            console.error(`Error writing audit file: ${err.message}`);
            return;
        }

        if (useDebug) {
            console.log('parseJson:', typeof getAudit);
        }
    });
}

const getCurrentDateTime = () => {
    const date = new Date();

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};

console.log(getCurrentDateTime());

function checks() {
    console.log('checks');
    /* const start = '/home/ubuntu/Git/JsObjects/Utilities/Templates';
    const end = '/JavaScript/parse-json-func.js';
    const parseJsonFuncPath = `${start}${end}`; */

    // const { getAudit } = require(parseJsonFuncPath);
    // Define the paths
    // const auditFilePath = '/home/ubuntu/temp/audit.json';

    log('in run-parse-json argv[1]', process.argv[1]);
    log('in run-parse-json argv[2]', process.argv[2]);

    // packageJson = process.argv[2];
}

async function runParseJson(packageJson, auditDataReports, newEntriesLength) {
    log('Audit data reports type inside runparse:', typeof auditDataReports);
    const packageJsonPath = `${dirname(packageJson)}/`;
    log('CSCPackage JSON path:', packageJsonPath);
    log(`newEntriesLength: ${newEntriesLength}`);

    // Run npm audit and save  the output to a file
    async function runExec() {
        exec('npm audit --summary --json', { cwd: packageJsonPath }, async (error, stdout, stderr) => {
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
            // log(`auditData:, ${aPathDateData} \n ${auditDataReport}`);
            // log(`auditReport:, ${auditReport}`);
            log(`auditDataReport: ${aPathDateData}`);
            auditDataReports.push(auditReport);
            log(`execa auditDataReports len: ${auditDataReports.length}`);
            if (auditDataReports.length === newEntriesLength) {
                writeAuditDataReport(auditDataReports);
            }
        });
    }
    runExec();
}

// const { parseJson } = require('./parse-json-func');
// const useDebug = false;
// await runExec();

module.exports = {
    getCurrentDateTime, writeAuditDataReport, checks, runParseJson,
};
