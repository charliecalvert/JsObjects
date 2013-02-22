#!/usr/bin/python

# Import the CGI module
import cgi

# Required header that tells the browser how to render the HTML.
print "Content-Type: text/html\n\n"
print
print 'Status: 200 OK'
print 'Content-type: text/html'
print
print '<html>'
print '<head><title>Python Sample CGI</title></head>'
print '<body>'
print '<h1>This is an H1 header</h1>'
print '<p>' #this is a comment
print 'Some text inside paragraph tags'
print '</p>'
print '</body>'
print '</html>'
