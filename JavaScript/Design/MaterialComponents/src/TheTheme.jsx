import React from 'react';
import App from './App';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import green from '@mui/material/colors/green';
import blue from '@mui/material/colors/blue';
import CssBaseline from '@mui/material/CssBaseline';

const themePurple = createTheme({
    typography: {
        useNextVariants: true
    },
    palette: {
        primary: {
            light: blue[300],
            main: blue[500],
            dark: blue[700]
        },
        secondary: {
            light: green[300],
            main: green[500],
            dark: green[700]
        },
        background: {
            paper: '#cce2ee',
            default: '#ddf3ff'
        }
    }
});

// See : https://material-ui.com/customization/default-theme/
export const TheTheme = () => {
    return (
        <ThemeProvider theme={themePurple}>
            <CssBaseline />
            <App />
        </ThemeProvider>
    );
};

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
