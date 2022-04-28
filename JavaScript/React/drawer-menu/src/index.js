import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <MuiThemeProvider>
        <App />
    </MuiThemeProvider>,
    document.getElementById('root'),
);

registerServiceWorker();
