var ElvenImages = (function() {
    'use strict';

    var elvenCode = require('elven-code');
    var elfUtils = elvenCode.elfUtils;
    var elfLog = elvenCode.elfLog;
    var inquirer = require('inquirer');
    var makeMarkdown = require('elven-site-tools').makeMarkdown;
    var getNotUsed = require('elven-site-tools').getNotUsed;

    console.log("MAKE MARK DOWN", makeMarkdown);

    function ElvenImages() {
        elfLog.setLevel(elfLog.logLevelDetails);
        list();
    }

    function list() {
        elfLog.details('listing');
        var options = [{
            type: 'list',
            name: 'userChoice',
            message: 'What do you want to do?\n  =======================\n ',
            choices: [
                new inquirer.Separator(),
                'Make markdown file',
                'Delete markdown file',
                new inquirer.Separator(),
                'Find used images',
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

    function deleteMarkdown() {
        //var makeMarkdown = new MakeMarkdown();
        try {
            makeMarkdown.deleteMarkdownFileWithImages(function(result) {
                if (result.deletedFile) {
                    console.log("Deleted: ", result.fileName);
                } else {
                    console.log('Failed to delete: ', result.error.path);
                    console.log('Details: ', result.error.toString());
                }
            });
        } catch(e) {
            console.log("HANDLING DELETE");
            console.log(e);
        }
    }

    function runMakeMarkdown() {
        //var makeMarkdown = new MakeMarkdown();
        try {
        makeMarkdown.loadAndRun(function(reports) {
            if (reports.spacesInFileNames) {
                console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
                console.log('You have spaces in one or more file names.');
                console.log('The problem is probably in your images directory.');
                console.log('FileNames or Directories with spaces in their ');
                console.log('names is not a good idea. Run this command in ');
                console.log('the offending directory and then restart:');
                console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
                console.log('find -name "* *" -type f | rename "s/ /_/g"');
                console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
                return;
            }
            var markdownExists = false;
            console.log('===========');
            reports.forEach(function(report) {
                if (report.markdownFileExists) {
                    console.log('Markdown file exists: ', report.markdownFileWithImages)
                    markdownExists = true;
                } else if (report.success) {
                    console.log("Created: ", report.markdownFileWithImages);
                    console.log("Created: ", report.allImagesFile);
                    console.log('===========');
                }
            });
            if (markdownExists) {
                console.log('===========');
                console.log('A markdown file exists.');
                console.log('Save your work and run again to delete');
                console.log('===========');
            }
            //console.log("OUTPUT:", reports);
        });
    } catch(e) {
        console.log(e);
    }
    }

    function findUsedImages() {
        elfLog.details("findUserImages");
        //var getNotUsed = new imageHelp.GetNotUsed();
        var count = 0;
        getNotUsed.loadConfig(function(report) {
           console.log("REPORT DONE: ", ++count);
        });
    }

    function handleInput(userChoice) {
        switch (userChoice) {
            case 'find':
                findUsedImages();
                break;
            case 'make':
                runMakeMarkdown();
                break;
            case 'delete':
                deleteMarkdown();
                break;
            case 'exit':
                return;
            default:
                throw 'unknown choice';
        }
    }

    return ElvenImages;

})();

var elvenImages = new ElvenImages();
