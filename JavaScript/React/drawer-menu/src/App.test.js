import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Bar from './Bar';
import Foo from './Foo';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MuiThemeProvider><App/></MuiThemeProvider>, div);
});

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Bar/>, div);
});

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Foo/>, div);
});
