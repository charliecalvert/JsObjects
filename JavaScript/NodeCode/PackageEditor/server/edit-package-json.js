const elfUtils = require('elven-code').elfUtils;

const fileName = 'package.json';
elfUtils.readFile(fileName)
    .then((json) => {
        const packageJson = JSON.parse(json.result);
        packageJson.scripts['start-service'] = "node ./bin/www";
        return packageJson;
    })
    .then((json) => {
        console.log('Ensuring package.json contains start-service', JSON.stringify(json, null, 4));
        elfUtils.writeFile((fileName), JSON.stringify(json, null, 4), (result) => { console.log(result)});
    })
    .catch((err) => {
        console.log(err);
    });