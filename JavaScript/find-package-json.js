#!/usr/bin/env node
// https://stackoverflow.com/questions/2727167/how-do-you-get-a-list-of-the-names-of-all-files-present-in-a-directory-in-node-j
// Run a command in all subdirectories that contain a package.json file
// except node_modules and .git directories.
// Usage: node clean-all.js

import { execSync } from 'child_process';
import fs, { writeFileSync, readFileSync } from 'node:fs';
import { walkSimple } from 'walk-directories';
import { UserException } from 'elven-code';
import createDebugMessages from 'debug';
const debug = createDebugMessages('joj:clean-all');
const debugContents = createDebugMessages('joj:clean-all:contents');

const startDir = process.cwd();
const allDirectories = [];

function processFile(fileInfo, readFile = false) {
    const { directory, fileName, fullPath } = fileInfo;
    if (readFile) {
        const contents = fs.readFileSync(fullPath, 'utf8');
        debugContents('contents', contents);
    }
    debug('fullPath', fullPath);
    debug('directory', directory);
    debug('fileName', fileName);
    allDirectories.push(directory);
}

async function walk(directory, ext) {
    const fileInfos = await walkSimple(directory, ext)
        .catch((error) => {
            debug('ERROR', error);
            throw new UserException('no infos');
        });
    if (fileInfos.length === 0) {
        throw new UserException('We received nothing');
    }
    for (const fileInfo of fileInfos) {
        debugContents('fileInfo', fileInfo);
        // debug('fileInfo.file', fileInfo.fileName);
        if (fileInfo.fileName === 'package.json') {
            processFile(fileInfo)
        }
    }
    const jsonFile = `${process.env.JSOBJECTS}/JavaScript/all-directories.txt`;
    // writeFileSync(jsonFile, JSON.stringify(allDirectories, null, 4));
    const allDirectoriesString = allDirectories.join('\n');
    writeFileSync(jsonFile, `${allDirectoriesString}\n`);
    console.log('Wrote', allDirectories.length, 'directory names to', jsonFile);
}

const directory = `${process.env.JSOBJECTS}/JavaScript`;
const ext = '.json';
console.log('Seaching for package.json files in', directory);
console.log('This will take a while...');
walk(directory, ext);
