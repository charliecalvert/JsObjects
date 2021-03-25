# JsObjects

_by Charlie Calvert_

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

A more complete script would run my **UbuntuSetup** to set up node development with a JsObjects style. It will install node and add a number of global npm utilities. The script looks like this:

```bash
#! /usr/bin/env bash

cd ~/.

mkdir -p Git

cd Git

git clone https://github.com/charliecalvert/JsObjects.git
cd JsObjects/Utilities/SetupLinuxBox/
./UbuntuSetup
```

Comment out **cd ~/.** if you don't want to start in the home directory. You comment with the hash mark: 

**# cd ~/.**

I have many different example programs stored in this repository. Note especially the Utilities and JavaScript directories. And many other things as well.

All the code in JsObjects is released under the MIT license.

## Core Setup

Students in my classes, and readers of my text, should have JsObjects setup correctly on their systems. In particular, I suggest creating a virtual machine that runs the Ubuntu Linux OS. You can then install JsObjects on it and perform the necessary setup without causing any conflicts with code on your primary machine. You don't have to do things this way, but it is perhaps the simplest course of action for many readers.

On modern Ubuntu based Linux systems, you can quickly and easily perform the setup by running the [UbuntuSetup][ubuntu-setup] script. I have tested this script extensively, however, I think it is best to run it on a freshly minted VM running in a tool such as VirtualBox or VMware. When I install a fresh copy of Ubuntu, Lubuntu or Mint either in a VM or directly to metal, this is usually the first thing I do. I hesitate recommending that you do this on other systems simple because it adds the commands [specified here][brcext] to your **.bashrc** file. The script also installs a fresh copy of NodeJs. There are various ways to install node, and it is probably not best to mix one with another. Hence I recommend a fresh install of an Ubuntu based distro before proceeding, unless you are sure you do not have Node installed already.

If you are using [Pristine Lubuntu][pvba] then this script has already been run, and running it a second time will rarely cause damage unless you have done something odd your instance of Pristine Lubuntu. If all all else fails, I strongly recommend just downloading a fresh copy of Pristine Lubuntu.

- [Pristine VirtualBox Assignment][pvba]

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

**NOTE**: _It is best not to edit the files in a repository that you do not own, such as JsObjects. If you want to edit a file or other entity such as a project, I suggest coping it to another location on your hard drive. If you have a bit of experience with Git, then an alternative is to create a fork of the repository._

## Navigating JsObjects

JsObjects is big and hard to navigate. I have, however, created a series of Bash aliases that can help you quickly find what you are looking for by only entering a few keystrokes.

For instance, from the Bash prompt, you should be able to type *jo* to quickly get to **~/Git/JsObjects**. Typing **joj** should take you to **~/Git/JsObjects/JavaScript**. If these shortcuts are working on your system, then that is a sign that it is setup correctly. If they are not working, try running the *UbuntuAndCloudNineSetup* script as described above.

These aliases are stored near the bottom of my *.bash_aliases* file, which is found [here][js-bash-aliases]. The **.bash_aliases** file is referenced in your **.bashrc** file and should be run automatically whenever you open a Bash shell. As implied above, your **.bashrc** file can also be processed by typing:

```bash
source ~/.bashrc
```

Students in my classes, and readers of my assignments and texts, will find that I often reference these aliases. Rather than asking you type a long path such as **~/Git/JsObjects/JavaScript/NodeCode**, I will ask you to run the **jon** alias. Of course, none of this will work unless you first set up your system correctly as described above.

## Node Install

On Windows, run the install found at the [nodejs](https://nodejs.org/) site.

On Linux, you can run the **UbuntuAndCloudNineSetup** described above.

Learn more about it here:

- [Configure Linux and Node Install][node-install]
- [Node on Elvenware][elven-node]
- [NPM Global Installs][npm-global]


## Grunt

There are a few grunt tasks defined. One would be:

    npm run lint

This will use Grunt to lint the files in the root JsObjects directory.  

<!--       -->
<!-- Links -->
<!--       -->

[ubuntu-setup]:https://github.com/charliecalvert/JsObjects/blob/master/Utilities/SetupLinuxBox/UbuntuSetup
[brcext]: https://github.com/charliecalvert/JsObjects/blob/master/Utilities/SetupLinuxBox/BashrcExtras
[core-details]:http://www.elvenware.com/charlie/os/linux/ConfigureLinux.html#core-setup
[pvba]: http://www.ccalvert.net/books/CloudNotes/Assignments/PristineVirtualBox.html

[js-bash-aliases]:https://github.com/charliecalvert/JsObjects/blob/master/Utilities/SetupLinuxBox/.bash_aliases

[node-install]:http://www.elvenware.com/charlie/os/linux/ConfigureLinux.html#install-node
[elven-node]:http://www.elvenware.com/charlie/development/web/JavaScript/NodeJs.html#node
[npm-global]:http://www.elvenware.com/charlie/development/web/JavaScript/NodeJs.html#npm-global
