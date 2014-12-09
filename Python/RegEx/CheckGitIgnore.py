#!/usr/bin/python3

# Put this script in the root of your repository
# Run it like this: python3 CheckProjects
# See the two options at bottom of this file

import re
import sys
import os

class FindProjects():
    errorString = 'error'
    studentDirs = []
    gitIgnoreNames = []
    missingGitIgnore = []
    fileToFind = '.gitignore'
    
    def findDirectories2(self):
        for root, dirs, files in os.walk('.'):            
            path = root.split(os.sep)
            if len(path) == 2:
                if "isit" in root:
                    # print(root)
                    self.studentDirs.append(root)
                    self.gitIgnoreNames.append(root + os.sep + ".gitignore")
        for file in self.gitIgnoreNames:
            if os.path.isfile(file):
                content = self.openFile(file);
                results = re.findall('^node_modules', content, re.MULTILINE)
                if len(results) == 0:
                    print("Missing node_modules:")
                    print("\t" + file)
                    print("\t", results);
                results = re.findall('^.metadata', content, re.MULTILINE)
                if len(results) == 0:
                    print("Missing metadata:")
                    print("\t" + file)
                    print("\t", results);
            else:
                self.missingGitIgnore.append(file);
        print("Missing Git Ignore:")
        print("\t", self.missingGitIgnore)
        
    def openFile(self, fileName):
        f = open(fileName, 'r', encoding="utf8")
        fileContent = f.read()
        f.close()
        return fileContent
                


p = FindProjects()
p.findDirectories2();
