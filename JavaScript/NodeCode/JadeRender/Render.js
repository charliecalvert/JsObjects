#! /usr/bin/node
 
var jade = require('jade');

options = {
	
	/* Used in exceptions, and required for relative includes and extends */
"filename": "Render.js",
"title": "My Title"

/* If the doctype is not specified as part of the template, you can specify it here. It is sometimes useful to get self-closing tags and remove mirroring of boolean attributes. 
// doctype:string

	pretty:boolean | string
Adds whitespace to the resulting html to make it easier for a human to read using ' ' as indentation. If a string is specified, that will be used as indentation instead (e.g. '\t').
self:boolean
Use a self namespace to hold the locals (false by default)
debug:boolean
If set to true, the tokens and function body is logged to stdout
compileDebug:boolean
Set this to false to disable debugging instrumentation (recommended in production). Set it to true to include the function source in the compiled template for better error messages (sometimes useful in development).
cache:boolean
If set to true, compiled functions are cached. filename must be set as the cache key.
compiler:class
Override the default compiler
parser:class
Override the default parser
globals:Array.<string>
Add a list of global names to make accessible in templates */
}

var html = jade.renderFile('JadeIntro.jade', options);

console.log(html);
