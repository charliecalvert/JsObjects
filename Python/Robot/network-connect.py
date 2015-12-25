# -*- encoding: UTF-8 -*- 
#!/usr/bin/env python
from naoqi import ALProxy
import sys

NAO_IP = "127.0.0.1"

if len(sys.argv) != 2:
    print sys.argv[0] + " <serviceId>"
    sys.exit(1)

alconnman = ALProxy("ALConnectionManager", NAO_IP, 9559)

try:
    alconnman.connect(sys.argv[1])
except Exception as e:
    print e.what()
    sys.exit(1)
