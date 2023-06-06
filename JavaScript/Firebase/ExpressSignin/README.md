# ExpressSignin

by Charlie Calvert

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
