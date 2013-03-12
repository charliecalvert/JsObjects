Express Send
============

This is a "hello world" application for node and express.

Note that this project includes a file called ExpressSend.config. You
can use this file to ensure that your application when your OS boots,
and that it will stay running, even if it temporarily crashes.

If you open ExpressSend.config in an editor, you will see a few 
portions of the line that begins with the word *exec* that you 
might want to edit.

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

