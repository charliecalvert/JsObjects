#!/usr/bin/python

# Import the CGI module
import MySQLdb
import cgi
import cgitb

cgitb.enable()

# Required header that tells the browser how to render the HTML.

def getHeader():
	return "Content-Type: text/html\n\n"

def getClose():
	return "</body>\n</html>\n"

# Define function to generate HTML form.
def generateForm(operanda, operandb, answer):
	print getHeader()
	print """
	<html>
	<head>
	<title>Info Form</title>	
	<meta name='viewport' content='width=device-width,minimum-scale=1.0,maximum-scale=1.0' />	
	</head>
	<body bgcolor = white>
	"""	
	description = "The Sum of " + operanda + " and " + operandb + " is: " + answer
	print "<p>" + description + "</p>"
	print "</body>\n"
	print "</body>\n"
	sql = "insert into additions (operanda, operandb, answer) values ({0}, {1}, {2});".format(operanda, operandb, answer)
	insertData(sql)	
	print getClose()
	
def generateError(error):
	xml = getHeader()
	xml += "<addition>" + str(error) + "</addition>"
	xml += getClose()
	print xml;
	
def insertData(sql):
	print "<p>Inserting results into database.</p>"
	print "<p>" + sql + "</p>"
	db = MySQLdb.connect(host="localhost", user="charlie", passwd="bar", db="charlie")
	cursor = db.cursor()
	cursor.execute(sql)
	db.commit()
	print "Number of rows inserted: %d" % cursor.rowcount
	cursor.close()
	db.close()

def runAction():
	form = cgi.FieldStorage()
	if (form.has_key("answer") and form.has_key("operanda") and form.has_key("operandb")):
		generateForm(form["operanda"].value, form["operandb"].value, form["answer"].value)	
	else:
		generateError("Error");

runAction()