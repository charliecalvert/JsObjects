# Cordova/PhoneGap

This document is under construction as Cordova/PhoneGap have changed quite a bit.

PhoneGap is a tool that allows you to target various phones, including
Android, IPhone, Windows Phone 7, Blackberry, Symbion and WebOS.

-   [Setup PhoneGap](#setupPhoneGap)
-   [Customize the Cordova Create Script](#customize)
-   [Create PhoneGap Project](#createPhoneGap)
-   [Run PhoneGap Project](#runProject)

To effectively use PhoneGap, you will need Eclipse, the Android SDK and
the ADT plugin for Eclipse. If you don't have these tools installed
already, descriptions and links for these tools are described later in
this paragraph. Your first, step, then, will be to go to the

- [PhoneGap](http://www.phonegap.com) page.
- [Download](http://phonegap.com/download-thankyou) PhoneGap.

*Cordova is the name for the open source version of PhoneGap. Because PhoneGap is a widely known name, we will probably hear that name the most often. But from a developers point of view, there are few significant differences between PhoneGap and Cordova, and it is the Cordova source and documents that will often be the most important to us. PhoneGap was bought by Adobe in 2011. Since Cordova is open source, this is really a non-issue for most developers. Hopefully Adobe's deep pockets will help increase the popularity of Cordova, and help finance its development, but otherwise, there should be no significant impact. I'm not, of course, clairvoyant or able to predict the future, but that is my guess as to how things will pan out.*

Navigate to the [Get Started Guide](http://phonegap.com/start) and
choose the platform you want to target. In our case, it will likely be
[Android](http://phonegap.com/start#android). The description of how to
get started is included on the page you selected. There is even a
[video](http://www.youtube.com/v/MzcIcyBYJMA?autoplay=1) to help step
you through the process. I include my own take on the subject below, and
show how a script that can make the process much simpler for you.

Don't forget to copy create a res/xml directory, and move the
**plugins.xml**and **phonegap.xml** into it. Without this step, I got
the following error:

```{.code}
android.content.res.Resources$NotFoundException: Resource ID #0x0
```

-   The PhoneGap [tutorials](http://wiki.phonegap.com/w/page/35502422/Documentation-Directory)
    directory.
-   The PhoneGap [wiki](http://wiki.phonegap.com/w/page/16494772/FrontPage).
-   The [JavaScript Documentation](http://docs.phonegap.com/en/1.3.0/index.html)
-   Get ADB [connected to your device](http://www.elvenware.com/charlie/development/android/Androidx86.shtml#network40).

## Plugins with Angular {#angular-plugin}

You may have a problem with the **deviceReady** event never being firing because the plugin(s) are not installed properly. In other words, these lines at the bottom of **index.html** may not working right:

 
```
document.addEventListener('deviceready', function onDeviceReady() {
    angular.bootstrap(document, ['statesApp']);
}, false);
```
 

**NOTE**: *The **deviceReady** code won't work in a browser. This means you can have difficulties if you want to preview your app before installing it on AndroidX86 or a phone. The problem, of course, is that the deviceReady event will never fire in a browser since we are not installed in a device. Given the code above, this means that angular will never load, and hence main.html and about.html, etc. will never load. One fix would be to comment out those lines and restore the ng-app statement on the body tag near the top of the HTML file.*

I fixed the plugins problem by doing this:

- Completely delete platforms
- Completely delete plugins
- Running a script that installed the platform and the plugins. The script might look something like this:

```
#! /bin/bash

rm -r platforms
rm -r plugins

cordova platform add android
cordova plugin add org.apache.cordova.network-information
```

It follows that we don't want to check in the plugins folder at all. Probably the best solution is to add plugins to your repository wide .gitignore file. Don't worry about having checked in plugins on one or two projects, but we do want to fix this issue going forward.

Phone Gap Setup {#setupPhoneGap}
---------------

More recent information is here:

 - <http://bit.ly/elven-android-studio>
 - <http://bit.ly/cordova-plugin>

To create PhoneGap applications automatically, you need to know how to
set up environment variables, as explained
[here](http://www.elvenware.com/charlie/os/windows/faq.html#environment).
Before we get into the details, let me give you an overview in the form
of a cheat sheet that will help you understand where we are headed.

If you have not done so already, you will first need to download and
install the following:

- [Apache Ant](http://ant.apache.org/bindownload.cgi)
- [Cordova (install with npm: npm install -g cordova)](http://cordova.apache.org/#download)
- [Java](http://www.oracle.com/technetwork/java/javase/downloads/index.html)
- [Android Studio (or WebStorm or Eclipse)](http://developer.android.com/sdk/installing/bundle.html)
- [The Android SDK](http://developer.android.com/sdk/index.html)

Many developers get the Android SDK as part of Android Studio. The bundle is just a zip file. In the **other platforms** section of the downloads page you can find a zip file for the Android SDK. Support for Mac and Linux are also under **other platforms**.

Details on what to download are discussed below and also in the [page on setting up
Eclipse](http://www.elvenware.com/charlie/development/android/Eclipse.shtml).
But first let's talk about setting up your environment.

**NOTE**: *Eclipse used to be the preferred IDE for Android development. However, that has changed, and now Google prefers Android Studio. Whether you do Cordova development in Android Studio, Eclipse, WebStorm or some other tool is mostly a matter of taste. I find it easy to build the application from the command line, so I think the choice of IDE is simply a matter of taste and not of necessity. Just to be clear, the Android SDK is a necessity, you must install it. But Android Studio is optional. This means you can install the stand alone Android SDK rather than getting it as part of the Android Studio bundle.* 

The PhoneGap/Cordova Setup Cheat Sheet
--------------------------------------

To use the PhoneGap/Cordova **create** program to quickly and easily
create a Cordova project you need to make sure you have the path on your
system set up correctly so that several programs will run. In
particular, you want the following programs to run from the command
line:

-   javac
-   ant
-   adb
-   android
-   create

In other words, you should be able to type any of those words, exactly
as shown, and they should not produce an error that reads "XXX is not
recognized as an internal or external command." Some of the programs may
not do anything useful, but as long as they run, regardless of the ouput
they produce, then you are good. For instance, here is the output you
want to see from the **ant** program:

``` {.code}
C:\Users\Charlie>ant
Buildfile: build.xml does not exist!
Build failed
```

Right now, we don't need to supply a **build.xml** file, we just need to
see that **ant** is on the path. The output shown above confirms that
**ant** is indeed on the path. If it were not, we would get an error
about **ant** being an unrecognized command.

To ensure that all these programs run, you should set up the following
environment variables, as shown on the left of the table presented
below. On the right you see sample illustrations of what the paths could
be:

-   ANDROID\_SDK\_HOME -- C:\\Users\\Charlie\\EclipseAndroid\\sdk
-   ANT\_HOME -- C:\\Dev\\ApacheAnt-184
-   JAVA\_HOME -- C:\\Dev\\jdk
-   PHONEGAP\_HOME -- C:\\Dev\\PhoneGap-2.3.0

The paths on the right are merely suggestions;  you may wish to put
these folders somewhere else.

Next, you need to set up the path on your system. Look at this group of
paths, and see if they help:

  --------------------------------------- ---------
  %ANDROID\_SDK\_HOME%\\platform-tools;   adb
  %ANDROID\_SDK\_HOME%\\tools;            android
  %ANT\_HOME%\\bin;                       ant
  %JAVA\_HOME%\\bin;                      javac
  %PHONEGAP\_HOME%\\lib\\android\\bin     create
  --------------------------------------- ---------
  
The following **SanityCheck batch** file can help you confirm that you 
have at least set each of the environment variables on your system:

```
@ECHO OFF
IF NOT DEFINED JAVA_HOME GOTO MISSING_HOME
IF NOT DEFINED ANT_HOME GOTO MISSING_HOME
IF NOT DEFINED PHONEGAP_HOME GOTO MISSING_HOME
IF NOT DEFINED ANDROID_SDK_HOME GOTO MISSING_HOME

ECHO Looks good.

GOTO END

:MISSING_HOME
ECHO Missing one of the following:
ECHO JAVA_HOME - %JAVA_HOME%
ECHO ANT_HOME - %ANT_HOME%
ECHO PHONEGAP_HOME - %PHONEGAP_HOME%
ECHO ANDROID_SDK_HOME - %ANDROID_SDK_HOME%
ECHO -------------------
ECHO Try one of the following locations:
ECHO Apache ant: http://ant.apache.org
ECHO Android SDK: http://developer.android.com
ECHO Cordova: http://cordova.apache.org/
ECHO JDK: http://java.oracle.com
EXIT /B 1

:END
ECHO Your system currently has these settings:
ECHO -----------------------------------------
ECHO JAVA_HOME - %JAVA_HOME%
ECHO ANT_HOME - %ANT_HOME%
ECHO PHONEGAP_HOME - %PHONEGAP_HOME%
ECHO ANDROID_SDK_HOME - %ANDROID_SDK_HOME%
ECHO -----------------------------------------
```

- [Sanity Check on GitHub](https://github.com/charliecalvert/JsObjects/blob/master/Utilities/CordovaTemplates/SanityCheck.bat)
- [Similar for Linux/Mac](https://github.com/charliecalvert/JsObjects/blob/master/Utilities/CordovaTemplates/test.sh)

Your setup is likely different from mine, but it might still be helpful
to show the current setup on one of my systems as of January, 2014:

	JAVA_HOME - C:\Program Files\Java\jdk1.7.0_51
	ANT_HOME - C:\Development\apache-ant-1.9.3
	PHONEGAP_HOME - C:\Development\cordova
	ANDROID_SDK_HOME - C:\Users\Charlie\EclipseAdt\sdk

So long as you have the correct environment variables setup, then you
can add those paths to your system exactly as shown. For instance, I
appended the following to my path.

``` {.code}
%ANDROID_SDK_HOME%\platform-tools;%ANDROID_SDK_HOME%\tools;%ANT_HOME%\bin;%JAVA_HOME%\bin;%PHONEGAP_HOME%\bin
```

At the command prompt, this portion of my path produces the following
output when I type the word**path**:

``` {.code}
C:\Users\Charlie\EclipseAndroid\sdk\platform-tools;C:\Users\Charlie\EclipseAndroid\sdk\tools;C:\Development\ApacheAnt-184\bin;C:\Development\jdk\bin;C:\Development\PhoneGap-2.3.0\lib\android\bin
```

Use SetX to Set the Environment
-------------------------------

Here is a little batch file that you can create to automate the 
process of setting your environment variables:

	SetX JAVA_HOME "C:\Program Files\Java\jdk1.7.0_45"
	SetX ANT_HOME C:\Src\Ant\apache-ant-1.9.3
	SetX PHONEGAP_HOME C:\Src\cordova-android
	SetX ANDROID_SDK_HOME C:\Src\Eclipse\sdk
	
The SetX is built into windows. You can learn about it by searching
the internet or typing:

	setx /h

In the code shown above, we are setting environment variables:

	setx [ENVIRONMENT VARIABLE] [VALUE]

By default, the variable is set for the current user. If you want
to change the entire environment for all users, look in the /M 
parameter. Here is how the help describes that variable:

*/M Specifies that the variable should be set in the system wide 
(HKEY_LOCAL_MACHINE) environment. The default is to set the variable 
under the HKEY_CURRENT_USER environment.*





Details on Setting up the Environment for PhoneGap {#details}
--------------------------------------------------

Now that you have an overview of where you are headed, I will add a bit
more detail for those who are not clear on exactly how to proceed. The
first thing to understand is that it is possible to build a fully
functional "hello world" Cordova project using the tools that come with
the PhoneGap SDK. First make sure you have downloaded the SDK, unzipped
it, and placed it in a well known location, such as
**C:\\Dev\\Phonegap-2.3.0**
or**C:\\Users\\YourUserName\\Dev\\Phonegap-2.3.0**. Here is the download
site:

    http://phonegap.com/download/

Also download Ant, unzip it, and place it in the same Dev directory as
PhoneGap, ie C:\\Dev\\ApacheAnt-184:

    http://ant.apache.org/bindownload.cgi

### JAVA\_HOME

You need to set up the JAVA\_HOME [environment
variable](http://www.elvenware.com/charlie/os/windows/faq.html#environment).

For instance, set JAVA\_HOME to this value:

    C:\Program Files\Java\jdk1.6.0_27

### ANT\_HOME

Create an environment variable called ANT\_HOME and point it at the home
directory for ANT, the zip file you downloaded and probably put in
c:\\users\\yourname\\dev\\ant....

``` {.code}
C:\Users\charles.calvert\Dev\apache-ant-1.8.4
```

Set up the following path variables, altering the paths so they make
sense on your system. For instance, change the user name:

``` {.code}
%ANT_HOME%\bin;
C:\Users\charles.calvert\AndroidEclipse\sdk\platform-tools;
C:\Users\charles.calvert\AndroidEclipse\sdk\tools
%JAVA_HOME%\bin
```

The point is that you need to set up your path so that the Android SDK
**platform-tools** and **tools** directories are on your
[path](http://www.elvenware.com/charlie/os/windows/faq.html#environment):

``` {.code}
;C:\Users\Charlie\EclipseAndroid\sdk\platform-tools;C:\Users\Charlie\EclipseAndroid\sdk\tools
```

Make sure Java works from the command line. If not, set up
[Java-home](http://www.elvenware.com/charlie/os/windows/faq.html#environment).
Make sure javac will run from the command line. If not, examine the part
of your path that we set with **%JAVA\_HOME%\\bin**.

Create a PhoneGap/Cordova Project {#createPhoneGap}
---------------------------------

If you have everything set up right, then you should be able to go to
the command prompt and run **create**. 

As you know, in my system **create** is in:

``` {.code}
C:\Development\phonegap-2.3.0\lib\android\bin
```

On computers where you don't have rights to the root of the C drive, you
might try something like this:

``` {.code}
C:\Users\UserName\Dev\phonegap-2.3.0\lib\android\bin
```

But regardless of where you put the program, you should be able to run
it from any directory since it is now on your path.

Here is how to run the create program:

``` {.code}
create C:\Temp\Cordova03 com.elvenware.cordova03 Cordova03
```

This command tells create to build a Cordova project and put in a folder
called **C:\\Temp\\Cordova03**. The program will create the folder for
you. It will set up your program to run in the
**com.elvenware.cordova03** namespace. The name of the project it
creates will be **Cordova03**. This command creates a fully functional,
ready to use instance of a Cordova project.

Notice that I am putting the project in a temp directory. Assuming that
you are using Eclipse, the next step will be to copy it into our Eclipse
workspace. If you are not using Eclipse, then you can the project from
the temp directory or move it to someplace more useful.

To import the project in to Eclipse, choose **File | Import | Android |
Existing Android Code into Workspace**

**Browse** to your project. Select the **Copy Projects into
workspace**option. Click OK. Now you should see your project in the
Eclipse **Project Manager**. You can run it by right clicking, and
choosing **Run As | Android Application**.

Because you will be giving the command to create a project so often, it
helps to automate the process. Here is a batch file for running create.
To run it, you will need to be sure you have your
[PHONEGAP]\\lib\\android\\bin directory on your path, as described
above. Here is the batch file:

    set Project=Cordova03
    set ProjectSmall=cordova03
    create C:\Temp\%Project% com.elvenware.%ProjectSmall% %Project%

Please see this text on running batch files from NotePad++:

-   [http://www.elvenware.com/charlie/os/windows/faq.html\#runBatch](http://www.elvenware.com/charlie/os/windows/faq.html#runBatch)

NOTE: It seems like Mac users should be able to create your project in
your workspace, and then just import it without the Copy Projects into
workspace option. This does not, however, seem to work on a PC, which is
why we create the project in a temp directory, and then import it.

Running an PhoneGap/Cordova Project from Eclipse {#runProject}
------------------------------------------------

Once you have created the project, you need to import it by 
selecting **File | Import**. Now use the **Android | Existing 
Android Code into Workspace** option to browse for the root directory 
of your new PhoneGap project. After importing the 
project it should be visible in the **Project Explorer**. If the 
**Project Explorer** is not visible, choose **Window | Show View | 
Project Explorer** from the menu.

Plug in your Android device, start an Android X86 instance in VirtualBox,
or start the Emulator. You have to have the developer options turned on
for your device before you can use it for development. There are multiple
ways to set up the developer options on an Android device, so I'll ask
that you perform an Internet search to find the technique used for your
device. There are other, lengthy, sections of this Elvenware site that
describe how to set up Android x86 in VirtualBox.

- [Android x86 and VirtualBox](http://www.elvenware.com/charlie/development/android/Androidx86.shtml)

The emulator tends to be monumentally slow, but it is probably the 
easiest option to setup. To start the emulator:

-   From the Eclipse menu, choose **Window | Android Virtual Device
    Manager**.
-   Choose the emulated Android device you want to run, and press
    the **Start...** button.
-   If there is no device available to run choose **New**.
-   Fill in the **AVD name** with a name of your choice, ie: **MyAvd.**
-   Pick a device. For instance, **7.0" WSVGA (Tablet) (1024X600:
    mdpi)**.
-   Click **OK. **The device will take a long time to load, but it
    should indeed come up in 1 to 5 minutes. Once you have it open,
    don't close it until you are done, as the launch time is the longest
    step in the process. 

To Run the project:

-   Make sure you have plugged in a device or started the Emulator
-   Go back to the main window of the IDE. Select the top node for your
    project in the **Project Manager **or similar tool. The top node for
    your project is the node where you can see your project name. At
    this early stage, your project will probably have a name
    like **CordovaExample,** **Cordova** or **Cordova01.**
-   Right click and choose **Run as | Android Application**. If all is
    working right, your project should appear in the emulator after
    about a 1 minute delay.

Customize the Cordova Create Script {#customize}
-----------------------------------

Go to your **[dev]/[PhoneGap]/lib/android/bin/templates/project**
directory.

For instance, here is the path on my system:

    C:\Development\phonegap-2.3.0\lib\android\bin\templates\project

Back up the Assets directory. Make sure you have all your environment
variables set up as described above, and then run either of the batch
files found in the root of this zip file:

[/Charlie/downloads/Android/ElfCordova-V2.3-Templates-V1.0.zip](/charlie/downloads/Android/ElfCordova-V2.3-Templates-V1.0.zip)

(If you are on the Mac, or Linux, for now you can just delete the
existing Assets folder, and copy one of the new ones into the place
where you made the deletion.

If you open up the zip file you will find that I am simply replacing the
index.html, index.js, and index.css files with custom files set up the
way I prefer to see them. You will, I'm sure, want to implement changes
of your own. Once you see how the system works, you will probably find
it easy to modify these to create the effects you prefer. Notice that I
delete a number of the files that come with the default package. That is
why I suggest that you back up the original content before you delete
it. You can, of course, download a new copy of the original PhoneGap
templates at any time from the PhoneGap site.

 

PhoneGap Build
--------------

This cloud based service will take your HTML, CSS and JavaScript wrapped
up in a zip file and return verisons for Apple iOS, Android, Palm,
Symbian, and Blackberry. It is all done in the cloud. Right now the
service is free, but it will cost more when they get out of beta.

[https://build.phonegap.com/](https://build.phonegap.com/)

The Key Steps in Setting up Your Project
----------------------------------------

### Overview

1.  Set up Eclipse as you would for normal Android developmen: Eclipse
    Classic, Androids SDK, ADT
2.  Create a standard Android Project
3.  Ceate libs, xml and /assets/www folders and add
    1.  **assets/www/phonegap.js,**
    2.  **lib/phonegap.jar,**
    3.  **res/xml/plugins.xml and res/xml/phonegap.xml**

4.  **Edit manifest and**
5.  **Create assets/www/index.html**

Python Scripts to Automate Android to PhoneGap Conversion
---------------------------------------------------------

There are several solutions to this problem, but I have written some
scripts that help me convert Android applications to PhoneGap. To get
started, first be sure that you have installed Python. You might also
want to install [PyDev](../web/Python/pydev.html), which is a Python
development environment in the form of an add on to
[Eclipse](Eclipse.shtml). An alternative would be to install
[Aptana](http://aptana.com/), which is a version of Eclipse that comes
with PyDev built-in.

After installing Python, you should download the two zip files shown
below. The first contains the scripts that convert the project, the
second contains the core parts of the PhoneGap tools that need to be
included in your PhoneGap projects. The scripts should work on Windows,
Linux and the Mac.

-   Unzip both projects into your current Eclipse workspace where you
    want to work on PhoneGap projects.
-   From the Eclipse menu, choose **File | Import | General | Existing
    Projects into Workspace.**Click **Next.**
-   Click the **Browse** button and select the **PythonPhoneGap**folder.
    This will import my scripts into Eclipse.
-   Open AndroidToPhoneGap and edit the **destDir** and **srcDir**
    fields to match the paths on your system.

When you are done, the destDir and srcDir fields might look like this,
assuming your workspace is in [J:\\src\\PhoneGap](file:///J:/src)/. Note
that the \# sign is a comment in Python, and that we use forward slashes
rather than back slashes, and that we include a trailing slash at the
end of each line:

``` {.code}
# Here is an Android project to be converted
destDir = "J:/src/PhoneGap/PhoneGap03/"
# Here is where the files from PhoneGap live
srcDir="J:/Src/PhoneGap/PhoneGapBase/" 
```

### Links

-   [Download Charlie's Python scripts for automating Android to
    PhoneGap](../../downloads/Android/PythonPhoneGap.zip)
-   [PhoneGapBase](../../downloads/Android/PhonegapBase.zip) (The core
    files from PhoneGap 1.4.1)

HTML 5 vs Android
-----------------

### HTML 5 Advantages

There are many platforms out there, and targeting HTML 5 gets you to all
platforms at once. The idea is to have one platform to target all these
devices. Most of the modern phones use WebKit, which fully supports HTML
5.

-   HTML 5 is available for mobile
-   HTML 5 is able to build powerful applications
-   HTML 5 is open and cross platform

You can embed web apps inside native apps. People don't want to have to
open a browser to open a web app.

HTML 5 is really HTML 5, CSS and JavaScript. It doesn't all work on all
platforms, but it works in a wide variety of locations. Graceful
degradation helps you work with this problem, in particular because
things that are not supported are just ignored.

HTML5 is fluid. It stretches and morphs on different screens even if you
don't write platform specific code.

HTML 5 is compelling because it supports:

-    Geolocation, such as getCurrentPosition.
    (navigator.geolocation.getCurrentPosition.
-   Multitouch
-   Device orientation
-   Speech recognition is available on Chrome and access to device API's
    like the camera.
-   Canvas and WebGL
-   Video and audio is possible
-   Ajax and XMLHttpRequest allows us to access the web and share
    resources
-   Offline application cache and offline storage with application
    cache.
-   And of course it is open, cross platform, and everyone knows it.
-   It has great libraries and tools, JQuiery MootTOols, YUI, Closure.
    Chrome Developer TOols, Firebug, Page Speed.

### Native Android Apps

Can be built with Dalvik and Java, or C++, or RenderScript for graphics
code. You also have access to Python. These are all Android specific
tools.

Native apps are good:

-   Richer look and feel
-   Better integration with the hardware and OS, and hardware keeps
    changing faster than HTML5 can keep up.
-   You have more speed, power, control and integration
-   Devices are naturally, small, resource constrained, and
    underpowered, so you want to get every advantage possible.
-   Standards like HTML5 have to trail the hardware. New sensors, new
    hardware, show up in native apps.
-   Each app is part of the ecosystem, you can replace any part of the
    OS, including hte home screen, with a native app. It hooks right
    into to system messages and requests. You can run in the background,
    getting updates when they come in, or going quiet when not needed,
    and being woken up when needed. There is very full offline support.
-   You have features like Widgets, Live Allpapers, rich notifications,
    lots of things that you can't do with HTML.

The point here is that there are great features in HTML 5, and great
features in native applications. Perhaps you should build a web app for
everyone, and then build a native app for successful platorms.

With WebViews you can get a bit of both worlds, have a native app that
leverages your HTML5 code.

Some powerful tools, Sproutcore, Sencha touch, jquery mobile, jo, iUI,
Modernizr, Polyfills

-   **HTML5 calls native**: WebView.addJavaScriptInterface(new
    BarameterReader(), "barometer")
-   **Native calls HTML5**: loadURL("javascript:
    updateScore("+score+");");
-   Chrome has the idea of background apps. So you can run an HTML5 in
    the background, but it uses a lot of battery, but they can sleep and
    wait to be worken up.

Using the jQuery ajax Command in PhoneGap
-----------------------------------------

If you use jQuery **ajax,**or related calls in a PhoneGap application,
if you try to use **LocalHost** in your URL, you are asking to reach the
web server of the Android operating system that your application is
hosted on. In most cases, there will be no web server on that Phone/OS,
and so you will just get an error. If there were a WebServer on the
device, it would still likely fail, because your database, data and
scripts are probably not on the phone, but back on your web server.

The important thing to grasp here is that an Android emulator or
VirtualBox running Android x86 is, for all intents and purposes the same
thing as a phone. It is a separate operating system, a separate device
from the copy of Windows, Mac, or Linux that is hosting it. That's what
we mean by a virtual machine: it is a virtual computer/phone/device
hosted by your main OS. It thinks its running on its own device, and so
does your web server.

To make things work, you need to create a URL that can be reached from
your virtual device, from a real phone. The first thing to test is
whether the URL can be reached from the Browser on your computer. As a
rule, if the URL does not work on your browser, then it won't work in
the virtual device or in a real phone. Remember that you can simulate
passing parameters in a URL when testing in the browser:

[http://localhost:8000/cgi-bin/AddingDataXml.py?operanda=1&operandb=2&answer=3](http://localhost:8000/cgi-bin/AddingDataXml.py?operanda=1&operandb=2&answer=3)

You don't use the part after the question mark in your PhoneGap program,
but you do in your test URL that you run in the browser.

Of course the URL above won't work in the phone, because it references
localhost. You need to use the Windows command line utility **ipconfig**
to get the actual IP address of your machine. In my case, it is
192.168.0.100:

[http://192.168.0.100:8000/cgi-bin/AddingDataXml.py?operanda=1&operandb=2&answer=3](http://192.168.0.100:8000/cgi-bin/AddingDataXml.py?operanda=1&operandb=2&answer=3)

An address like that should work in an emulator, in VirtualBox or on
your phone. If it does not, that means you don't have your FireWall set
up correctly as explained here:

[http://www.elvenware.com/charlie/development/web/Server/SetupAWebSite.html](http://www.elvenware.com/charlie/development/web/Server/SetupAWebSite.html)

Ant
---

Download Apache Ant:

[http://ant.apache.org/bindownload.cgi](http://ant.apache.org/bindownload.cgi)

Read how to install it:

[http://wiki.apache.org/ant/AntOnWindows](http://wiki.apache.org/ant/AntOnWindows)

Additional:

[http://simonmacdonald.blogspot.ca/2012/11/getting-create-command-to-work-on.html](http://simonmacdonald.blogspot.ca/2012/11/getting-create-command-to-work-on.html)

Check the following. Go to the command prompt and confirm that you can
run:

-   **ant** from \\ant\\bin. Is **JAVA\_HOME** setup? is **ANT\_HOME**
    set up? Is**%ANT\_HOME%\\bin** on your path?
-   **adb**from \\androidsdk\\platform-tools
-   **create** from \\phonegap\\lib\\android\\bin

You should be able to type **java -version** and get reasonable output.
Make sure that **javac.exe** is on your path. This usually means putting
**\\jdk\\bin** on your path.

