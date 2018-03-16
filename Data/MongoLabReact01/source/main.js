import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { ReactBasics } from './react-basics.js';

ReactDOM.render(
    <MuiThemeProvider>
        <ReactBasics/>
    </MuiThemeProvider>,
    document.getElementById('root')
);
