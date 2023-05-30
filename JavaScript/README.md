# JavaScript Programs

Lots of examples related to JavaScript. See the subdirectories.

Run two command like this:

```sh
DEBUG=joj:run-npm-start node run-npm-install.js Syntax ncu"
DEBUG=joj:run-npm-start node run-npm-install.js Syntax install"
```

The first runs **ncu** in the all subdirectories of the **Syntax** directory. The second runs **npm install** in all subdirectories of the **Syntax** directory.

The **clean-package-json.sh** program removes obsolete packages from the **devDependencies** of the **package.json** files in the subdirectories of the **Syntax** directory.

@see [run-npm-install.js](run-npm-install.js)
@see [clean-package-json.sh](clean-package-json.sh)
@see [package.json](package.json) the scripts section
