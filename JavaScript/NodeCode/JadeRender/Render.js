#! /usr/bin/node
 
var jade = require('jade');

options = {
	"filename": "Render.js",
	"title": "My Title",
	"pretty": true
}

var html = jade.renderFile('JadeIntro.jade', options);

console.log(html);
