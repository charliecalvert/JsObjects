/**
 * @author Charlie Calvert
 */
var fs = require('fs');
var handlebars = require('handlebars');

/*jshint jquery:true, browser: true */
/*global Handlebars: false */
function writeHtml(fileName, data) {
	fs.writeFile(fileName, data, function(err) {
		if(err) {
		  console.log(err);
		} else {
		  console.log("JSON saved to " + fileName);
		}
	});	
}

function readHtml() {
	return String(fs.readFileSync('index.html'));
}

function addNames(initFirstName, initLastName) {
    'use strict';
            
    var script = readHtml();    
	// console.log(script);
	
    var template=handlebars.compile(script);    
    
    var result = template({
        MyStuff: 'This is what we insert.'
    });    
    
    writeHtml('upLoadMe.html', result); 
}

addNames();