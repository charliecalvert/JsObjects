import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import theme from './theme';

ReactDOM.render(<ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    <App />
</ThemeProvider>, document.getElementById('root'));
registerServiceWorker();
