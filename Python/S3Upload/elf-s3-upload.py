#!/usr/bin/python3

import os
import threading
import sys
import boto3 as boto
from boto3.s3.transfer import S3Transfer
import json
from pprint import pprint
import elf_config_manager
import elfutils.elffiles as elffiles

class Utilities(object):

    def run(self, allImagesFileName):
        with open(allImagesFileName) as json_data:
            print(json_data)
            d = json.load(json_data)
            json_data.close()
            return d

    def printMessage(self, message):
        print('\n=================')
        print('>>' + message)
        print('=================\n')

    def __str__(self):
        return self.run()


class ProgressPercentage(object):
    def __init__(self, filename):
        self._filename = filename
        self._size = float(os.path.getsize(filename))
        self._seen_so_far = 0
        self._lock = threading.Lock()

    def __call__(self, bytes_amount):
        # To simplify we'll assume this is hooked up
        # to a single filename.
        with self._lock:
            self._seen_so_far += bytes_amount
            percentage = (self._seen_so_far / self._size) * 100
            sys.stdout.write(
                "\r%s / %s  (%.2f%%)" % (
                    self._seen_so_far, self._size,
                    percentage))
            sys.stdout.flush()


class S3Buckets():
    def __init__(self):
        self.bucketName = 's3bucket01.elvenware.com'
        self.keyName = 'https'
        self.localFileName = os.environ['ELF_WRITE_DATA'] + '/Presidents.csv'

    def transfer(self, fileToSend, keyName): 
        client = boto.client('s3', 'us-west-2')
        transfer = S3Transfer(client)
        result = transfer.upload_file(fileToSend, self.bucketName, keyName,
                                      extra_args={'ACL': 'public-read', 'ContentType': "image/jpeg"},
                                      callback=ProgressPercentage(fileToSend))
        #pprint(result)

    def transferFile(self):
        """
        This method is safest because it handles large and small files, 
        resuming uploads, etc
        """
        client = boto.client('s3', 'us-west-2')
        transfer = S3Transfer(client)
        result = transfer.upload_file(self.localFileName, self.bucketName, self.keyName,
                                      extra_args={'ACL': 'public-read'},
                                      callback=ProgressPercentage(self.localFileName))
        print(result)

    def transferS3Image(self, fileName, fileRoot):
        """
        This method is safest because it handles large and small files,
        resuming uploads, etc
        """
        
        dirPart = os.path.dirname(fileName)
        print(dirPart)
        splitDir = dirPart.split(os.path.sep)
        splitDirLen = len(splitDir)
        print('SplitDir: ' + str(splitDir) + ' SplitDirLen: ' + str(splitDirLen))
        dir = splitDir[splitDirLen - 1]
        print(dir)
        if splitDir[0] != 'https:':
          raise ValueError('Your all-images-XXX.json file should contain S3 addresses beginning with https')
        elif splitDirLen == 6:
            keyName = splitDir[4] + os.path.sep + dir + os.path.sep + os.path.basename(fileName)
            # fileRoot = '/home/charlie/temp/lopez-folders/'
            # fileRoot = '/home/charlie/temp/SeagateFourGig/Pictures/2016-Ohio/'
        elif splitDirLen == 5:
            keyName = splitDir[4] + os.path.sep + os.path.basename(fileName)
            # fileRoot = '/var/www/html/images/'
        print('KeyName:' + keyName)
        fileToSend = fileRoot + dir + os.path.sep + os.path.basename(fileName)
        print('Sending: ' + fileToSend)
        self.transfer(fileToSend, keyName)

    def CreateBucketAndFile(self):
        s3 = boto.resource('s3')
        # bucket = s3.create_bucket(Bucket=self.bucketName, CreateBucketConfiguration={'LocationConstraint': 'us-west-2'})
        # s3.Object(self.bucketName, self.bucketKeyName).put(Body=open(self.localFileName, 'r', encoding='utf-8'))
        # foo = s3.Object(self.bucketName, self.keyName).put(Body=self.localFileName)
        foo = s3.Bucket(self.bucketName).upload_file(self.localFileName, self.keyName)
        print(foo)
        # key = bucket.new_key(self.bucketFileName)
        # key.set_contents_from_filename(self.localFileName)
        # key.set_acl('public-read')

    def GetFile(self):
        client = boto.client('s3', 'us-west-2')
        transfer = S3Transfer(client)
        transfer.download_file(self.bucketName, self.keyName, 'foo.csv')

    def deleteKey(self, keyName):
        s3 = boto.resource('s3')
        key = s3.Object(self.bucketName, keyName)
        print(key)
        result = key.delete()
        pprint(result)
        # bucket = s3.Bucket(self.bucketName)
        # print(bucket)
        # for key in bucket:
        #    print(key)

        # for obj in bucket.objects.filter(Prefix='test/'):
        #    print(obj)
        # s3.Object(bucket.name, obj.key).delete()

    def processFiles(self, allImagesFile, baseDir):
        utilities = Utilities()
        files = utilities.run(allImagesFile)
        for file in files:
            utilities.printMessage(file)
            self.transferS3Image(file, baseDir)

class GetConfigData(object):
    def __init__(self):
        self.configManager = elf_config_manager.ConfigManager()
        self.config = self.configManager.readConfig()
        self.names = self.configManager.getSelectedObjectNames()
        print(self.names)

    def transferToS3(self, allImagesJsonFile, baseDir):
        print(allImagesJsonFile)
        print(baseDir)
        s3Buckets = S3Buckets()
        s3Buckets.processFiles(allImagesJsonFile, baseDir)

    def processSelectObjects(self):
        utilities = Utilities()
        for name in self.names:
            utilities.printMessage('NextName: ' + name)
            california1 = self.configManager.getSelectedObject(name)
            pprint(california1)
            allImagesJsonFile = california1['allImagesJsonFile']
            baseDir = elffiles.ensureFinalSlash(california1['baseDir'])
            self.transferToS3(allImagesJsonFile, baseDir)

def baseRun():
    allImagesFile = sys.argv[1]
    baseDir = sys.argv[2]
    s3Buckets = S3Buckets()
    s3Buckets.processFiles(allImagesFile, baseDir)
# s3Buckets.CreateBucketAndFile()
# s3Buckets.transferFile()
# s3Buckets.GetFile()
# s3Buckets.deleteKey('italy/2013-06-19')

if __name__ == '__main__':
    getConfigData = GetConfigData()
    getConfigData.processSelectObjects()
    #baseRun()
