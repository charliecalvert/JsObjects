# -*- encoding: UTF-8 -*- 
#!/usr/bin/env python
from naoqi import ALProxy

NAO_IP = "192.168.2.17"

connectionManager = ALProxy("ALConnectionManager", NAO_IP, 9559)

print "network state: " + connectionManager.state()

# print "network security: " + connectionManager.networkinfo().security();

