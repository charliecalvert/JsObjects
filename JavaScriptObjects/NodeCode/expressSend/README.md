Express Send
============

This is a "hello world" application for node and express.

Use UpStart to Keep Your Program in Memory
------------------------------------------

UpStart is a Linux utility that ships with recent Ubuntu releases. It 
can be used to ensure that your node servers or other program stay in 
memory even after you have closed your shell. It will even restart the 
programs automatically if the OS is rebooted.

Note that this project includes a file called *ExpressSend.config*. 
You can use this file to ensure that your application is launched 
when your OS boots, and that it will stay running, even if it 
temporarily crashes.

If you open ExpressSend.config in an editor, you will see a few 
portions of the line that begins with the word *exec* that you might 
want to edit. For instance, the line begins like this:

	exec /usr/bin/nodejs /home/charlie/ExpressSend/server.js

If your version of the server is located elsewhere, then change
the line as necessary. For instance:

	exec /usr/bin/nodejs /home/belinda/bin/server.js

Note that I replaced *charlie/ExpressSend* with *belinda/bin*. You 
should edit your version of ExpressSend.config to reflect that paths 
and file names on your system.

Place ExpressSend.config in the /etc/init directory:

	/etc/init/ExpressSend.config

The command to copy it to appropriate directory  would be:

	cp ExpressSend.config /etc/init/.

Once the file is in the */etc/init* directory, you can start
your program by typing the following:

	sudo start ExpressSend

You can stop it with following command:

	sudo stop ExpressSend

When you reboot the system, your program will start automatically.

Error messages and other output from your program are recorded in the 
following location:

	/var/log/node.log 
	
If you examine the script, you can see that this file name is 
configurable. 

You should create one script of this type for each program that you 
want to launch.

