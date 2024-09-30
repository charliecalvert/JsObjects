#!/usr/bin/env node

const fs = require('fs');
// const path = require('path');

// Function to get the current date and time in a specific format
function getCurrentDateTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    return `${year}-${month}-${day}_${hours}-${minutes}-${seconds}`;
}

function getCurrentWorkingDirectory() {
    return process.cwd();
}

function replaceLines(data) {
    let newData = data;
    // Define the substrings to be replaced and their replacements
    const replacements = [
        { searchValue: /__REPLACE_ME_01__/g, replaceValue: getCurrentWorkingDirectory() },
        { searchValue: /__REPLACE_ME_02__/g, replaceValue: getCurrentWorkingDirectory() },
    ];

    // Replace the substrings using the defined replacements
    replacements.forEach((replacement) => {
        newData = newData.replace(replacement.searchValue, replacement.replaceValue);
    });

    return newData;
}
/* function replaceLines(data) {
    const lines = data.split('\n');
    // Replace the lines you want to change
    lines[74] = 'This is the new second line';
    lines[75] = 'This is the new fourth line';
    return lines.join('\n');
} */

// Read the file
const baseDir = process.env.JSOBJECTS_JAVASCRIPT_REACT || '/home/ubuntu/temp';
const readFileName = `${baseDir}/make-audit-data-report.work`;
fs.readFile(readFileName, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }

    // Replace the lines
    const newData = replaceLines(data);

    // Get the current date and time
    const dateTime = getCurrentDateTime();

    // Write the new file with the current date and time in the name
    const outputFileName = `/home/ubuntu/temp/auditDataReports-${dateTime}.json`;
    fs.writeFile(outputFileName, newData, (writeFileError) => {
        if (writeFileError) {
            console.error('Error writing the file:', writeFileError);
            return;
        }
        console.log(`File has been saved as ${outputFileName}`);
    });
});

// readFile('./make-audit-data-report.work');
