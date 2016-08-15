#! /usr/bin/python3

import elfutils.elffiles as elffiles
# from os.path import expanduser
import json

class ConfigManager(object):
    def __init__(self):
        self.elfConfig = 'error, could not read file'

    def readConfig(self):
        self.home = elffiles.getHomeDir()
        #home = elffiles.ensureFinalSlash(home)
        fileName = self.home + '.config/ElvenConfig.json'
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

    def getElvenHome(self):
        return elffiles.getHomeDir() + elffiles.ensureFinalSlash('ElvenImages')

    def getSelectedObject(self, itemName):
        elvenHome = self.getElvenHome()
        selectedObject = next((x for x in self.elvenImages if x['name'] == itemName), 'error')
        selectedObject['allImagesJsonFile'] = elvenHome + 'all-images-' + selectedObject['name'] + '.json'
        return selectedObject

    def setSelectedObjectNames(self, names):
        self.elfConfig['selectedElvenImages'] = names

    def getSelectedObjectNames(self):
        selectedImageConfigName = self.elfConfig['selectedElvenImages']

        #if (typeof selectedImageConfigName == = 'undefined') {
        #throw 'In ElvenConfig.json you must define the define the selected elvenImage class.\n' +
        #'For instance:\n\n "elvenImages": {\n    "selected": "california",\n' +
        #'    "california: {...}\n    "spain": {...}\n }';
        #}
        ##if (typeof selectedImageConfigName == = 'string') {
        #var tempArray =[];
        #tempArray.push(selectedImageConfigName);
        #selectedImageConfigName = tempArray;
        #}

        return selectedImageConfigName

    def __str__(self):
        self.readConfig()
        return self.elfConfig
