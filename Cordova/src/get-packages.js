const fs = require('fs').promises;
const path = require('path');

/*
* Reads the package.json file and returns all dependencies and devDependencies.
* @returns {Promise<Object>} A promise that resolves to an object containing all dependencies and devDependencies.
*/
function getPackages() {
    return new Promise(async (resolve, reject) => {
        try {
            /*
            * Read the package.json file located in the same directory as the
            * script using the fs.promises.readFile method, which returns
            * a promise.*/
            const packageJsonPath = path.join(__dirname, '../package.json');
            const packageJsonData = await fs.readFile(packageJsonPath, 'utf8');

            /*
             * Parse the package.json file. Convert it from a
             * JSON string to a JavaScript object.
             */
            const packageJson = JSON.parse(packageJsonData);

            // Extract the dependencies and devDependencies properties
            // from the JSON object. If these properties are
            // not present, it defaults to an empty object.
            const dependencies = packageJson.dependencies || {};
            const devDependencies = packageJson.devDependencies || {};

            /*
                * Combine the dependencies and devDependencies objects
                * into a single object using the spread operator.
            */
            const allPackages = { ...dependencies, ...devDependencies };

            /*
                * returns a promise that resolves with the combined
                * dependencies object or rejects with an error if any step fails.
            */
            resolve(allPackages);
        } catch (error) {
            reject(error);
        }
    });
}

// Export the getPackages function
module.exports = getPackages;
