const { exec } = require('child_process');
const { log } = require('console');
const { dirname } = require('path');
// const { writeAuditDataReport } = require('./utils');
// const { stdout } = require('process');
// const { getAudit } = require('./parse-json-func');
const { getCurrentDateTime } = require('./utils');
// const { parseJson } = require('./parse-json-func');

// const useDebug = false;

// When I call runParseJson from another file or module
// how can I wait for the call to execPromise to finish
// and return the result of the call to execPromise?

// Run npm audit and save  the output to a file
function execPromise(reports, packageJsonPath) {
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
            log(`initial auditDataReport (from stdout): ${auditDataReport}`);
            const currentDateTime = getCurrentDateTime();
            const pathDate = `[\n"${packageJsonPath}",\n"${currentDateTime}",\n${auditDataReport}\n]`;
            log(`pathDate: ${pathDate}`);

            const auditReport = pathDate;
            // log(`auditData:, ${aPathDateData} \n ${auditDataReport}`);
            log(`final auditReport:, ${auditReport}`);

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

async function runParseJson(auditDataReports, fullPathToPackageJson) {
    log('Audit data reports type inside runparse:', typeof auditDataReports);
    const packageJsonPath = `${dirname(fullPathToPackageJson)}/`;
    log('CSCPackage JSON path:', fullPathToPackageJson);
    log(`packageJsonPath: ${packageJsonPath}`);
    try {
        // How can I wait for this call to exec to finish and return is result?
        const result = await execPromise(auditDataReports, packageJsonPath);
        console.log('Command output:', result);
        return result;
    } catch (error) {
        console.error('Error executing command:', error);
    }
    return null;
    /* async function runCommand(reports, fileToTest) {
        try {
            // How can I wait for this call to exec to finish and return is result?
            const result = await execPromise(reports, fileToTest);
            console.log('Command output:', result);
            return result;
        } catch (error) {
            console.error('Error executing command:', error);
        }
        return null;
    }
 */
    // Call the async function
    /*  return runCommand(auditDataReports, fullPathToPackageJson).then(() => {
        console.log('Command execution completed.');
    }); */
}

module.exports = { runParseJson };
