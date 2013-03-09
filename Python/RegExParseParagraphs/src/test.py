#!/bin/python

import re

def dashrepl(matchobj):
	if matchobj.group(0) == '-': return ' '
	else: return '-'

print re.sub('-{1,2}', dashrepl, 'pro----gram----files')
