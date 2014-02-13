#! /usr/bin/env python
"Replace CRLF with LF in argument files.  Print names of changed files."

import sys, os, locale

def getFileSystemInfo():
	print(locale.getpreferredencoding())
	print(sys.getfilesystemencoding())
	return

def main():
	
	#s = u'\x1A'
	#print(s.encode())	
	#return 
	
	for filename in sys.argv[1:]:
		if os.path.isdir(filename):
			print(filename, "Directory!")
			continue
		data = open(filename, "rb").read()
		dataTest = data.decode()		
		if '\0' in dataTest:
			print(filename, "Binary!")
			continue		
		newdata = dataTest.replace("\r\n", "\n")
		newdata = newdata.replace(u'\x1A', '')
		if newdata != data:
			print(filename)
			f = open(filename, "wb")
			f.write(bytes(newdata, 'UTF-8'))
			f.close()

if __name__ == '__main__':
	main()
