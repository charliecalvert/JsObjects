const fs = require('fs');
const { get } = require('http');
const path = require('path');

function getDevDeps() {
  // Path to your package.json file
  const packageJsonPath = path.join(__dirname, '../package.json');

  // Read the package.json file
  fs.readFile(packageJsonPath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading package.json:', err);
      return;
    }

    // Parse the JSON data
    const packageJson = JSON.parse(data);

    // Extract dependencies and devDependencies
    const dependencies = Object.keys(packageJson.dependencies || {});
    const devDependencies = Object.keys(packageJson.devDependencies || {});

    /*
    console.log('Dependencies\n npm i', dependencies.join(' '));
    console.log('DevDependencies:\n npm i -D', devDependencies.join(' '));
    */
    return dependencies.join(' ') + devDependencies.join(' ');
  });
}

module.exports = getDevDeps;