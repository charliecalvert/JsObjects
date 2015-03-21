# Cordova Various Plugins

There are two plugins in this program as of March 20, 2015. One causes
the phone to vibrate, the other brings up the camera so you can take a
picture. After the picture is taken, the photo is display in an HTML
IMG element. They commands for installing the plugins are listed in
the script called **SetupPlugins**:

```
    cordova plugin add org.apache.cordova.camera
    cordova plugin add org.apache.cordova.vibration
```

# Steps

If starting from scratch, here are the commands to compile and install
this android application on a phone or emulator:

- cordova platform setup android
- Run: **./SetupPlugins**.
- Run: **bower install**.
- Run: **./install**

Remember that **SetupPlugins** contains the commands for
install the the camera and vibration plugins.

# ADB

Don't forget to run to run the following to be sure you are
connected to an android device of some kind:

```
$ adb devices
List of devices attached
192.168.2.27:5555	device
```

If you are not connected, the connect your phone, a phone emulator,
or connect to an instance of VirtualBox running AndroidX86:

```
$ adb connect 192.168.2.27
connected to 192.168.2.27:5555
```

# Bower

Note that **.bowerrc** causes the bower packages to be placed in the
**www**folder. Here is the contents of **.bowerrc**:

```
{
  "directory": "www/bower_components"
}
```

The working end of **bower.json** ensures that **jquery** is installed:

```
 "dependencies": {
    "jquery": "~2.1.3"
  }
```