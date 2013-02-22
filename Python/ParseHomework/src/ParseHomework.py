import os, fnmatch
import re
 
class ParseHomework():
    
    def __init__(self):
        self.srcDir = "J:/Src/p272/A06/"
        self.emptyString = "Nothing"
        self.completedList = []
        self.completedListFileName = ""
    
    def getUserName(self, fileName):
        p = re.compile("Assignment06-(.*)")
        result = p.search(fileName)
        if result is None:
            return self.emptyString
        else:
            return result.group(1) 
    
    def locate(self, pattern, root=os.curdir):
        '''Locate all files matching supplied filename pattern in and below
        supplied root directory.'''
        for path, dirs, files in os.walk(os.path.abspath(root)):
            for filename in fnmatch.filter(files, pattern):
                yield os.path.join(path, filename)
                
    def getTextFromFile(self, fileName):    
        foundFile = open(fileName)
        text = foundFile.read()
        foundFile.close();         
        return text;
    
    def getLinesFromFile(self, fileName):
        listItems = []    
        foundFile = open(fileName)
        for line in foundFile:
            line = line.strip()
            listItems.append(line)
        foundFile.close();
        return listItems;
                       
    def ensureFinalSlash(self, path):
        slash = '/'
        path = path.replace('\\', slash)
        if os.path.isdir(path):
            path = path.strip()
            if not path.endswith(slash):
                path = path + slash
        return path
        
    def findProjectName(self, fileName, userName):
        text = self.getTextFromFile(fileName)
        searchText = "<name>(.*)</name>"
        p = re.compile(searchText)
        newText = p.search(text)
        if newText == None:
            return
        if re.search(userName, newText.group(1)) == None:
            newName = "<name>%s_%s</name>" % (newText.group(1), userName)
            result = p.sub(newName, text, 1)
            #print result            
            writeFile = open(fileName, 'w')
            writeFile.write(result)
            writeFile.close()
                            
    def findFiles(self, path, pattern, userName):
        os.chdir(path)    
        for fileName in self.locate(pattern):            
            self.findProjectName(fileName, userName) 
               
    def getCompletedList(self):
        curdir = os.curdir
        curdir = os.path.abspath(curdir)
        curdir = self.ensureFinalSlash(curdir)
        self.completedListFileName = curdir + "CompletedList.txt"
        self.completedList = self.getLinesFromFile(self.completedListFileName)
        return self.completedList          

    def addToCompletedList(self, line):        
        index = self.completedList.count(line)
        print index
        if index == 0:
            self.completedList.append(line)
            return True
        return False
    
    def writeCompletedList(self):
        writeFile = open(self.completedListFileName, 'w')
        for line in self.completedList:
            writeFile.write(line + '\n')
        writeFile.close()

    def listDirectories(self, path):
        self.getCompletedList()
        items = os.listdir(path)
        for fileName in items:
            userName = self.getUserName(fileName)            
            if userName != self.emptyString:                
                newEntry = "%s -> %s" % (fileName, userName) 
                if self.addToCompletedList(newEntry):           
                    newDir = self.srcDir + fileName + "/"                                          
                    self.findFiles(newDir, ".project", userName)
        self.writeCompletedList()        

h = ParseHomework()
h.listDirectories(h.srcDir)    
print h.completedList     