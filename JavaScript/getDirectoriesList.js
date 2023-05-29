import { readFileSync } from 'node:fs';
import { UserException } from 'elven-code';

import createDebugMessages from 'debug';
const debug = createDebugMessages('joj:run-npm-start');

export function getDirectoriesList() {
    const dirs = readFileSync(`${process.env.JSOBJECTS}/JavaScript/all-directories.txt`, 'utf8');
    const directories = dirs.split('\n');
    debug('directories length', directories.length);

    if (directories.length === 0) {
        throw new UserException('No directories found');
    }
    return directories;
}
