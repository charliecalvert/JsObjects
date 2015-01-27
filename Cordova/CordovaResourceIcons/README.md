# Cordova Resource Icon

Shows how to set up custom icons and images for your project.

You can edit image in www/img. But the images in the platform directory
are problematic because we don't want to check in the relatively large
platforms directory to our version control system.

What we do instead, is place the icons in a directory called config. Now,
each time you list the available platforms, the program will copy the 
files from the config directory to the platforms directory. So the correct
commands to give would be these:

	cordova platform add android
	
That will copy the icons from the config directory to the platforms
directory. If you want to make the copy again, without actually going
through a full platform add, you can run this command:
	
	cordova platform ls
	
The key to making this work is the code in the hooks directory. There
you will find two directories that contain code that defines what
happens after a platform add or platform ls. 

For more information, see the README in the hooks directory, or this
blog post:

- <http://devgirl.org/2013/11/12/three-hooks-your-cordovaphonegap-project-needs/>
	
To install the project on your device, you might like to use the 
**install** script in the root of the project.
