const { existsSync, readFileSync } = require('fs');
const { log } = require('console');
const { cwd } = require('process');
const { runParseJson } = require('./run-parse-json');

const useDebug = false;

async function runCommand(auditDataReports, fullPathToPackageJson) {
    const result = await runParseJson(auditDataReports, fullPathToPackageJson);
    log('Vanilla Result:', result);
    const parsedResult = JSON.parse(result);
    log('DoIt Parsed result:', parsedResult || 'No result yet');
    log('DoIt Audit data reports:', auditDataReports);
    log('DoIt Audit data reports length:', auditDataReports.length);
    log('DoIt Vanilla audit data reports type:', auditDataReports);
    // log('Parsed audit data reports:', JSON.parse(auditDataReports));
    return parsedResult;
}

const callRunParseJson = async () => {
    const auditDataReports = [];

    function readReport(filename) {
        if (existsSync(filename)) {
            const fileContents = readFileSync(filename, 'utf8');
            const jsonReport = JSON.parse(fileContents);
            log('audit.json exists', jsonReport);
            return jsonReport;
        }
        console.error('File does not exist:', filename);
        return false;
    }
    const reportPath = `${process.env.HOME}/temp/auditDataReports.json`;
    const fileNames = readReport(reportPath);
    if (fileNames) {
        if (useDebug) {
            log('Test run.');
        } else {
            log(`In runParseJson we found ${fileNames.length} copies of package.json`);

            // let result = null;
            for (let i = 0; i < fileNames.length; i += 1) {
                const fullPathToPackageJson = `${cwd()}/${fileNames[i]}`;
                log('fullPathToPackageJson:', fullPathToPackageJson);
                runCommand(auditDataReports, fullPathToPackageJson);
                /* if (i >= 5) {
                    break;
                } */
            }
            /* const fullPathToPackageJson = `${cwd()}/${fileNames[1]}`;
            log('fullPathToPackageJson:', fullPathToPackageJson);
            doIt(auditDataReports, fullPathToPackageJson); */
        }
        // console.log('fileNames:', fileNames);
    }
};

callRunParseJson();
