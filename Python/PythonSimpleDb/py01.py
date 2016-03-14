#!/usr/bin/env python
# -*- coding: UTF-8 -*-

import sys

# enable debugging
import cgitb

cgitb.enable()


cur_version = sys.version_info

print "Content-Type: text/plain;charset=utf-8"
print

print "Hello World!"
print "version" + str(cur_version);
