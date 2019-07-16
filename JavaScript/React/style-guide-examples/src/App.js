import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {MyComponent} from './components/MyComponent';
import ElfComponent from './components/ElfComponent';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>

                <p className="App-intro">
                    To see the style guide, try: <b>npm run bar</b>. Click on <b>Props & Methods</b> or click on <b>View Code</b>.
                </p>
                <MyComponent className="elfview" />
                <ElfComponent className="elfview" id="elf12" />
            </div>
        );
    }
}

export default App;
