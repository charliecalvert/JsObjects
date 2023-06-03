# Overview

Basic node server with support for:

- webpack
- babel
- nodemon
- bower (For legacy code only. Don't use in most cases)

// See:

- package.json start script launches source/control.js
- control.js renders ElfApp.js

To run:

```bash
    npm i
    npm run build
    npm start
```

## Client Side

Start your client side code by editing **source/control.js**

## Server Side

The usual Node JS code in **views** and **routes**.

## Errors

Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console. Otherwise, you will get an error like this:

```bash
    FirebaseError: Firebase: No Firebase App '[DEFAULT]' has been created - call Firebase App.initializeApp() (app/no-app). (app/no-app).
```

Look in the file **source/elf-firebase.js**.

Look at: [https://console.firebase.google.com/project/YOUR-PROJECT/settings/general/>](<https://console.firebase.google.com>) for the authDomain.

## Reg Ex

```regex
^(const|var)(\s.*\s*)=(\s*)(require)(\(*.)([^'\)]*')(\));
import$2from $3'$6;
```

@see <https://airyboy.medium.com/replacing-commonjs-imports-with-es-imports-using-the-vscodes-regex-replace-f8ae2377627f>

## Material UI

I'm using weback. For me, the solution was to import named objects rather than the default:

```javascript
import { Button, Paper, Typography } from '@mui/material';
```

This was the code was failing for me:

```javascript
//   import Typography from '@mui/material/Typography';
//   import Button from '@mui/material/Button';
//   import Paper from '@mui/material/Paper';
```

Exactly why this is the case is a mystery to me. I got onto the idea because I'm using webpack and read up on the subject in the [in the docs](https://mui.com/material-ui/guides/minimizing-bundle-size/).

There relevant are the parts of my package dot JSON look like this:

```json
"@emotion/react": "^11.11.0",
"@emotion/styled": "^11.11.0",
"@mui/icons-material": "^5.11.16",
"@mui/material": "^5.13.3",
"@mui/system": "^5.13.2",
```

## ESLint

```json
{
    "extends": [
  "eslint:recommended",
  "plugin:react/recommended"
 ],
    "rules": {
        // enable additional rules
        "indent": ["error", 4, {"SwitchCase": 1}],
        "linebreak-style": ["error", "unix"],
        "quotes": ["warn", "single"],
        "semi": ["error", "always"],

        // override default options for rules from base configurations
        "comma-dangle": ["off", "always"],
        "no-cond-assign": ["error", "always"],

        // disable rules from base configurations
        "no-console": "off",
        "no-control-regex": "warn"
    },
    "parser":  "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 7,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "env": {
        "browser": true,
        "node": true,
        "jest": true,
        "es6": true
    },
    "settings": {
        "react": {
            "pragma": "React",
            "version": "16.6.0"
        }
    }
}
```

// Write a simple eslint configuration file.

```json
'import/no-unresolved': [2, {commonjs: true, amd: true}],
    'import/named': 2,
    'import/default': 2,
    'import/export': 2,
```
