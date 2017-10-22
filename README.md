# JsObjects

This repository contains sample code by Charlie Calvert for his classes and for Elvenware. In it you will find various sample JavaScript, HTML, CSS, Node, Bash scripts, and Python Projects.

To properly install a read-only copy of JsObjects first create a directory called *~/Git* if it does not already exist:

```bash
mkdir ~/Git
```

Note that this directory should be a subdirectory of your home directory.

Now navigate to that directory and clone JsObjects from GitHub:

```bash
cd ~/Git
git clone https://github.com/charliecalvert/JsObjects.git
```

I have many different example programs stored in this repository. Note especially the Utilities and JavaScript directories. And many other things as well.

All the code in JsObjects is released under the MIT license.

## Core Setup

Students in my classes, and readers of my text, should have JsObjects setup correctly on their systems. In particular, I suggest creating a virtual machine that runs the Ubuntu Linux OS. You can then install JsObjects on it and perform the necessary setup without causing any conflicts with code on your primary machine. You don't have to do things this way, but it is perhaps the simplest course of action for many readers.

On Linux systems, you can quickly and easily perform the setup by running the [UbuntuAndCloundNineSetup][ubuntu-setup] script.

**NOTE**: _This script will save your current **.bash_aliases** file as **.bash_aliases.old** and will install a new **.bash_aliases** file. It will also append text to the end of your **.bashrc** file._

Choose either the first or second option from the script's menu:

```text
Ubuntu
  a) Run All (Basic and Node Related)
  b) Run Basic Setup (All but Node Related)
```

The first will install node and set up your system for work in my classes. The second will set up your system, but will not install node.

When you are done, type the following:

```bash
source ~/.bashrc
```

If you want more details, go here: [Core Setup][core-details]

[ubuntu-setup]:https://github.com/charliecalvert/JsObjects/blob/master/Utilities/SetupLinuxBox/UbuntuAndCloudNineSetup
[core-details]:http://www.elvenware.com/charlie/os/linux/ConfigureLinux.html#core-setup

## Simple view

JsObjects is a useful, but massive and disorganized repository. If you want a more simplified view of this repository, see the **SimpleView** branch.

```nohighlighting
cd ~/Git/JsObjects
git checkout SimpleView
```

This view shows only a few folders. It can help you see the core parts of the repository used most often by students.

To return to the normal view:

```nohighlighting
git checkout master
```

## Navigating JsObjects

JsObjects is big and hard to navigate. I have, however, created a series of Bash aliases that can help you quickly find what you are looking for by only entering a few keystrokes.

For instance, from the Bash prompt, you should be able to type *jo* to quickly get to **~/Git/JsObjects**. Typing **joj** should take you to **~/Git/JsObjects/JavaScript**. If these shortcuts are working on your system, then that is a sign that it is setup correctly. If they are not working, try running the *UbuntuAndCloudNineSetup* script as described above.

These aliases are stored near the bottom of my *.bash_aliases* file, which is found [here][js-bash-aliases]. The **.bash_aliases** file is referenced in your **.bashrc** file and should be run automatically whenever you open a Bash shell. As implied above, your **.bashrc** file can also be processed by typing:

```bash
source ~/.bashrc
```

Students in my classes, and readers of my assignments and texts, will find that I often reference these aliases. Rather than asking you type a long path such as **~/Git/JsObjects/JavaScript/NodeCode**, I will ask you to run the **jon** alias. Of course, none of this will work unless you first set up your system correctly as described above.

[js-bash-aliases]:https://github.com/charliecalvert/JsObjects/blob/master/Utilities/SetupLinuxBox/.bash_aliases

## Node Install

On Windows, run the install found at the [nodejs](https://nodejs.org/) site.

On Linux, you can run the **UbuntuAndCloudNineSetup** described above.

Learn more about it here:

- [Configure Linux and Node Install][node-install]
- [Node on Elvenware][elven-node]
- [NPM Global Installs][npm-global]

[node-install]:http://www.elvenware.com/charlie/os/linux/ConfigureLinux.html#install-node
[elven-node]:http://www.elvenware.com/charlie/development/web/JavaScript/NodeJs.html#node
[npm-global]:http://www.elvenware.com/charlie/development/web/JavaScript/NodeJs.html#npm-global
