import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import blue from '@material-ui/core/colors/blue';
import CssBaseline from '@material-ui/core/CssBaseline';

const themePurple = createMuiTheme({
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

ReactDOM.render(
    <MuiThemeProvider theme={themePurple}>
        <CssBaseline/>
        <App/>
    </MuiThemeProvider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
