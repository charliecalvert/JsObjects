const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');
const { log } = require('./logger');

// Define the function to get all the packages in the package.json file
/*
 * Read the package.json file located in the same directory as the
 * script using the fs.promises.readFile method, which returns a promise.
 * Parse the package.json file. Convert it from a JSON string to a JavaScript object.
 * Extract the dependencies and devDependencies properties from the JSON object. If these properties are not present, it defaults to an empty object.
 * Combine the dependencies and devDependencies objects into a single object using the spread operator.
 * returns a promise that resolves with the combined dependencies object or rejects with an error if any step fails.
 */
function getPackages() {
    /*
 * Read the package.json file located in the same directory as the
 * script using the fs.promises.readFile method, which returns a promise.
 */
    log('getPackages starting');
    const packageJsonPath = path.join(__dirname, '../package.json');
    log(`packageJsonPath ${packageJsonPath}`);
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    // console.log('packageJson', packageJson);

    log(`packageJson keys ${Object.keys(packageJson)}`);
    log(packageJson);
    return packageJson;
}

function getPackagesPromise() {
    return new Promise(async (resolve, reject) => {
        try {
            log('getPackages starting');
            const packageJsonPath = path.join(__dirname, '../package.json');
            log(`packageJsonPath ${packageJsonPath}`);

            const packageJsonData = await fsPromises.readFile(packageJsonPath, 'utf8');
            log(`packageJsonData ${packageJsonData}`);
            const packageJson = JSON.parse(packageJsonData);
            log(`packageJson' ${packageJson}`);
            const dependencies = packageJson.dependencies || {};
            log(`packageJson dependencies ${dependencies}`);
            const devDependencies = packageJson.devDependencies || {};
            log(`packageJson devDependencies ${devDependencies}`);

            const allPackages = { ...dependencies, ...devDependencies };
            log(`packageJson all allPackages ${allPackages}`);
            resolve(allPackages);
        } catch (error) {
            reject(error);
        }
    });
}

console.log('call getPackages', getPackages());
module.exports = getPackages, getPackagesPromise;
/* getPackagesPromise()
    .then(packages => console.log('call getPackages', packages))
    .catch(error => console.error('Error:', error));
 */
// Run this script with the following command:
// node get-packages-in-package-json.js
// The output will be similar to:
// 2021-08-01T06:14:03.760Z: getPackages starting
