var ElvenImages = (function() {
    'use strict';

    var elvenCode = require('isit322-calvert');
    var elfUtils = elvenCode.elfUtils;
    var elfLog = elvenCode.elfLog;
    var inquirer = require('inquirer');    
    var imageHelp = require('elven-site-tools').imageHelp;

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
        var makeMarkdown = new imageHelp.MakeMarkdown();
        makeMarkdown.deleteMarkdownFileWithImages(function(result) {
            console.log(result);
        })
    }

    function makeMarkdown() {
        var makeMarkdown = new imageHelp.MakeMarkdown();
        makeMarkdown.loadAndRun(function(report) {
            if (report.spacesInFileNames) {
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
            if (report.markdownFileExists) {
                console.log('Markdown file exists: ', report.markdownFileWithImages)
            }
            console.log(report);
        });

    }

    function findUsedImages() {
        elfLog.details("findUserImages");
        var getNotUsed = new imageHelp.GetNotUsed();
        getNotUsed.loadConfig(function(report) {
            console.log(report);
        });
    }

    function handleInput(userChoice) {
        switch (userChoice) {
            case 'find':
                findUsedImages();
                break;
            case 'make':
                makeMarkdown();
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
