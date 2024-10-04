const { exec } = require('child_process');
const { log } = require('console');
const { dirname } = require('path');
const { getCurrentDateTime } = require('../utils');

// Run npm audit and save  the output to a file
function performAuditCheck(reports, packageJsonPath) {
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

async function setupAuditCheck(auditDataReports, fullPathToPackageJson) {
    log('Audit data reports type inside runparse:', typeof auditDataReports);
    const packageJsonPath = `${dirname(fullPathToPackageJson)}/`;
    log('CSCPackage JSON path:', fullPathToPackageJson);
    log(`packageJsonPath: ${packageJsonPath}`);
    try {
        // How can I wait for this call to exec to finish and return is result?
        const result = await performAuditCheck(auditDataReports, packageJsonPath);
        console.log('Command output:', result);
        return result;
    } catch (error) {
        console.error('Error executing elf command in setupAuditCheck:', error);
        process.exit(1);
    }
    return null;
}

module.exports = { setupAuditCheck };
