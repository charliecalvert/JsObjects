const elfUtils = require('elven-code').elfUtils;

const packageJsonConcurrently = () => {
    const fileName = 'package.json';
    elfUtils.readFile(fileName)
        .then((json) => {
            const packageJson = JSON.parse(json.result);
            packageJson.scripts.start = 'concurrently \'npm run server\' \'npm run client\'';
            packageJson.scripts.server = 'babel-node server/bin/www';
            packageJson.scripts.client = 'babel-node start-client.js';
            packageJson.scripts.lint = 'eslint .';
            return packageJson;
        })
        .then((json) => {
            console.log('Ensuring package.json contains start-service', JSON.stringify(json, null, 4));
            elfUtils.writeFile((fileName), JSON.stringify(json, null, 4), (result) => {
                console.log(result)
            });
        })
        .catch((err) => {
            console.log(err);
        });
};

const packageJsonClient = () => {
    const fileName = 'client/package.json';
    elfUtils.readFile(fileName)
        .then((json) => {
            const packageJson = JSON.parse(json.result);
            packageJson.proxy = "http://localhost:30026";
            return packageJson;
        })
        .then((json) => {
            console.log('Ensuring package.json contains start-service', JSON.stringify(json, null, 4));
            elfUtils.writeFile((fileName), JSON.stringify(json, null, 4), (result) => {
                console.log(result)
            });
        })
        .catch((err) => {
            console.log(err);
        });
};

packageJsonConcurrently();
packageJsonClient();
