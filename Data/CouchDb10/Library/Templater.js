/**
 * @author Charlie Calvert
 */

var fs = require('fs');
var handlebars = require('handlebars');

handlebars.registerHelper('list', function(context, block) {
    console.log('In helper');
    console.log(context);
    console.log(context.length);
    console.log(block);
    
    var ret = "<ul>";

    for (var i = 0, j = context.length; i < j; i++) {
        ret = ret + "<li>" + context[i].key + ": " + context[i].value + "</li>";
    }

    return ret + "</ul>";
});

var Templater = (function() {'use strict';

    function Templater() {
    }

    // Please not that we convert to a string.
    var readHtml = function(fileName) {
        return String(fs.readFileSync(fileName));
    };


    Templater.prototype.addNames = function(fileName, data) {
        console.log('Here is the data: ')
        console.log(data);
        
        var mainFile = readHtml(fileName);
        
        console.log('Compile template');

        var template = handlebars.compile(mainFile);

        console.log('Build template');
        
        var result = template({   
            nav: data,         
            headGuy : "Test01"
        });
        
        console.log('Return result')

        return result;
    };

    return Templater;

})();

exports.template = new Templater()
