const { exec } = require('child_process');
const fs = require('fs');

exec('npm outdated --json', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`Stderr: ${stderr}`);
    return;
  }
  console.log 	
  const outdatedPackages = JSON.parse(stdout);
  console.log('Outdated packages:', outdatedPackages);

  fs.writeFileSync('outdated-packages.json', JSON.stringify(outdatedPackages, null, 2));
});
