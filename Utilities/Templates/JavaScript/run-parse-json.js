const { exec } = require('child_process');
const { log } = require('console');
const fs = require('fs');
const path = require('path');

// Define the paths
const auditFilePath = '/home/ubuntu/temp/audit.json';
const parseJsonScriptPath = process.env.ELF_TEMPLATES + '/JavaScript/parse-json-func.js';

log("in run-parse-json argv[1]", process.argv[1]);
log("in run-parse-json argv[2]", process.argv[2]);

packageJson = process.argv[2];
const packageJsonPath = path.dirname(packageJson);
log("Package JSON path:", packageJsonPath);
// get path from packageJson

// Run npm audit and save  the output to a file
exec('npm audit --summary --json', { cwd: packageJsonPath }, (error, stdout, stderr) => {
    if (error) {
        console.error(`Error executing npm audit: ${error.message} for ${packageJsonPath}`);
        return;
    }
    if (stderr) {
        console.error(`stderr: ${stderr}`);
        return;
    }

    // log(`run parse json stdout: ${stdout}`);
    // Write the audit output to a file
    fs.writeFile(auditFilePath, stdout, (err) => {
        if (err) {
            console.error(`Error writing audit file: ${err.message}`);
            return;
        }

        // Import and execute the parse-json.js script
        const { getAudit } = require(parseJsonScriptPath);
        console.log('parseJson:', typeof getAudit);


        // parseJson(auditFilePath);
        getAudit(auditFilePath);
    });
});