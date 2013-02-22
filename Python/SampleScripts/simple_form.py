#!/usr/bin/python

# Import the CGI module
import cgi

# Required header that tells the browser how to render the HTML.
print "Content-Type: text/html\n\n"

# Define function to generate HTML form.
def generate_form():
	print "<html>\n"
	print "<head>\n"
	print "\t<meta content='text/html; charset=utf-8' http-equiv='Content-Type'>\n"
	print "\t<title>Name and Age Form</title>\n"
	print "</head>\n"
	print "<body bgcolor = white>\n"
	print "\t<h3>Please, enter your name and age.</h3>\n"
	print "\t<table border = 0>\n"
	print "\t\t<form method = post action = \"simple_form.py\">\n"
	print "\t\t<tr><th>Name:</th><td><input type = text name = \"name\"></td><tr>\n"
	print "\t\t<tr><th>Age:</th><td><input type = text name = \"age\"></td></tr>\n"
	print "\t</table>\n"
	print "\t<input type = hidden name = \"action\" value = \"display\">\n"
	print "\t<input type = submit value = \"Enter\">\n"
	print "\t</form>\n"
	print "</body>\n"
	print "</html>\n"

# Define function display data.
def display_data(name, age):
	print "<html>\n"
	print "<head>\n"
	print "\t<title>Age and Name Information Form</title>\n"
	print "</head>\n"
	print "<body>\n"
	print "<h1>Name and Age Response Form</h1>"
	print "<p>The name entered was: %s</p>" % (name)
	print "<p>The age entered was: %s</p>" % (age)
	print "<p>%s, you are %s years old.</p>" % (name, age)
	print "</BODY>\n"
	print "</HTML>\n"

# Define main function.
def main():
	form = cgi.FieldStorage()
	if (form.has_key("action") and form.has_key("name") and form.has_key("age")):
		if (form["action"].value == "display"):
			display_data(form["name"].value, form["age"].value)
	else:
		generate_form()

def mainTest():
	generate_form()
	
# Call main function.
main()
