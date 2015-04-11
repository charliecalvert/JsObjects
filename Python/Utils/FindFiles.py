__author__ = 'charlie'

import os


class FindFiles():
    def __init__(self):
        self.srcDir = "C:/Src/Git/elfsite/Code/views"
        self.fileName = "C:/Src/Git/elfsite/Code/FileList.json"
        self.allJadeFiles = []
        self.output = ""
        self.pairs = { 'Android': '/development/android/',
                       'Assignments': '/books/CloudNotes/Assignments/',
                       'cloud': '/development/cloud/',
                       'css': '/development/web/CssGuide/',
                       'DemoPages': '/demo_pages/',
                       'Prog219': '/books/CloudNotes/Prog219/',
                       'Prog272': '/books/CloudNotes/Prog272/',
                       'Isit322': '/books/CloudNotes/Isit322/',
                       'JavaScript': '/development/web/JavaScript/',
                       'Windows': '/Os/Windows/',
                       'Linux': '/Os/Linux/',
                       'MainRoot': '/',
                       'WebRoot': '/development/web/'}
        self.keys = self.pairs.keys()

    def getBase(self, base, file):
        for key in self.keys:
            if key in base:
                fileName = os.path.join(self.pairs[key], file)
                result = fileName
                return result


    def makeList(self):
        total = len(self.allJadeFiles)
        count = 0
        for fileData in self.allJadeFiles:
            count += 1
            base = fileData[0]
            file = fileData[1]
            inPath = '\t{\n\t\t"in": "' + os.path.join(base, file) + '",'
            inPath = inPath.replace('\\', '/')
            file = file.replace('.jade', '.html')
            outPath = '\t\n' + '\t\t"out": "' + self.getBase(base, file) + '"\n\t}'
            if (count < total):
                self.output += inPath + outPath + ',\n'
            else:
                self.output += inPath + outPath

    def writeOutput(self):
        writeFile = open(self.fileName, 'w')
        writeFile.write(self.output)
        writeFile.close()

    def listDirectory(self, path):
        self.output += '[\n'
        for root, dirs, files in os.walk(path):
            index = root.index('views')
            base = root[index:]
            for file in files:
                if base == 'views':
                    continue
                if file.endswith(".jade"):
                    fileTuple = (base, file)
                    self.allJadeFiles.append(fileTuple)
        self.makeList()
        self.output += '\n]'
        print(self.output)
        self.writeOutput()

h = FindFiles()
h.listDirectory(h.srcDir)
