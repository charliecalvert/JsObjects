const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

// Define the paths
const auditFilePath = '/home/ubuntu/temp/audit.json';
const parseJsonScriptPath = '/home/ubuntu/Git/JsObjects/Utilities/Templates/JavaScript/parse-json-func.js';

// Run npm audit and save  the output to a file
exec('npm audit --summary --json', (error, stdout, stderr) => {
    if (error) {
        console.error(`Error executing npm audit: ${error.message}`);
        return;
    }
    if (stderr) {
        console.error(`stderr: ${stderr}`);
        return;
    }

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
        getAudit();
    });
});