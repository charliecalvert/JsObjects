# Jade Render

This is the README file for the JadeRender. It is written in
Markdown.
An example of how to use Node to transform a Jade file into
HTML. 

To run the program, do something like this:

	npm install
	npm start > JadeRender.html

Then load JadeRender.html into your browser.

## The Options Object

If the doctype is not specified as part of the template, 
you can specify it here. It is sometimes useful to get 
self-closing tags and remove mirroring of boolean attributes. 

// doctype:string

### pretty

Adds whitespace to the resulting html to make it easier for a human 
to read using ' ' as indentation. If a string is specified, that 
will be used as indentation instead (e.g. '\t'):

	pretty:boolean | string

### self

Use a self namespace to hold the locals (false by default):

	self:boolean

### Debug

If set to true, the tokens and function body is logged to stdout

	debug:boolean

Set this to false to disable debugging instrumentation (recommended in production). 
Set it to true to include the function source in the compiled template for 
better error messages (sometimes useful in development).

compileDebug:boolean

### cache

If set to true, compiled functions are cached. filename must be set as the cache key.

	cache:boolean

### Compiler

Override the default compiler

	compiler:class

### Parser

Override the default parser

	parser:class

### Globals

Add a list of global names to make accessible in templates */

	globals:Array.<string>

