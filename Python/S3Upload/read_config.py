#! /usr/bin/python3

import elfutils.elffiles as elffiles
from os.path import expanduser
import json

class ReadConfig(object):
    def __init__(self):
        self.elfConfig = 'error, could not read file'

    def readConfig(self):
        home = expanduser("~")
        home = elffiles.ensureFinalSlash(home)
        fileName = home + '.config/ElvenConfig.json'
        with open(fileName) as json_data:
            self.elfConfig = json.load(json_data)
            self.elvenImages = self.elfConfig['elvenImages']
            json_data.close()
            return self.elfConfig

    def getCalvert(self):
        return self.elfConfig['calvert']

    def getElvenImages(self):
        return self.elvenImages

    def getCalifornia1(self):
        elvenImages = self.getElvenImages()
        return elvenImages['california1']

    def getSelectedObject(self, itemName):
        return next((x for x in self.elvenImages if x['name'] == itemName), 'error')

    def __str__(self):
        self.readConfig()
        return self.elfConfig
