# -*- encoding: UTF-8 -*- 
#!/usr/bin/env python
from naoqi import ALProxy

NAO_IP = "192.168.2.17"

alconnman = ALProxy("ALConnectionManager", NAO_IP, 9559)

technologies = alconnman.technologies()

if len(technologies) >0:
    print "available technology: "

    for technology in technologies:
        print "\t" + technology
