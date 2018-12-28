const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const inquirer = require('inquirer');
var elvenCode = require('elven-code');
var elfUtils = elvenCode.elfUtils;
var elfLog = elvenCode.elfLog('elf-menu');

clear();
console.log(
    chalk.yellow(
        figlet.textSync('Elf Couch', {horizontalLayout: 'full'})
    )
);

const foo = {
    askGithubCredentials: () => {
        const questions = [
            {
                name: 'username',
                type: 'input',
                message: 'Enter your GitHub username or e-mail address:',
                validate: function (value) {
                    if (value.length) {
                        return true;
                    } else {
                        return 'Please enter your username or e-mail address.';
                    }
                }
            },
            {
                name: 'password',
                type: 'password',
                message: 'Enter your password:',
                validate: function (value) {
                    if (value.length) {
                        return true;
                    } else {
                        return 'Please enter your password.';
                    }
                }
            }
        ];
        return inquirer.prompt(questions);
    },
};

function showMenu(handleInput) {
    elfLog.details('listing');
    var options = [{
        type: 'list',
        name: 'userChoice',
        message: 'What do you want to do?\n  =======================\n ',
        choices: [
            new inquirer.Separator(),
            'Say hello',
            'create',
            new inquirer.Separator(),
            'show',
            'put',
            'get',
            'getAll',
            new inquirer.Separator(),
            'Exit',
            new inquirer.Separator()
        ],
        filter: function(value) {
            elfLog.details('filter');
            value = elfUtils.getFirstWord(value);
            return value.toLowerCase();
        }
    }];

    inquirer.prompt(options).then(function(answer) {
        handleInput(answer.userChoice)
    });

}

const run = async () => {
    const credentials = await foo.askGithubCredentials();
    console.log(credentials);
};

module.exports.showMenu = showMenu;
