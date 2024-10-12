const fs = require('fs');


// Read the JSON file
// A function that returns data so that we can test it.
// It is an async function that returns the data.
// We could then call the function from the test.
async function readAndSortReportDates() {
    try {
        const pathToTempDirectory = `${process.env.ELF_TEMP}/ReportPackageDates.json`;
        const data = await fs.promises.readFile(`${pathToTempDirectory}`, 'utf8');
        const jsonData = JSON.parse(data);
        jsonData.sort((a, b) => new Date(a.lastGitChange) - new Date(b.lastGitChange));
        return jsonData;
    } catch (err) {
        console.error('Error reading or parsing JSON:', err);
        throw err;
    }
}

module.exports = readAndSortReportDates;
