/**
 * @fileoverview This script reads audit data reports from a specified file, processes them,
 * and runs an audit check using the `setupAuditCheck` function from `perform-audit-check`.
 * It logs various stages of the process for debugging and informational purposes.
 */

const { existsSync, readFileSync } = require('fs');
const { log } = require('console');
const { cwd } = require('process');
const { setupAuditCheck } = require('./perform-audit-check');

const useDebug = false;

/**
 * Runs the audit check command and processes the result.
 *
 * @param {Array} auditDataReports - An array to store audit data reports.
 * @param {string} fullPathToPackageJson - The full path to the package.json file.
 * @returns {Promise<Object>} The parsed result of the audit check.
 */
async function runCommand(auditDataReports, fullPathToPackageJson) {
    const result = await setupAuditCheck(auditDataReports, fullPathToPackageJson);
    log('Vanilla Result:', result);
    const parsedResult = JSON.parse(result);
    log('DoIt Parsed result:', parsedResult || 'No result yet');
    log('DoIt Audit data reports:', auditDataReports);
    log('DoIt Audit data reports length:', auditDataReports.length);
    log('DoIt Vanilla audit data reports type:', auditDataReports);
    return parsedResult;
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
const callRunParseJson = async () => {
    const auditDataReports = [];
    const reportPath = `${process.env.HOME}/temp/auditDataReports.json`;
    const auditDataReportNames = readAuditDataReport(reportPath);
    if (auditDataReportNames) {
        if (useDebug) {
            log('Test run.');
        } else {
            log(`In runParseJson we found ${auditDataReportNames.length} copies of package.json`);

            for (let i = 0; i < auditDataReportNames.length; i += 1) {
                log('auditDataReportNames[i]:', auditDataReportNames[i]);
                log('cwd:', cwd);
                const fullPathToPackageJson = `${auditDataReportNames[i]}`;
                log('fullPathToPackageJson:', fullPathToPackageJson);
                runCommand(auditDataReports, fullPathToPackageJson);
            }
        }
    }
};

callRunParseJson();
