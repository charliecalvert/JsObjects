#!/usr/bin/python

import cgi
import cgitb
cgitb.enable()


def getXmlStart():
	xml = "Content-Type: text/xml\n\n"
	xml += "<?xml version='1.0'?>"
	xml += "<states>\n"
	xml += "<state>\n"
	return xml;

def getXmlEnd():
	xml = "</state>\n"
	xml += "</states>"
	return xml

def createXml(stateName, stateAbbreviation, capital, population):
	xml = getXmlStart()
	xml += "\t<stateName>"+stateName+"</stateName>\n"
	xml += "\t<abbrState>"+stateAbbreviation+"</abbrState>\n"
	xml += "\t<capital>"+capital+"</capital>\n"
	xml += "\t<population>"+population+"</population>\n"
	xml += getXmlEnd()
	return xml

def insertData(data):
	writer=open("states.txt","a")
	writer.write("\n"+data[0]+", "+data[1]+", "+data[2]+ ", "+data[3])
	writer.close()

# Define function to generate HTML form.
def generate_form(stateName, stateAbbreviation, capital, population):
	xml = createXml(stateName, stateAbbreviation, capital, population)
	data=[stateName, stateAbbreviation, capital,population]
	insertData(data)
	return xml;

def generate_error(data):
	return createXml(data, data, data, data)

def main():
	form = cgi.FieldStorage()
	if (form.has_key("stateName") and form.has_key("stateAbbreviation") 
		and form.has_key("capital") and form.has_key("population")):
		result = generate_form(form["stateName"].value, 
			form["stateAbbreviation"].value, 
			form["capital"].value, 
			form["population"].value)
		print result
	else:
		print generate_error("Error");

main()

