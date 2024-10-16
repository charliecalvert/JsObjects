// const { exec } = require('child_process');
const { log } = require('console');
const { dirname } = require('path');
const { getFileDateTime, getPackageJsonPath, handleAuditCheckError } = require('../utils');

function getFileDateTimeInfo(fileName, packageJsonPath) {
    const filePath = fileName; // Replace with your file path
    const fileDateTime = getFileDateTime(filePath);

    if (fileDateTime) {
        log('packageJsonPath CWD:', packageJsonPath);
        log('Creation Time:', fileDateTime.creationTime);
        log('Modification Time:', fileDateTime.modificationTime);
    }
    return { fileDateTime, packageJsonPath };
}

// Run npm audit and save  the output to a file
function performSanityCheck(reports, packageJsonPath) {
    return new Promise((resolve, reject) => {
        // Use JavaScript to change directory (CWD) to packageJsonPath
        process.chdir(dirname(packageJsonPath));
        log('Current directory:', process.cwd());
        try {
            const fileDateTime01 = getFileDateTimeInfo('package.json', packageJsonPath);
            const fileDateTime02 = getFileDateTimeInfo('package-lock.json', packageJsonPath);
            resolve(fileDateTime01, fileDateTime02, packageJsonPath);
        }
        catch (error) {
            console.error(`Error executing npm audit in performAuditCheck: ${error.message} for ${packageJsonPath}`);
            reject(error);
            return;
        }
        // resolve(fileDateTime01, fileDateTime02);
    });
}

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
    reportPackagesDate: setupPackageJsonCheck,
    performDatesSanityCheck: performSanityCheck
};


