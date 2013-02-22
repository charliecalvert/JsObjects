#!/usr/bin/python
'''
Created on Feb 27, 2012

@author: Charlie
'''

import re
import os, fnmatch

class CreateScripts():
    def __init__(self):
        self.destDir = '/usr/local/hadoop/'
   
    def locate(self, pattern, root=os.curdir):
        '''Locate all files matching supplied filename pattern in and below
        supplied root directory.'''
        for path, dirs, files in os.walk(os.path.abspath(root)):
            for filename in fnmatch.filter(files, pattern):
                yield os.path.join(path, filename)

    def findFile(self, pattern):
        os.chdir(self.destDir + 'conf/')    
        for fileName in self.locate(pattern):
            return fileName

    def getTextFromFile(self, fileName):    
        foundFile = open(fileName)
        text = foundFile.read()
        foundFile.close();         
        return text;

    def runSwap(self, fileName, newText):
        textFest = self.getTextFromFile(fileName)
        textToFind = '<configuration>\n\n'
        result = re.sub(textToFind, textToFind + newText, textFest)        
        writeFile = open(fileName, 'w')
        writeFile.write(result)
        writeFile.close()

    def editCoreSite(self):
        coreSite = "<property>\n\
  <name>hadoop.tmp.dir</name>\n\
  <value>/app/hadoop/tmp</value>\n\
  <description>A base for other temporary directories.</description>\n\
</property>\n\n\
<property>\n\
  <name>fs.default.name</name>\n\
  <value>hdfs://localhost:54310</value>\n\
  <description>The name of the default file system.  A URI whose\n\
  scheme and authority determine the FileSystem implementation.  The\n\
  uri's scheme determines the config property (fs.SCHEME.impl) naming\n\
  the FileSystem implementation class.  The uri's authority is used to\n\
  determine the host, port, etc. for a filesystem.</description>\n\
</property>\n\n"

        mapReduce='<property>\n\
  <name>mapred.job.tracker</name>\n\
  <value>localhost:54311</value>\n\
  <description>The host and port that the MapReduce job tracker runs\n\
  at.  If "local", then jobs are run in-process as a single map\n\
  and reduce task.\n\
  </description>\n\
</property>\n\n'

        hdfs='<property>\n\
  <name>dfs.replication</name>\n\
  <value>1</value>\n\
  <description>Default block replication.\n\
  The actual number of replications can be specified when the file is created.\n\
  The default is used if replication is not specified in create time.\n\
  </description>\n\
</property>\n\n'

        fileName = self.findFile("core-site.xml")
        self.runSwap(fileName, coreSite)
        fileName = self.findFile("mapred-site.xml")
        self.runSwap(fileName, mapReduce)
        fileName = self.findFile("hdfs-site.xml")
        self.runSwap(fileName, hdfs)

    def writeBashRc(self):
        bashrc = '# Set JAVA_HOME:\n\
export JAVA_HOME=/usr/lib/jvm/java-6-sun\n\n'

        fileName = '/home/hadooper/.bashrc'
        writeFile = open(fileName, 'w')
        writeFile.write(bashrc)
        writeFile.close()
        
c = CreateScripts()
c.writeBashRc()
c.editCoreSite()