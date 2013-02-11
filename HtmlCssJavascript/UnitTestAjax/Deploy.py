#!/usr/bin/python
'''
Created on May 24, 2012

@author: Charlie
'''
import os
import shutil
import ConfigParser

class CopyFiles():

    def __init__(self):
        self.config = ConfigParser.RawConfigParser()
        self.config.read('../../Deploy.config')

    def setUpStandard(self):
        self.sitePath = self.config.get('Paths', 'sitePath')
        self.projectName = "TestAjax/"
        self.htmlDest = self.sitePath
        self.cgiDest = self.sitePath + "cgi-bin/"

    def setUpElvenware(self):
        self.sitePath = self.config.get('Paths', 'elvenware')
        self.projectName = "charlie/development/web/JavaScript/"
        self.htmlDest = self.sitePath + self.projectName
        self.cgiDest = self.config.get('Paths', 'elvenwareCgi')

    def setUpLinux(self):
        self.sitePath = self.config.get('Paths', 'linux')
        self.projectName = "TestAjax/"
        self.htmlDest = self.sitePath + self.projectName
        self.cgiDest = self.config.get('Paths', 'linuxCgi')

    def specifyFilesToCopy(self):
        self.scriptPath = "src/"
        self.htmlFiles = ["TestAjax.html", "TestAjax.js"]
        self.cgiFiles = ["SimpleXml.py"]

    def ensureDir(self, f):
        d = os.path.dirname(f)
        print d
        if not os.path.exists(d):
            os.makedirs(d)

    def copyFilesPrivate(self, htmlFiles, cgiFiles, setFilePermission):
        self.ensureDir(self.cgiDest)
        self.ensureDir(self.htmlDest)
        for fileName in htmlFiles:
            dest = self.htmlDest + fileName
            shutil.copy2(fileName, dest)
        for fileName in cgiFiles:
            dest = self.cgiDest + fileName
            shutil.copy2(self.scriptPath + fileName, dest)
            if setFilePermission == True:
                if dest.endswith(".txt"):
                    os.chmod(dest, 0666)
                else:
                    os.chmod(dest, 0775)

    def copyFiles(self, setFilePermission):
        copy_files.specifyFilesToCopy()
        self.copyFilesPrivate(self.htmlFiles, self.cgiFiles, setFilePermission)

    def run(self, option, setFilePermission):
        if option == 0:
            self.setUpLinux()
        elif option == 1:
            copy_files.setUpElvenware()
        else:
            copy_files.setUpStandard()
        copy_files.copyFiles(setFilePermission)

if __name__ == '__main__':
    copy_files = CopyFiles()
    copy_files.run(2, False)
