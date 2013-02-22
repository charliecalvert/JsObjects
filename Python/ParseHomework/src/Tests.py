'''
Created on Mar 1, 2012

@author: Charlie
'''
import ParseHomework

def testLists():
    completedList = h.getCompletedList()
    print completedList
    h.addToList("Assignment06-Ali -> Ali")
    print h.completedList

h = ParseHomework.ParseHomework()
print h.ensureFinalSlash("j:\src\p272")
print h.ensureFinalSlash("j:\src\p272/")
print h.ensureFinalSlash("j:\src\p27")
print h.ensureFinalSlash("j:/src\p272.txt")
print h.ensureFinalSlash("j:/src\\")
print h.ensureFinalSlash("j:/src/p272")
print h.ensureFinalSlash("j:/src/p272/")
print h.ensureFinalSlash("j:/src/p27")
print h.ensureFinalSlash("j:/src/p272.txt")
print h.ensureFinalSlash("j:/src/")
print h.ensureFinalSlash("j:/src/p272/Assignment04-All.zip")
print h.ensureFinalSlash("J:\Src\p272\got space in me")
print h.ensureFinalSlash("J:\Src\p272\got space in me\\")
print h.ensureFinalSlash("J:\Src\p272\got space in me\Sam.txt")
print h.ensureFinalSlash("J:\Src\p272\got space in me\New Text Document.txt")
print h.ensureFinalSlash("J:\Src\p272\got space in me\New Text Document")
print h.ensureFinalSlash("J:/Src/p272/got space in me")
print h.ensureFinalSlash("J:/Src/p272/got space in me/")
print h.ensureFinalSlash("J:/Src/p272/got space in me/Sam.txt")
print h.ensureFinalSlash("J:/Src/p272/got space in me/New Text Document.txt")
print h.ensureFinalSlash("J:/Src/p272/got space in me/New Text Document")