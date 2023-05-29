import chalk from 'chalk';

function checkResultInstall(result, directory) {
    if (result.toString().includes('ERR!')) {
        console.log(chalk.redBright('ERROR'), result.toString());
        console.log(chalk.blue('directory-a'), directory);
        return false;
    }
    if (!result.toString().includes('found 0 vulnerabilities')) {
        console.log(chalk.redBright('ERROR'), result.toString());
        console.log(chalk.greenBright('directory-b'), directory);
        return true;
    }
    return true;
}

function checkResultNcu(result, directory) {
    if (result.toString().includes('ERR!')) {
        console.log(chalk.redBright('ERROR'), result.toString());
        console.log(chalk.blue('directory-a'), directory);
        return false;
    }
    if (!result.toString().includes('All dependencies match the latest package versions')) {
        console.log(chalk.redBright('ERROR'), result.toString());
        console.log(chalk.greenBright('directory-b'), directory);
        return false;
    }
    return true;
}

export { checkResultInstall, checkResultNcu };
