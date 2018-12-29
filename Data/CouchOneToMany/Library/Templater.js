/**
 * @author Charlie Calvert
 */

var fs = require('fs');
var handlebars = require('handlebars');

/* handlebars.registerHelper('list', function(context, block) {
    console.log('In helper');
    console.log(context);
    console.log(context.length);
    console.log(block);
    
    var description = "<p>Here are the rows returned by the view</p>";
    var content = description + "<p>" + JSON.stringify(context) + "</p>";
    var ret = content + "<ul>";

    for (var i = 0, j = context.length; i < j; i++) {
        ret = ret + "<li>" + context[i].id + "</li>";
    }

    return ret + "</ul>";
}); */

handlebars.registerHelper('list', function(context, block) {
    console.log('In helper');
    console.log(context);
    console.log(context.length);
    console.log(block);

    var base =
        'Based on <a href=\'http://wiki.apache.org/couchdb/EntityRelationship#One_to_Many\'>this</a>';
    var description = base + '<p>Here are the rows returned by the view</p>';
    var content = description + '<p>' + JSON.stringify(context) + '</p>';
    var ret = content + '<ul>';

    for (var i = 0, j = context.length; i < j; i++) {
        if (context[i].type === 'contact') {
            ret = ret + '<li>' + context[i].lastName + '</li>';
        } else {
            ret =
                ret +
                '<li>' +
                context[i].phone_type +
                ': ' +
                context[i]._id +
                '</li>';
        }
    }

    return ret + '</ul>';
});

var Templater = (function() {
    'use strict';

    function Templater() {}

    // Please not that we convert to a string.
    var readHtml = function(fileName) {
        return String(fs.readFileSync(fileName));
    };

    Templater.prototype.addNames = function(fileName, data) {
        console.log('Here is the data: ');
        console.log(data);

        var mainFile = readHtml(fileName);

        console.log('Compile template');

        var template = handlebars.compile(mainFile);

        console.log('Build template');

        var result = template({
            nav: data,
            description:
                'The templated HTML in this section was created with handlebars.',
            headGuy: 'Templated HTML'
        });

        console.log('Return result');

        return result;
    };

    return Templater;
})();

exports.template = new Templater();
