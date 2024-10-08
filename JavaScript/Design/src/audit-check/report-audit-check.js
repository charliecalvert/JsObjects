const { exec } = require('child_process');
const { log } = require('console');
const { getCurrentDateTime, getPackageJsonPath, handleAuditCheckError } = require('../utils');

// Run npm audit and save  the output to a file
function performSanityCheck(reports, packageJsonPath) {
    return new Promise((resolve, reject) => {
        exec('npm audit --summary --json', { cwd: packageJsonPath }, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error executing npm audit in performAuditCheck: ${error.message} for ${packageJsonPath}`);
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
            const auditReport = `[\n"${packageJsonPath}",\n"${currentDateTime}",\n${auditDataReport}\n]`;

            log(`final auditReport:, ${auditReport}`);

            reports.push(auditReport);
            log(`auditReports len: ${reports.length}`);

            resolve(auditReport);
        });
    });
}

// exports.performSanityCheck = performSanityCheck;
async function setupPackageJsonCheck(auditDataReports, fullPathToPackageJson) {
    const packageJsonPath = getPackageJsonPath(auditDataReports, fullPathToPackageJson);
    try {
        // How can I wait for this call to exec to finish and return is result?
        const result = await performSanityCheck(auditDataReports, packageJsonPath);
        console.log('Command output:', result);
        return result;
    } catch (error) {
        handleAuditCheckError(error, packageJsonPath);
    }
    return null;
}

module.exports = {
    setupAuditCheck: setupPackageJsonCheck,
    performAuditSanityCheck: performSanityCheck,
};
