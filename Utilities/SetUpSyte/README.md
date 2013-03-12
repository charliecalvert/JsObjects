Get Syte to Keep Running
------------------------

If you start Syte manually in a shell, it will only run so long as the
shell is running. If you close the shell, Syte closes as well. Here is 
description of how to keep it running.

Use UpStart to Keep Your Program in Memory
------------------------------------------

UpStart is a Linux utility that ships with recent Ubuntu releases. It 
can be used to ensure that your python servers or other program stay in 
memory even after you have closed your shell. It will even restart the 
programs automatically if the OS is rebooted.

Here is a file called *Syte.config*. You can use this file to ensure 
that Syte is launched when your EC2 instance boots, and that it 
will stay running, even if it temporarily crashes:

	# This is an upstart script: http://upstart.ubuntu.com/index.html
	description "a script to keep a python server in memory even after rebooting"
	author      "Charle Calvert - http://www.elvenware.com/charlie"i


	# Start after all drives mounted
	start on started mountall
	stop on shutdown

	# Automatically Respawn:
	respawn
	respawn limit 99 5

	script
		export HOME="/root"

	# The following assumes nodejs is in /usr/bin
	# It also assumes that the server is in /home/charlie/ExpressSend
		exec python /home/charlie/git/syte/manage.py runserver 192.168.2.26:30025 >> /var/log/syte.log 2>&1
	end script

	post-start script
	   # Optionally put a script here that will notifiy you node has (re)started
	   # /root/bin/hoptoad.sh "node.js has started!"
	end script


If you paste *Syte.config* into an editor, you will be able to edit 
portions of the line that begins with the word *exec*. For instance, 
the line begins like this:

	exec python /home/charlie/git/syte/manage.py

If your version of the server is located elsewhere, then change
the line as necessary. For instance:

	exec python /home/belinda/bin/syte/manage.py

Note that I replaced *charlie/git* with *belinda/bin*. You 
should edit your version of *Syte.config* to reflect the paths 
and file names on your system.

Place Syte.config in the /etc/init directory:

	/etc/init/Syte.config

The command to copy it to appropriate directory  would be:

	sudo cp Syte.config /etc/init/.

Once the file is in the */etc/init* directory, you can start
your program by typing the following:

	sudo start Syte

You can stop it with following command:

	sudo stop Syte

When you reboot the system, your program will start automatically.

Error messages and other output from your program are recorded in the 
following location:

	/var/log/syte.log 
	
If you examine the script, you can see that this file name is 
configurable. 

You should create one script of this type for each program that you 
want to launch. In our case, there is only want that you want to launch. 
If, however, you are in both Prog272 and Prog280, then you will probably
find occasion to create more than one script.
