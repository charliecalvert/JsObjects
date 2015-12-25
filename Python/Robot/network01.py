# -*- encoding: UTF-8 -*- 
#!/usr/bin/env python
from naoqi       import ALProxy

NAO_IP = "192.168.2.17"

alconnman = ALProxy("ALConnectionManager", NAO_IP, 9559)

#Scanning is required to update the services list
alconnman.scan()
services = alconnman.services()

for service in services:
    network = dict(service)
    if network["Name"] == "":
        print "{hidden} " + network["ServiceId"]
    else:
        print network["Name"] + " " + network["ServiceId"]
