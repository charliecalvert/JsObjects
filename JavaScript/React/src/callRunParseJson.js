const { existsSync, readFileSync } = require('fs');
const { log } = require('console');
const { cwd } = require('process');
const { runParseJson } = require('./run-parse-json');

const useDebug = false;

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

            let result = null;
            const fullPathToPackageJson = `${cwd()}/${fileNames[0]}`;
            log('fullPathToPackageJson:', fullPathToPackageJson);
            result = await runParseJson(auditDataReports, fullPathToPackageJson);
            result = JSON.parse(result);
            log('result:', result || 'No result yet');
        }
        // console.log('fileNames:', fileNames);
    }
};

callRunParseJson();
