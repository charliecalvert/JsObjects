# NodeInstall

The most important utilities in this folder are:

* NodeInstall: It should install the most recent version of NodeJs on a Linux system.
* InstallNodePackages: Install global node packages into the ~/npm folder
* CreateExpressProject: Create and configure a default express project
* TestReady: Take a project created with **CreateExpressProject** and set it up to handle unit tests.

## TestReady

In this folder you will find a file called [TestReady][tr]. It sets up the:

1. test runner called **Karma**
1. build utility called **Grunt**
1. syntax checker called **JsHint**
1. testing framework called **Jasmine**
1. And it creates a default unit test in a directory called **spec**

**NOTE**: *Make sure you have installed **js-beautify**. This utility can help you properly format and indent your javascript files.*

```
npm install -g js-beautify
```

To prove that we have done the above steps correctly, we can run our default test:

```
grunt test
```

[tr]:https://github.com/charliecalvert/JsObjects/blob/master/Utilities/NodeInstall/TestReady
