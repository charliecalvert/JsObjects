var program = require('commander');
var inquirer = require("inquirer");

function foo() {
    program
        .version('0.0.1')
        .option('-p, --peppers', 'Add peppers')
        .option('-P, --pineapple', 'Add pineapple')
        .option('-b, --bbq-sauce', 'Add bbq sauce')
        .parse(process.argv);

    if (program.peppers) {
        console.log('  - peppers');
    } else if (program.pineapple) {
        console.log('  - pineapple');
    } else if (program.bbqSauce) {
        console.log('  - bbq');
    } else {
        //console.log(' -- help for help');
        program.help();
    }
}

function bar() {
    function range(val) {
        return val.split('..').map(Number);
    }

    function list(val) {
        return val.split(',');
    }

    function collect(val, memo) {
        memo.push(val);
        return memo;
    }

    function increaseVerbosity(v, total) {
        return total + 1;
    }

    program
        .version('0.0.1')
        .usage('[options] <file ...>')
        .option('-i, --integer <n>', 'An integer argument', parseInt)
        .option('-f, --float <n>', 'A float argument', parseFloat)
        .option('-r, --range <a>..<b>', 'A range', range)
        .option('-l, --list <items>', 'A list', list)
        .option('-o, --optional [value]', 'An optional value')
        .option('-c, --collect [value]', 'A repeatable value', collect, [])
        .option('-v, --verbose', 'A value that can be increased', increaseVerbosity, 0)
        .parse(process.argv);

    console.log(' int: %j', program.integer);
    console.log(' float: %j', program.float);
    console.log(' optional: %j', program.optional);
    program.range = program.range || [];
    console.log(' range: %j..%j', program.range[0], program.range[1]);
    console.log(' list: %j', program.list);
    console.log(' collect: %j', program.collect);
    console.log(' verbosity: %j', program.verbose);
    console.log(' args: %j', program.args);
}

function qux() {
    function list() {
        console.log("This is list");
    }

    program
        .version('0.0.1')
        .command('install [name]', 'install one or more packages')
        .command('search [query]', 'search with optional query')
        .command('list', 'list packages installed', {isDefault: true})
        .parse(process.argv);
}

function goober() {
    inquirer.prompt([
        {
            type: "checkbox",
            message: "Select toppings",
            name: "toppings",
            choices: [
                new inquirer.Separator(" = The Meats = "),
                {
                    name: "Peperonni"
                },
                {
                    name: "Ham"
                },
                {
                    name: "Ground Meat"
                },
                {
                    name: "Bacon"
                },
                new inquirer.Separator(" = The Cheeses = "),
                {
                    name: "Mozzarella",
                    checked: true
                },
                {
                    name: "Cheddar"
                },
                {
                    name: "Parmesan"
                },
                new inquirer.Separator(" = The usual ="),
                {
                    name: "Mushroom"
                },
                {
                    name: "Tomato"
                },
                new inquirer.Separator(" = The extras = "),
                {
                    name: "Pineapple",
                },
                {
                    name: "Olives",
                    disabled: "out of stock"
                },
                {
                    name: "Extra cheese"
                }
            ],
            validate: function (answer) {
                if (answer.length < 1) {
                    return "You must choose at least one topping.";
                }
                return true;
            }
        }
    ], function (answers) {
        console.log(JSON.stringify(answers, null, "  "));
    });
}

function expand() {

    inquirer.prompt([
        {
            type: "expand",
            message: "Conflict on `file.js`: ",
            name: "overwrite",
            choices: [
                {
                    key: "y",
                    name: "Overwrite",
                    value: "overwrite"
                },
                {
                    key: "a",
                    name: "Overwrite this one and all next",
                    value: "overwrite_all"
                },
                {
                    key: "d",
                    name: "Show diff",
                    value: "diff"
                },
                new inquirer.Separator(),
                {
                    key: "x",
                    name: "Abort",
                    value: "abort"
                }
            ]
        }
    ], function (answers) {
        console.log(JSON.stringify(answers, null, "  "));
    });
}

function input() {
    "use strict";
    var questions = [
        {
            type: "input",
            name: "first_name",
            message: "What's your first name"
        },
        {
            type: "input",
            name: "last_name",
            message: "What's your last name",
            default: function () {
                return "Doe";
            }
        },
        {
            type: "input",
            name: "phone",
            message: "What's your phone number",
            validate: function (value) {
                var pass = value.match(/^([01]{1})?[\-\.\s]?\(?(\d{3})\)?[\-\.\s]?(\d{3})[\-\.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?){1}(?:\d+)?)?$/i);
                if (pass) {
                    return true;
                } else {
                    return "Please enter a valid phone number";
                }
            }
        }
    ];

    inquirer.prompt(questions, function (answers) {
        console.log(JSON.stringify(answers, null, "  "));
    });
}

function list() {
    "use strict";

    var options = [
        {
            type: "list",
            name: "theme",
            message: "What do you want to do?",
            choices: [
                "Order a pizza",
                "Make a reservation",
                new inquirer.Separator(),
                "Ask opening hours",
                "Talk to the receptionnist"
            ]
        },
        {
            type: "list",
            name: "size",
            message: "What size do you need",
            choices: ["Jumbo", "Large", "Standard", "Medium", "Small", "Micro"],
            filter: function (val) {
                return val.toLowerCase();
            }
        }
    ];

    inquirer.prompt(options, function (answers) {
        console.log(JSON.stringify(answers, null, "  "));
    });

}

expand();
// list();

/*
 var argv = require('yargs')
 .alias('i', 'ingredient')
 .describe('i', 'choose your sandwich ingredients')
 .choices('i', ['peanut-butter', 'jelly', 'banana', 'pickles'])
 .help('help')
 .argv
 */
