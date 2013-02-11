#!/usr/bin/python

# Import the CGI module
import MySQLdb
import cgi
import cgitb

cgitb.enable()

# Test with: http://192.168.0.100:8000/cgi-bin/AddingDataXml.py?operanda=2&operandb=3&answer=5

def formatXml(operanda, operandb, answer):
	xml = """Content-Type: text/xml\n
<?xml version='1.0'?>
<additions>
	<addition>
		<operanda>{0}</operanda>
		<operandb>{1}</operandb>
		<answer>{2}</answer>
	</addition>
</additions>""".format(operanda, operandb, answer)
	return xml

# Define function to generate HTML form.
def generate_form(operanda, operandb, answer):
	formatXml(operanda, operandb, answer)
	sqlString = "insert into additions (operanda, operandb, answer) values ({0}, {1}, {2});"
	sql = sqlString.format(operanda, operandb, answer)
	insertData(sql)	
	print formatXml(operanda, operandb, answer)

def insertData(sql):
	db = MySQLdb.connect(host="localhost", user="charlie", passwd="bar", db="charlie")
	cursor = db.cursor()
	cursor.execute(sql)
	db.commit()	
	cursor.close()
	db.close()

def runAction():
	form = cgi.FieldStorage()
	if (form.has_key("answer") and form.has_key("operanda") and form.has_key("operandb")):
		generate_form(form["operanda"].value, form["operandb"].value, form["answer"].value)	
	else:
		print formatXml("Error", "params we got: " + str(form.list).strip('[]'), 
			"List Length: " + str(form.__len__()));

def main():
	generate_form()

runAction()