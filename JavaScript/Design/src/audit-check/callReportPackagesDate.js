/**
 * @fileoverview This script reads audit data reports from a specified file, processes them,
 * and runs an audit check using the `setupAuditCheck` function from `perform-audit-check`.
 * It logs various stages of the process for debugging and informational purposes.
 */

const { existsSync, readFileSync, writeFileSync } = require('fs');
const { log } = require('console');
const { reportPackagesDate } = require('./reportPackageDates');
const useDebug = false;
const auditDataReports = [];

/**
 * Runs the audit check command and processes the result.
 *
 * @param {Array} auditDataReports - An array to store audit data reports.
 * @param {string} fullPathToPackageJson - The full path to the package.json file.
 * @returns {Promise<Object>} The parsed result of the audit check.
 */
async function runCommand(fullPathToPackageJson) {
    const result = await reportPackagesDate(auditDataReports, fullPathToPackageJson);
    log('Vanilla Result:', result);
    /* let simpleJson = {};
    simpleJson.push = result.packageJsonPath;
    log('simpleJson:', simpleJson); */
    // Insert the pathe to package.json into the simpleJson object

    // Save the result in our array
    auditDataReports.push({
        packageJsonPath: result.packageJsonPath,
        creationTime: result.fileDateTime.creationTime,
        modificationTime: result.fileDateTime.modificationTime,
        readableCreationTime: result.fileDateTime.creationTime.toLocaleDateString('en-US'),
        readableModificationTime: result.fileDateTime.modificationTime.toLocaleDateString('en-US'),
        tryThis: 'git log -1 --pretty="format:%cI" /home/ubuntu/Git/JsObjects/JavaScript/Design/OldAngular/AngularThreeModules02/package.json'
     });

    // Write the result to the console
    log('Vanilla Result:', result);
    // const parsedResult = JSON.parse(simpleJson  || ['No result yet']);
    // log('DoIt Parsed result:', parsedResult || 'No result yet');
    log('DoIt Audit data reports:', auditDataReports);
    log('DoIt Audit data reports length:', auditDataReports.length);
    log('DoIt Vanilla audit data reports type:', typeof  auditDataReports);
    return auditDataReports;
}

/**
 * Reads the audit data report from a specified file.
 *
 * @param {string} filename - The path to the audit data report file.
 * @returns {Object|boolean} The parsed JSON report if the file exists, otherwise false.
 */
function readAuditDataReport(filename) {
    if (existsSync(filename)) {
        const fileContents = readFileSync(filename, 'utf8');
        const jsonReport = JSON.parse(fileContents);
        log('audit.json exists', jsonReport);
        return jsonReport;
    }
    console.error('File does not exist:', filename);
    return false;
}

/**
 * Main function to read audit data reports and run the audit check.
 * It reads the audit data report names from a specified file
 * and processes each report.
 */
const callReportPackagesDate = async () => {

    const reportPath = `${process.env.HOME}/temp/auditDataReports.json`;
    const auditDataReportNames = readAuditDataReport(reportPath);
    if (auditDataReportNames) {
        if (useDebug) {
            log('Test run.');
        } else {
            log(`In runParseJson we found ${auditDataReportNames.length} copies of package.json`);

            for (let i = 0; i < auditDataReportNames.length; i += 1) {
                log('auditDataReportNames[i]:', auditDataReportNames[i]);
                const fullPathToPackageJson = `${auditDataReportNames[i]}`;
                log('fullPathToPackageJson:', fullPathToPackageJson);
                await runCommand(fullPathToPackageJson);
            }
            log('final auditDataReports:', auditDataReports);
            // Save the audit data reports to a file
            const auditDataReportPath = `${process.env.HOME}/temp/ReportPackageDates.json`;
            // Convert the array to a string
            const auditDataReportsAsString = JSON.stringify(auditDataReports, null, 2);
            writeFileSync(auditDataReportPath, auditDataReportsAsString, 'utf8');
        }
    }
};

callReportPackagesDate();
