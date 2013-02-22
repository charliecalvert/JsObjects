'''
Created on May 6, 2012

@author: Charlie Calvert

Some examples of how to use a Python Dictionary
'''

myDictionary = { "one": 1, "two": 2}

print myDictionary["one"]
print myDictionary["two"]


class TestField(object):
    def __init__(self, value):
        self.value = value
          
field = TestField(3)
myDictionary = { "one": field }

print myDictionary["one"].value

print "Last Example: "
myDictionary = { "bar": TestField(4), "foo": TestField(5) }

for item in myDictionary:
    print item + "=" + str(myDictionary[item].value)
    
tuples = [('table', 'flat board with four legs'), ('plate', 'round ceramic object')]
myDictionary = dict(tuples)
for item in myDictionary:
    print item + "=" + myDictionary[item]


