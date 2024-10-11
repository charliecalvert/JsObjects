const fs = require('fs');


// Read the JSON file
// A function that returns data so that we can test it.
// It is an async function that returns the data.
// We could then call the function from the test.
async function readAndSortReportDates() {
    try {
        const data = await fs.promises.readFile('ReportPackageDates.json', 'utf8');
        const jsonData = JSON.parse(data);
        jsonData.sort((a, b) => new Date(a.lastGitChange) - new Date(b.lastGitChange));
        return jsonData;
    } catch (err) {
        console.error('Error reading or parsing JSON:', err);
        throw err;
    }
}
fs.readFile('ReportPackageDates.json', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  try {
    const jsonData = JSON.parse(data);

    // Sort the array by the date field
    jsonData.sort((a, b) => new Date(a.lastGitChange) - new Date(b.lastGitChange));

    console.log(jsonData);
  } catch (parseError) {
    console.error('Error parsing JSON:', parseError);
  }
});

module.exports = readAndSortReportDates;
