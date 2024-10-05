const path = require('path');
const { cwd } = require('process');
const { log } = require('console');
const fsp = require('fs/promises');
const { writeFile } = require('fs');

// const { useDebug } = require('./utils');

const useDebug = false;
let newEntriesLength = 0;
const packageJson = 'package.json'; // The file name we are looking for

function writeAuditDataReport(auditDataReportsJson) {
    writeFile('/home/ubuntu/temp/auditDataReports.json', auditDataReportsJson, (err) => {
        if (err) {
            console.error(`Error writing audit file: ${err.message}`);
            return;
        }

        if (useDebug) {
            console.log('parseJson:', typeof getAudit);
        }
    });
}

// A recursive function that searches for package.json
// in a directory and its subdirectories
// call programToRun when the file is found.
async function createAuditDataReport(entries, dir, auditDataReports) {
    log('newEntriesLength:', newEntriesLength);
    await Promise.all(entries.map(async (entry) => {

        const fullPath = path.join(dir, entry.name);

        // Skip directories that are not needed
        if (entry.isDirectory() && ['node_modules', '.git', 'bower_components'].includes(entry.name)) {
            return;
        }
        if (useDebug && entry.name === packageJson) {
            log(`Checking: ${fullPath}`);
        }

        if (entry.isDirectory()) {
            const newEntries = await fsp.readdir(fullPath, { withFileTypes: true });
            newEntriesLength += 1;
            if (useDebug) {
                log(`Directory found: ${fullPath} ${newEntries.length}`);
            }

            // Recursively search the subdirectory
            await createAuditDataReport(newEntries, fullPath, auditDataReports);
        } else if (entry.isFile() && entry.name === packageJson) {
            if (useDebug) {
                log(`File found: ${fullPath}`);
            }

            // log(`Executing program: ${programToRun.name} ${fullPath}`);

            if (auditDataReports === undefined) {
                throw new Error('auditDataReports is not defined');
            } else {
                auditDataReports.push(path.join(cwd(), fullPath));
            }

            // Why can't I pass auditDataReports to runParseJson? I want to update it.
            // log('Audit data reports type2:', typeof auditDataReports);
            log('before runParse Audit data reports length:', auditDataReports.length);
        }
    }));
} // createAuditDataReport

module.exports = { createAuditDataReport, writeAuditDataReport };
