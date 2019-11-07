const express = require('express');
const router = express.Router();
const fsPromises = require('fs').promises;

/* GET home page. */
router.get('/', function (req, res) {
    'use strict';
    res.render('index', {
        title: 'Promisify Exec'
    });
});

const dirStart = '/tmp/elf/';

async function makeDir(dirName) {
    return await fsPromises.mkdir(dirStart + dirName, {recursive: true});
}

async function writeData(fileName, data) {
    return await fsPromises.writeFile(fileName, data);
}
async function runAll(response) {
    const dirs = ['alfa', 'bravo', 'charlie', 'delta', 'echo'];
    const createdFiles = [];
    for (let dir of dirs) {
        const errMakeDir = await makeDir(dir);
        const fileName = dir + '.txt';
        const dirName = dirStart + dir + '/';
        const errWriteFile = await writeData(fileName, dir);
        const error = {directory: dirName, fileName: fileName, errorMakeDir: errMakeDir || 'no error', errorWriteFile: errWriteFile || 'no error'};
        createdFiles.push(error);
    }
    console.log('About to send', createdFiles);
    if (response) {
        response.send(createdFiles);
    } else {
        return createdFiles;
    }
}

router.get('/make-dir', (request, response) => {
    console.log('MAKEDIR CALLED');
    runAll(response).catch(function (e) {
        console.log(e);
    });
});

module.exports = router;
