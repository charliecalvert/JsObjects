const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');
const {log} = require('./logger');

function getPackages() {
    log('getPackages starting');
    const packageJsonPath = path.join(__dirname, 'package.json');
    log(`packageJsonPath ${packageJsonPath}`);
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    // console.log('packageJson', packageJson);
    log
    log(`packageJson keys ${Object.keys(packageJson)}`);
    log(packageJson);
    return packageJson;
    /* console.log('packageJson deps', packageJson.dependencies);
    console.log('packageJson devdeps', packageJson.devDependencies);
    // log(`packageJson deps ${packageJson.dependencies}`);
    const dependencies = packageJson.dependencies || {};
    log(`packageJson dependencies ${dependencies}`);
    const devDependencies = packageJson.devDependencies || {};
    log(`packageJson devDependencies ${devDependencies}`);

    const allPackages = { ...dependencies, ...devDependencies };
    log(`packageJson all allPackages ${allPackages}`);

    return allPackages; */
}

function getPackagesPromise() {
    return new Promise(async (resolve, reject) => {
        try {
            log('getPackages starting');
            const packageJsonPath = path.join(__dirname, 'package.json');
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
/* getPackagesPromise()
    .then(packages => console.log('call getPackages', packages))
    .catch(error => console.error('Error:', error));
 */
// Run this script with the following command:
// node get-packages-in-package-json.js
// The output will be similar to:
// 2021-08-01T06:14:03.760Z: getPackages starting
