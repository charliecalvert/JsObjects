'''
Created on Mar 13, 2012

@author: Charlie

This simple module demonstrates the following:

	* How to create a class
	* How to declare a constructor
	* How to initialize a field of a class
	* How to create methods of a class
	* How to pass parameters to the methods of a class
	* How to convert an integer to a string.
'''

class CreateHtml():
    def __init__(self):
        self.size = 3
    
    def createHeader(self):
        print "Content-type: text/html"
        print
    
    def htmlBody(self, data):
        print "<html>"
        print "<head>"
        print "<title>CGI 101</title>"
        print "</head>"
        print "<body>"
        print "<h1>A First CGI Example</h1>"
        print "<P>" + self.size.__str__() + "</p>"
        print "</body>"
        print "</html>"
