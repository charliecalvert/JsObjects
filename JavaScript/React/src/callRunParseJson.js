const { existsSync, readFileSync } = require('fs');
const { log } = require('console');
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
            log('Running audit in runParseJson.');
            const result = await runParseJson(auditDataReports, reportPath);
            log('result:', result);
        }
        console.log('fileNames:', fileNames);
    }
};

callRunParseJson();
