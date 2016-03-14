#!/usr/bin/env python3
# -*- coding: UTF-8 -*-

import sys

# enable debugging
import cgitb

cgitb.enable()


cur_version = sys.version_info

print("Content-Type: text/html;charset=utf-8")
print()

print("<h1>Hello World!</h1>")
print("<p>version: " + str(cur_version) + "</p>")
