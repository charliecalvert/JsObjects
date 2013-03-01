These scripts are designed to help you
set up or configure a Linux box.
---------------------------------------------
Some of the scripts in this folder expect
two environment variables on your system
to be set. They are called ELF_USER and
ELF_IP.
---------------------------------------------
Before you run this script, set ELF_USER 
and ELF_IP. Your ELF_IP might be your 
elastic ip if you are using EC2. Otherwise
it is probably the IP of your remote system.
---------------------------------------------
You can set ELF_USER and ELF_IP by using the 
ENVIRONMENT VARIABLES dialog. To get to 
that dialog:
  Control Panel\System and Security\System
  Advanced System Settings\Environment Vars
---------------------------------------------
Alternatively you can set them temporarily 
at the command prompt like this:
  set ELF_USER=MyUserName
  set ELF_IP=MyRemoteIp
For instance:
  set ELF_USER=charlie
  set ELF_IP=192.168.2.3
=============================================