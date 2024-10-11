const fs = require('fs');

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
