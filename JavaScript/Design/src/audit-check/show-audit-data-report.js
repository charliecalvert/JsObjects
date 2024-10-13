const { promisify } = require('util');
const fs = require('fs');
const exec = promisify(require('child_process').exec);
const { log } = require('console');

async function gitDateChangeCheck(command) {
    try {
        const { stdout, stderr } = await exec(command);
        if (stderr) {
            console.error(`Stderr: ${stderr}`);
            return null;
        }
        log('stdout:', stdout);
        return stdout;
    } catch (error) {
        console.error(`Error: ${error.message}`);
        return null;
    }
}

// Call the function
async function callGitDateChangeCheck() {
    const auditDataReportCheck = await gitDateChangeCheck('cat $ELF_TEMP/auditDataReports.json');
    log('Last Change from gitDateChangeCheck:', auditDataReportCheck);
    const jsonData = JSON.parse(auditDataReportCheck);
    log('jsonData:', jsonData);
    if (jsonData) {
        const design = process.env.ELF_DESIGN;
        fs.writeFileSync(`${design}/auditDataReports.json`, JSON.stringify(jsonData, null, 2));
    } else {
        log('No auditDataReportCheck');
    }
}

callGitDateChangeCheck();