Check **config/ElvenConfig.json** to make sure it makes sense for your system

I have a script called **renewMakeHtml**, which can help with the install or updating process. I keep this script in the **MakeHtml** folder. You don't, however, want to run **renewMakeHtml** from inside of the **~/Source/MakeHtml** folder. I store the file there, just because it belongs to that project, but it should, in our case, be run from **~/Source**.

It only needs to be run occasionally. For instance, run it after I have updated my **MakeHtml** program. (I perhaps should have called it **updateMakeHtml**, or **copyLatestMakeHtml**.)

There are only two reasons to run **renewMakeHtml**:

    To install **MakeHtml**
    To update **MakeHtml**



The very first time you need to use **MakeHtml** on a new system, you should copy **renewMakeHtml** from **JsObjects** to ~/**Source**:

```
cp $JSOBJECTS/JavaScript/NodeCode/MakeHtml/renewMakeHtml ~/Source/.
```

Then run the script.

But you only need to do this once on any particular system. For instance, once on Pristine Lubuntu at school, once on Pristine Lubuntu at home, and once on EC2. After that you can forget it, unless I specifically say: "Hey, I updated **MakeHtml** to fix a bug or to get a new feature such as X or Y." Then you would run it to get the latest bits from **JsObjects** by running the script.

More specifically: after installing **MakeHtml**, you can use the script to update it. Suppose I have made a change to **MakeHtml** and wanted you to get my recent changes. Then you should switch to the ~/Source folder, and run **renewMakeHtml**. That will delete your old copy of **~/Source/MakeHtml** and copy out a new one from **JsObjects**.

The major take away: don't run **renewMakeHtml** too often. When you run it, the **config** file gets overwritten, and then you need to edit it again. Only run the script to install the program the first time, or when I announce an update. In the normal course of things, updates are infrequent.

