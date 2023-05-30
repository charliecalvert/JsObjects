import { exec, execSync } from 'child_process';
import chalk from 'chalk';
import { UserException, elfFiles } from 'elven-code';
import createDebugMessages from 'debug';
import { argv } from 'process';
import { getDirectoriesList } from './getDirectoriesList.js';
import { checkResultInstall, checkResultNcu } from './checkResult.js';
const debug = createDebugMessages('joj:run-npm-start');

if (argv.length < 3) {
    throw new UserException('Usage: node run-npm-start.js <directory>, or --help');
}
if (argv[2] === '--help') {
    console.log('Usage: node run-npm-start.js <directory>');
    console.log(`The program looks in directories listed in ${chalk.greenBright('all-directories.txt')} for
directories that contain the string you provide.`);
    console.log(`It then runs ${chalk.greenBright('npm install')} in those directories.`);
    console.log(`It skips directories that contain ${chalk.greenBright('node_modules')} or ${chalk.greenBright('.git.')}`);
    console.log(`If you pass in ${chalk.greenBright('Design')} then it will run ${chalk.greenBright('npm install')} in
all the sub-directories of ${chalk.greenBright('Design')} that contain a ${chalk.greenBright('package.json')}.`);
    process.exit(0);
}

function checkDirectory(command, checkResult, testing = false) {
    debug('searching for', argv[2]);
    const directories = getDirectoriesList();
    const brokenDirs = [];
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
                    const result = execSync(command);
                    console.log(chalk.bgYellowBright('Command run result:'), result.toString());
                    if (!checkResult(result, directory)) {
                        if (command === 'ncu') {
                            execSync('ncu -u');
                        } else if (command === 'npm install') {
                            execSync('npm audit fix');
                            // TODO: if audit fix fails, run clean-package-json.sh
                            // execSync('${ELF_TEMPLATES}/JavaScript/clean-package-json.sh');
                            console.log('npm audit fix', directory);
                            brokenDirs.push(directory);
                        }
                        continue
                    }
                } catch (error) {
                    console.log(chalk.redBright(`${command} ERROR:`), error);
                    process.exit(1);
                }
            }
        }
    }
    if (brokenDirs.length > 0) {
        console.log('Broken directories', brokenDirs);
    }
}

let command = 'npm install';
let checkResult = checkResultInstall;
const commandTypes = ['install', 'ncu'];
const commandType = argv[3] || commandTypes[0];
if (commandType === commandTypes[0]) {
    command = 'npm install';
    checkResult = checkResultInstall
} else {
    command = 'ncu';
    checkResult = checkResultNcu
}
debug('command', command);
debug('checkResult', checkResult);
checkDirectory(command, checkResult);


