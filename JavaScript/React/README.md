## JsObjects React

-- RestExpress: Simple Express Project + React. No create-react-app

## Installation

Building on [Dennis Williamson's answer](https://stackoverflow.com/a/3294514/253576) we can get only the directory name from a particular subdirectory:

```bash

```bash
ls -d /home/$USER/Git/React/*/  |  while read line; do
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
