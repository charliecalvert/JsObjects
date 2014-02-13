
import sys, getopt

def explain(): 
	print('ReplaceStringInFile.py -i <inputfile> -o <outputfile> -f <stringToFind> -n <newString>')

def replaceIt(inFile, outFile, oldString, newString):
	# TODO: We need to check that the directory we copying to exists!
	with open(outFile, "wt", encoding="utf8") as out:
		f = open(inFile, encoding="utf8")
		for line in f:
			out.write(line.replace(oldString, newString))
		f.close()
		
def main(argv):
	inputFile = ''
	outputFile = ''
	stringToFind=''
	newString=''
	try:
		opts, args = getopt.getopt(argv,"hi:o:f:n:",["infile=","outfile=","find=","newString"])
	except getopt.GetoptError:
		explain()
		sys.exit(2)
	for opt, arg in opts:
		if opt == '-h':
			print('test.py -i <inputfile> -o <outputfile>')
			sys.exit()
		elif opt in ("-i", "--ifile"):
			inputFile = arg
		elif opt in ("-o", "--ofile"):
			outputFile = arg
		elif opt in ("-f", "--find"):
			stringToFind = arg
		elif opt in ("-n", "--newString"):
			newString = arg
	print('Input file:', inputFile)
	print('Output file:', outputFile)
	print('String to find:', stringToFind)
	print('newString:', newString)
	replaceIt(inputFile, outputFile, stringToFind, newString)


if __name__ == "__main__":
	paramCount = len(sys.argv)
	if (paramCount == 9):
		main(sys.argv[1:])
	else:
		explain();
