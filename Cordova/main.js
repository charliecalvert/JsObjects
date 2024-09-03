const getPackages = require('./src/get-packages');
const getDevDeps = require('./src/get-deps-devdeps.js');
const getPackagesPackageJsons = require('./src/get-packages-in-package-json.js');



// Call the getPackages function and log the result
// to the console.
getPackagesPackageJsons();
getDevDeps();
/*
* Call the getPackages function and log the result
* to the console.
*
* If an error occurs, log the error to the console.
*/
getPackages()
    .then(packages => console.log(packages))
    .catch(error => console.error('Error:', error));