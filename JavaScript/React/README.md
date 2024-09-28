## JsObjects React

-- RestExpress: Simple Express Project + React. No create-react-app

## The JavaScript Scripts

In "/home/ubuntu/Git/JsObjects/JavaScript/React":

```text
gulpfile.js
logger.js
make-audit-data-report.js: Create auditDataReports.json
make-gulp-files.js
run-ncu.js
```

In "/home/ubuntu/Git/JsObjects/JavaScript/React/src":

```text
callRunParseJson.js
debugParams.js
exec-ncu.js
parse-json-func.js
programStub.js
run-exec-ncu.js
run-parse-json.js
utils.js
```

## Installation

Building on [Dennis Williamson's answer](https://stackoverflow.com/a/3294514/253576).

```bash
#!/bin/bash

Get only the directory name from a subdirectory:

ls -d ${JSOBJECTS}/JavaScript/React/*/  |  while read line; do
   echo "$(basename $line)"
done
```

Suppose JsObjects has 7 subdirecties:

```bash
$ ls -d /home/$USER/Git/JsObjects/*/
/home/ubuntu/Git/JsObjects/Cordova/            /home/ubuntu/Git/JsObjects/JavaScript/
/home/ubuntu/Git/JsObjects/Data/               /home/ubuntu/Git/JsObjects/Python/
/home/ubuntu/Git/JsObjects/HtmlCssJavascript/  /home/ubuntu/Git/JsObjects/Utilities/
/home/ubuntu/Git/JsObjects/JQueryMobile/
```

We can get the directory names like this:

```bash
$ ls -d /home/$USER/Git/JsObjects/*/  |  while read line; do
   echo "$(basename $line)"
done
Cordova
Data
HtmlCssJavascript
JQueryMobile
JavaScript
Python
Utilities
```

## React Simple

```json
{
  "version": "1.0.1",
  "description": "Check React Code",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "npm run reactSimple && npm run simpleState && npm run simpleInputs && npm run simpleRadioButtons",
    "reactSimple": "cd react-simple && npm start",
    "simpleState": "cd simple-state && npm start",
    "simpleInputs": "cd simple-inputs && npm start",
    "simpleRadioButtons": "cd simple-radio-buttons && npm start"
  },
  "repository": {
    "type": "git",
    "url": "git+ssh://git@github.com/charliecalvert/JsObjects.git"
  },
  "keywords": [
    "react",
    "eslint",
    "prettier"
  ],
  "author": "Charlie Calvert",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/charliecalvert/JsObjects/issues"
  }
}
```

TODO: Put the code and text show below on Elvenware

## AI Promise Sample Preferred

// How can I wait for this call to exec to finish?

This is the preferred way to write the code. It is more
readable and easier to understand.

```JavaScript
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched!");
    }, 1000);
  });
};

const getData = async () => {
  const data = await fetchData();
  console.log(data); // Output: Data fetched!
};

getData();
```

## AI Promise Sample Suggestion 1

// When I call runParseJson from another file or module
// how can I wait for the call to execPromise to finish
// and return the result of the call to execPromise?

This is the way the code can be written. It is not as
readable as the preferred way shown above.

```JavaScript
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched!");
    }, 1000);
  });
};

fetchData().then((data) => {
  console.log(data); // Output: Data fetched!
});
```

## AI Promise Sample Suggestion 2

```javascript
const { exec } = require('child_process');
const { log } = require('console');
const fs = require('fs');
const path = require('path');

function execPromise() {
    return new Promise((resolve, reject) => {
        exec('ncu -u', (error, stdout, stderr) => {
            if (error) {
                console.error(`Error executing ncu -u in execPromise: ${error.message} for ${packageJsonPath}`);
                reject(error);
                return;
            }
            if (stderr) {
                console.error(`stderr: ${stderr}`);
                reject(stderr);
                return;
            }

            const currentDateTime = getCurrentDateTime();
            const result = `[\n"${currentDateTime}",\n${stdout}\n]`;
            log(`Command output: ${result}`);
            resolve(result);
        });
    });
}

// Function to check for the presence of a string in a file
function checkStringInFile(filePath, searchString) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(`Error reading file: ${err.message}`);
            return;
        }

        if (data.includes(searchString)) {
            // console.log(`The string "${searchString}" is present in the file.`);
            function execPromise() {
                return new Promise((resolve, reject) => {
                    exec('ncu -u', (error, stdout, stderr) => {
                        if (error) {
                            console.error(`Error executing ncu -u in execPromise: ${error.message}`);
                            reject(error);
                            return;
                        }
                        if (stderr) {
                            console.error(`stderr: ${stderr}`);
                            reject(stderr);
                            return;
                        }

                        const currentDateTime = getCurrentDateTime();
                        const result = `[\n"${currentDateTime}",\n${stdout}\n]`;
                        log(`Command output: ${result}`);
                        resolve(result);
                    });
                });
            }

            // Function to check for the presence of a string in a file
            function checkStringInFile(filePath, searchString) {
                fs.readFile(filePath, 'utf8', (err, data) => {
                    if (err) {
                        console.error(`Error reading file: ${err.message}`);
                        return;
                    }

                    if (data.includes(searchString)) {
                        console.log(`The string "${searchString}" is present in the file.`);
                        runExecPromise();
                    } else {
                        console.log(`The string "${searchString}" is not present in the file.`);
                    }
                });
            }

            async function runExecPromise() {
                try {
                    const result = await execPromise();
                    console.log('Command output:', result);
                    return result;
                } catch (error) {
                    console.error('Error executing command in runExecPromise:', error);
                    process.exit(1);
                }
            }

            // Example usage
            const filePath = path.join(__dirname, 'ncu-output.txt'); // Replace with your file path
            const searchString = 'Run ncu -u to upgrade package.json'; // Replace with the string you want to search for

            checkStringInFile(filePath, searchString);
            return null;
            // execPromise();
        } else {
            console.log(`The string "${searchString}" is not present in the file.`);
        }
    });
}
```
