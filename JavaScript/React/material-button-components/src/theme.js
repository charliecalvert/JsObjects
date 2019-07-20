import {blue, orange, purple, red} from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
    palette: {
        primary: {
            main: blue.A700,
        },
        secondary: {
            main: purple.A700,
        },
        error: {
            main: red.A400,
        },
        background: {
            paper: '#cce2ee',
            default: orange.A700
        },
    },
});

export default theme;
