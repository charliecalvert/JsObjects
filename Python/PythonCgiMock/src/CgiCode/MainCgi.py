#!/usr/bin/python

import cgi

def simpleCgi():
    form = cgi.FieldStorage()
    if form.has_key("bar"):
        return True
    else:
        return False    