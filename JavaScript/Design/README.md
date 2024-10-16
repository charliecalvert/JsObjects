# Overview

```text
Create a gulpfile.js that visits the following directories and runs
this command: "ncu -j" and writes the output to temp.json
if there is a package.json file in the directory.

BridgeSailor
DecorateSailor
ElfRoutes01
ElfRoutes02
FactoryInterface
FactorySimple01
GridCanonical
GridCleanSite
GridExpress
GridExpressFetch
GridTwelveCols
IBitDay2016
JadeMixinComplete
JadeMixinSimple
JsonFromServer
JsonFromServer02
Knockout01
MaterialComponents
OldAngular
PubSubTopic01
PubSubTopic02
PubSubTopic03
PubSubTopic04
Ractive
RequireBoat
RequireCrafty
RequireJs01
SimpleQueue
Singleton
```

## JavaScript

```text
Create a gulpfile.js that visits the following directories
and copies temp.json to package.json if temp.json exists.

BridgeSailor
DecorateSailor
ElfRoutes01
ElfRoutes02
FactoryInterface
FactorySimple01
GridCanonical
GridCleanSite
GridExpress
GridExpressFetch
GridTwelveCols
IBitDay2016
JadeMixinComplete
JadeMixinSimple
JsonFromServer
JsonFromServer02
Knockout01
MaterialComponents
OldAngular
PubSubTopic01
PubSubTopic02
PubSubTopic03
PubSubTopic04
Ractive
RequireBoat
RequireCrafty
RequireJs01
SimpleQueue
Singleton
```

## Angular

- [Angular00 Hello](https://github.com/charliecalvert/JsObjects/tree/master/JavaScript/Design/Angular00)
- [Angular01 Hello](https://github.com/charliecalvert/JsObjects/tree/master/JavaScript/Design/Angular01)
- [Angular02 ToDo List](https://github.com/charliecalvert/JsObjects/tree/master/JavaScript/Design/Angular02)
- [AngularButton Button Clicks](https://github.com/charliecalvert/JsObjects/tree/master/JavaScript/Design/AngularButton)
- [AngularCaluculator Regular app and Jasmine Unit Tests](https://github.com/charliecalvert/JsObjects/tree/master/JavaScript/Design/AngularCalculator)
- [AngularThreeModules01 Show modules with Jasmine](https://github.com/charliecalvert/JsObjects/tree/master/JavaScript/Design/AngularThreeModules01)
- [AngularThreeModules02 Show modules](https://github.com/charliecalvert/JsObjects/tree/master/JavaScript/Design/AngularThreeModules02)
- [AngularThreeModules03 Show modules](https://github.com/charliecalvert/JsObjects/tree/master/JavaScript/Design/AngularThreeModules03)
- [AngularDirective Show Directives](https://github.com/charliecalvert/JsObjects/tree/master/JavaScript/Design/AngularDirective)

## Save Me

```text
$ npm cache clean && npm i --loglevel=info
npm error As of npm@5, the npm cache self-heals from corruption issues
npm error   by treating integrity mismatches as cache misses.  As a result,
npm error   data extracted from the cache is guaranteed to be valid.  If you
npm error   want to make sure everything is consistent, use `npm cache verify`
npm error   instead.  Deleting the cache can only make npm go slower, and is
npm error   not likely to correct any problems you may be encountering!
npm error
npm error   On the other hand, if you're debugging an issue with the installer,
npm error   or race conditions that depend on the timing of writing to an empty
npm error   cache, you can use `npm install --cache /tmp/empty-cache` to use a
npm error   temporary cache instead of nuking the actual one.
npm error
npm error   If you're sure you want to delete the entire cache, rerun this command
npm error   with --force.
npm error A complete log of this run can be found in: /home/ubuntu/.npm/_logs/2024-10-16T23_31_35_251Z-debug-0.log
```

```JavaScript
/* exec('ncu', (error, stdout, stderr) => {
    if (error) {
        console.error(`Error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.error(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);

    // Optionally install updated dependencies
    if (false) {
        exec('npm install', (error, stdout, stderr) => {
            // ... handle output or errors
            if (error) {
                console.error(`Error: ${error.message}`);
                return;
            }
            if (stderr) {
                console.error(`stderr: ${stderr}`);
                return;
            }
            console.log(`stdout: ${stdout}`);
        });
    }
});  */
```
