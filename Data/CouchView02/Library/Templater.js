/**
 * @author Charlie Calvert
 */

var fs = require('fs');
var handlebars = require('handlebars');

handlebars.registerHelper('list', function(context, block) {
    'use strict';
    console.log('In helper');
    console.log(context);
    console.log(context.length);
    console.log(block);

    var description = '<p>Here are the rows returned by the view</p>';
    var content = description + '<p>' + JSON.stringify(context) + '</p>';
    var ret = content + '<ul>';

    for (var i = 0, j = context.length; i < j; i++) {
        ret = ret + '<li>' + context[i] + '</li>';
    }

    return ret + '</ul>';
});

handlebars.registerHelper('states', function(context, block) {
    'use strict';
    console.log('In helper');
    console.log(context);
    console.log(context.length);
    console.log(block);

    var description = '<p>Here are the rows returned by the view</p>';
    var content = description + '<p>' + JSON.stringify(context) + '</p>';
    var formattedData = content + 'The formated data: ';
    var ret = formattedData + '<ul>';

    for (var i = 0, j = context.length; i < j; i++) {
        ret = ret + '<li>' + context[i].name + ': ' + context[i].capital + '</li>';
    }

    return ret + '</ul>';
});

var Templater = (function() {
    'use strict';

    function Templater() {}

    // Please note that we convert to a string.
    var readHtml = function(fileName) {
        return String(fs.readFileSync(fileName));
    };

    Templater.prototype.addNames = function(fileName, data) {

        var mainFile = readHtml(fileName);

        var template = handlebars.compile(mainFile);

        var result = template({
            nav: data,
            description: 'The templated HTML in this section was created with handlebars.',
            headGuy: fileName
        });

        console.log('Return result');

        return result;
    };

    return Templater;

})();

exports.template = new Templater();
