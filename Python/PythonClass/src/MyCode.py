#!/usr/bin/python

'''
Created on Mar 13, 2012

This program demonstrates several things:

	* Importing a module
	* Create an instance of a class
	* Calling a method of a class
	* Passing a parameter to a method of a class.
	
See also, the CreateHtml file importanted by this Python module.

@author: Charlie
'''
import CreateHtml

createHtml = CreateHtml.CreateHtml()    
createHtml.createHeader()
createHtml.htmlBody("Hello, CGI World!")