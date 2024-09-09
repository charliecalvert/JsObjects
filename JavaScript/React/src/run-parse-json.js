const { exec } = require('child_process');
const { log } = require('console');
const { dirname } = require('path');
// const { writeAuditDataReport } = require('./utils');
// const { stdout } = require('process');
// const { getAudit } = require('./parse-json-func');
const { getCurrentDateTime } = require('./utils');
// const { parseJson } = require('./parse-json-func');

// const useDebug = false;

async function runParseJson(auditDataReports, fullPathToPackageJson) {
    log('Audit data reports type inside runparse:', typeof auditDataReports);
    const packageJsonPath = `${dirname(fullPathToPackageJson)}/`;
    log('CSCPackage JSON path:', fullPathToPackageJson);
    // log(`newEntriesLength: ${newEntriesLength}`);

    // Run npm audit and save  the output to a file
    function execPromise(reports) {
        return new Promise((resolve, reject) => {
            // How can I wait for this call to exec to finish?
            exec('npm audit --summary --json', { cwd: packageJsonPath }, (error, stdout, stderr) => {
                if (error) {
                    console.error(`Error executing npm audit: ${error.message} for ${packageJsonPath}`);
                    reject(error);
                    return;
                }
                if (stderr) {
                    console.error(`stderr: ${stderr}`);
                    reject(stderr);
                    return;
                }

                const auditDataReport = stdout;
                const currentDateTime = getCurrentDateTime();
                const aPathDateData = `${packageJsonPath}, ${currentDateTime}`;
                const auditReport = [currentDateTime, packageJsonPath, auditDataReport];
                // log(`auditData:, ${aPathDateData} \n ${auditDataReport}`);
                // log(`auditReport:, ${auditReport}`);
                log(`auditDataReport: ${aPathDateData}`);
                reports.push(auditReport);
                log(`execa auditDataReports len: ${reports.length}`);
                /* if (reports.length === newEntriesLength) {
                    log('writing auditDataReports:', reports.length);
                    // writeAuditDataReport(auditDataReports);
                } */
                resolve(auditReport);
            });
        });
    }

    async function runCommand(reports) {
        try {
            const result = await execPromise(reports);
            console.log('Command output:', result);
        } catch (error) {
            console.error('Error executing command:', error);
        }
        // await runExec();
    }

    // Call the async function
    runCommand(auditDataReports).then(() => {
        console.log('Command execution completed.');
    });
}

module.exports = { runParseJson };
