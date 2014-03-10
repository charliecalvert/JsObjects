#! /usr/bin/env python3.3
"Replace CRLF with LF in argument files.  Print names of changed files."

import sys, os, locale

def getFileSystemInfo():
	print(locale.getpreferredencoding())
	print(sys.getfilesystemencoding())
	return

def convert(fileName):
	if os.path.isdir(fileName):
		print(fileName, "Directory!")
		return
	inFile = open(fileName, "rb")
	data = inFile.read()
	dataTest = data.decode()
	inFile.close()
	if '\0' in dataTest:
		print(fileName, "Binary!")
		return
	newdata = dataTest.replace("\r\n", "\n")
	newdata = newdata.replace(u'\x1A', '')
	if newdata != data:
		print(fileName)
		f = open(fileName, "wb")
		f.write(bytes(newdata, 'UTF-8'))
		f.close()

def main():
	#s = u'\x1A'
	#print(s.encode())	
	#return 
	for fileName in sys.argv[1:]:
		convert(fileName)

if __name__ == '__main__':
	main()
