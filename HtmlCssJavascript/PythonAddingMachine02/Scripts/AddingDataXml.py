#!/usr/bin/python

# Import the CGI module
import MySQLdb
import cgi
import cgitb

cgitb.enable()

# Test with: http://192.168.0.100:8000/cgi-bin/AddingDataXml.py?operanda=2&operandb=3&answer=5
# Required header that tells the browser how to render the HTML.


def getHeader():
	return """Content-Type: text/xml\n
<?xml version='1.0'?>
<additions>"""

def getClose():
	return "</additions>"
	
# Define function to generate HTML form.
def generate_form(operanda, operandb, answer):
	xml = getHeader()
	sql = "insert into additions (operanda, operandb, answer) values ({0}, {1}, {2});".format(operanda, operandb, answer)
	insertData(sql)		
	xml += "<addition>"
	xml += "<operanda>" + operanda + "</operanda>"
	xml += "<operandb>" + operandb + "</operandb>"
	xml += "<answer>" + answer + "</answer>"
	xml += "</addition>"
	xml += "</additions>"
	print xml
	

def insertData(sql):
	db = MySQLdb.connect(host="localhost", user="charlie", passwd="bar", db="charlie")
	cursor = db.cursor()
	cursor.execute(sql)
	db.commit()	
	cursor.close()
	db.close()

def generateError(error):
	xml = getHeader()
	xml += "<addition>" + str(error) + "</addition>"
	xml += getClose()
	print xml;
	
def runAction():
	form = cgi.FieldStorage()
	if (form.has_key("answer") and 
		form.has_key("operanda") and 
		form.has_key("operandb")):
		generate_form(form["operanda"].value, form["operandb"].value, form["answer"].value)	
	else:
		generateError(form.list);


		
runAction()