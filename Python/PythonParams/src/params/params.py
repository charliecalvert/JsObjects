'''
Created on May 6, 2012

@author: Charlie
'''

# Notice the default values assigned to these parameters
def bar(one=1, two=2, three=3):
    print one
    print two
    print three
    
def foo(one, two, three):
    print one
    print two
    print three
        
# These calls are both legal though bar takes 3 params        
bar()
bar(4, 5)
# This call causes an error because there are no defaults 
foo()