import { execSync } from 'child_process';
import chalk from 'chalk';
import fs, { writeFileSync, readFileSync } from 'node:fs';
import { UserException, elfFiles } from 'elven-code';
import createDebugMessages from 'debug';
import { argv } from 'process';
const debug = createDebugMessages('joj:run-npm-start');
const debugContents = createDebugMessages('joj:run-npm-start:contents');

if (argv.length < 3) {
    throw new UserException('Usage: node run-npm-start.js <directory>');
}

function checkDirectory(testing = false) {

    const dirs = readFileSync(`${process.env.JSOBJECTS}/JavaScript/all-directories.txt`, 'utf8');
    const directories = dirs.split('\n');
    debug('directories length', directories.length);
    debug('searching for', argv[2]);
    if (directories.length === 0) {
        throw new UserException('No directories found');
    }
    for (const directory of directories) {
        if (directory.includes(argv[2])) {
            debug('directory', directory);
            if (directory.includes('node_modules') || directory.includes('.git')) {
                console.log('Skipping', directory);
                continue;
            }
            console.log('Running npm install in', directory);
            if (!testing) {
                try {
                    process.chdir(directory);
                    // const result = execSync('npm install',
                    //     {stdio: 'inherit'});
                    const result = execSync('npm install');
                    console.log('result', result.toString());
                    if (result.toString().includes('ERR!')) {
                        console.log(chalk.redBright('ERROR'), result.toString());
                        console.log(chalk.blue('directory-a'), directory);
                        break;
                    }
                    if (!result.toString().includes('found 0 vulnerabilities')) {
                        console.log(chalk.redBright('ERROR'), result.toString());
                        console.log(chalk.greenBright('directory-b'), directory);
                        break;
                    }
                }   catch (error) {
                    console.log('ERROR', error);
                    break;
                }
            }
        }
    }
}

checkDirectory();