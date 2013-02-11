#!/usr/bin/python

# Import the CGI module
import cgi
import cgitb
cgitb.enable()

class AddingMachineWrite(object):

	def __init__(self, includeHeader=True):
		self.includeHeader = includeHeader
		
	# Tell the browser to render HTML.
	def getHeader(self):
		if self.includeHeader:
			return "Content-Type: text/html\n\n"
		else:
			return ""		
	
	def getStart(self):
		xml = "<!DOCTYPE html>\n<html>\n<head>\n"
		xml += "\t<title>Adding Machine</title>\n"
		xml += '\t<meta http-equiv="Content-Type" content="text/html;charset=utf-8" />\n'
		xml += "\t<meta name='viewport' content='width=device-width,minimum-scale=1.0,maximum-scale=1.0' />\n"
		xml += "</head>\n<body>\n"
		return xml

	def getClose(self):
		return "\n</body>\n</html>\n"

	def createReply(self, description):
		xml = self.getHeader() 
		xml += self.getStart()		
		xml += "\t<p>" + description + "</p>"		
		xml += self.getClose()	
		return xml	

	def writeFile(self, operanda, operandb, answer):		
		text_file = open("AddingMachine.csv", "a")	
		dataLine = operanda + ',' + operandb + ',' + answer
		text_file.write(dataLine + "\n")
		text_file.close()	
		
	# Define function to generate HTML form.
	def generateForm(self, operanda, operandb, answer):
		description = "The sum of " + operanda + " and " + operandb + " is " + answer
		self.writeFile(operanda, operandb, answer)
		return self.createReply(description)
	
	def generateError(self, error):
		xml = self.getHeader() + self.getStart()
		xml += "\t<addition>" + str(error) + "</addition>"
		xml += self.getClose()
		return xml;
	
	def main(self):
		form = cgi.FieldStorage()
		if (form.has_key("answer") 
			and	form.has_key("operanda") 
			and form.has_key("operandb")):
			return self.generateForm(
				form["operanda"].value, 
				form["operandb"].value, 
				form["answer"].value)	
		else:
			return self.generateError("Error, invalid parameters: " + str(form.list));
	
if __name__ == "__main__":
	addMachine = AddingMachineWrite()
	print addMachine.main()