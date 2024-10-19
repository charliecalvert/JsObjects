## Overview

This repository contains a variety of JavaScript projects. The projects are organized by topic.

## The fix

```bash
#! /bin/bash

# Delete all dependabot branches
git push origin --delete dependabot/npm_and_yarn/JavaScript/UnitTests/Jasmine03/socket.io-parser-4.2.3
```

```text
# Basic `dependabot.yml` file with
# minimum configuration for two package managers

version: 2
updates:
  # Enable version updates for npm
  - package-ecosystem: "npm"
    # Look for `package.json` and `lock` files in the `root` directory
    directory: "/"
    # Check the npm registry for updates every day (weekdays)
    schedule:
      interval: "daily"
```

## What it fixes

All the dependabot branches are now deleted.

Here is one view of the branches:

```bash
$ git br -a
* master
  remotes/origin/HEAD -> origin/master
  remotes/origin/MakeHtmlConvert
  remotes/origin/copy-setup-from-working-example
  remotes/origin/dependabot/npm_and_yarn/Cordova/ElvenGeo/minimatch-3.1.2
  remotes/origin/dependabot/npm_and_yarn/Cordova/ElvenGeo/plist-3.0.6
  remotes/origin/dependabot/npm_and_yarn/JavaScript/Design/FactorySimple01/engine.io-6.4.2
  remotes/origin/dependabot/npm_and_yarn/JavaScript/Design/IBitDay2016/engine.io-6.4.2
  remotes/origin/dependabot/npm_and_yarn/JavaScript/Design/OldAngular/AngularTestBackend/engine.io-6.4.2
  remotes/origin/dependabot/npm_and_yarn/JavaScript/Design/OldAngular/AngularTestBackend/socket.io-parser-4.2.3
  remotes/origin/dependabot/npm_and_yarn/JavaScript/Design/OldAngular/AngularTestController/engine.io-6.4.2
  remotes/origin/dependabot/npm_and_yarn/JavaScript/Design/OldAngular/AngularTestController/socket.io-parser-4.2.3
  remotes/origin/dependabot/npm_and_yarn/JavaScript/Design/OldAngular/AngularTestControllerAs/engine.io-6.4.2
  remotes/origin/dependabot/npm_and_yarn/JavaScript/Design/OldAngular/AngularTestControllerAs/socket.io-parser-4.2.3
  remotes/origin/dependabot/npm_and_yarn/JavaScript/NodeCode/NodeRoutesQuery/engine.io-6.4.2
  remotes/origin/dependabot/npm_and_yarn/JavaScript/React/gatsby-site/socket.io-parser-4.2.3
  remotes/origin/dependabot/npm_and_yarn/JavaScript/UnitTests/AngularFactoryTest/engine.io-6.4.2
  remotes/origin/dependabot/npm_and_yarn/JavaScript/UnitTests/AngularFactoryTest/socket.io-parser-4.2.3
  remotes/origin/dependabot/npm_and_yarn/JavaScript/UnitTests/AsyncJsonReader/engine.io-6.4.2
  remotes/origin/dependabot/npm_and_yarn/JavaScript/UnitTests/AsyncJsonReader/socket.io-parser-4.2.3
  remotes/origin/dependabot/npm_and_yarn/JavaScript/UnitTests/InjectHtmlFixture/engine.io-6.4.2
  remotes/origin/dependabot/npm_and_yarn/JavaScript/UnitTests/InjectHtmlFixture/socket.io-parser-4.2.3
  remotes/origin/dependabot/npm_and_yarn/JavaScript/UnitTests/Jasmine01/engine.io-6.4.2
  remotes/origin/dependabot/npm_and_yarn/JavaScript/UnitTests/Jasmine01/socket.io-parser-4.2.3
  remotes/origin/dependabot/npm_and_yarn/JavaScript/UnitTests/Jasmine02/engine.io-6.4.2
  remotes/origin/dependabot/npm_and_yarn/JavaScript/UnitTests/Jasmine02/socket.io-parser-4.2.3
  remotes/origin/dependabot/npm_and_yarn/JavaScript/UnitTests/Jasmine02a/engine.io-6.4.2
  remotes/origin/dependabot/npm_and_yarn/JavaScript/UnitTests/Jasmine02a/socket.io-parser-4.2.3
  remotes/origin/dependabot/npm_and_yarn/JavaScript/UnitTests/Jasmine03/engine.io-6.4.2
```

What is left after deleting the branches:

```bash
$ git br -a
* master
  remotes/origin/HEAD -> origin/master
  remotes/origin/MakeHtmlConvert
  remotes/origin/copy-setup-from-working-example
  remotes/origin/dockertest
  remotes/origin/foo12
  remotes/origin/forlooptest
  remotes/origin/it-works-08-09-10-2024
  remotes/origin/master
  remotes/origin/nodetest
```
