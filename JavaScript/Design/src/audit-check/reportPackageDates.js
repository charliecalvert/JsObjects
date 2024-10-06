// const { exec } = require('child_process');
const { log } = require('console');
const { dirname } = require('path');
const { getFileDateTime } = require('../utils');

function getFileDateTimeInfo(fileName) {
    const filePath = fileName; // Replace with your file path
    const fileDateTime = getFileDateTime(filePath);

    if (fileDateTime) {
        console.log('Creation Time:', fileDateTime.creationTime);
        console.log('Modification Time:', fileDateTime.modificationTime);
    }
    return fileDateTime;
}

// Run npm audit and save  the output to a file
function performDateCheck(reports, packageJsonPath) {
    return new Promise((resolve, reject) => {
        // Use JavaScript to change directory (CWD) to packageJsonPath
        process.chdir(packageJsonPath);
        try {
            const fileDateTime01 = getFileDateTimeInfo('package.json');
            const fileDateTime02 = getFileDateTimeInfo('package-lock.json');
            resolve(fileDateTime01, fileDateTime02);
        }
        catch (error) {
            console.error(`Error executing npm audit in performAuditCheck: ${error.message} for ${packageJsonPath}`);
            reject(error);
            return;
        }
        // resolve(fileDateTime01, fileDateTime02);
    });
}



async function reportPackagesDate(auditDataReports, fullPathToPackageJson) {
    log('Audit data reports type inside runparse:', typeof auditDataReports);
    const packageJsonPath = `${dirname(fullPathToPackageJson)}/`;
    log('CSCPackage JSON path:', fullPathToPackageJson);
    log(`packageJsonPath: ${packageJsonPath}`);
    try {
        // How can I wait for this call to exec to finish and return is result?
        const result = await performDateCheck(auditDataReports, packageJsonPath);
        console.log('Command output:', result);
        return result;
    } catch (error) {
        console.error('Error executing elf command in setupAuditCheck:', error);
        log('Try \ncd', packageJsonPath);
        log('ncu -u\nnpm i\ncd -\nnode call-perform-audit-check.js');
        process.exit(1);
    }
    return null;
}

module.exports = { reportPackagesDate };
