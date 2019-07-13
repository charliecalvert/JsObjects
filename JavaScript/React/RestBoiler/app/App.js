import React from 'react';
import styles from './App.css';
import 'whatwg-fetch';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.getNine = this.getNine.bind(this);
        this.state = {
            nine: 'Get Nine Result will be placed here.',
            result: 'waiting for server'
        };
    }

    getNine() {
        const that = this;
        fetch('/get-nine-from-server')
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                console.log('parsed json', json);
                that.setState(() => json);
            })
            .catch(function(ex) {
                console.log('parsing failed', ex);
            });
    }

    render() {
        return (
            <div className={styles.app}>
                <h1>Elf Rest Boiler</h1>
                <p>Boilerplate for React application with hot reloading.</p>
                <button id="getNine" onClick={this.getNine}>
                    Get Nine
                </button>
                <p>NINE: {this.state.nine}</p>
                <p>FOO: {this.state.result}</p>
            </div>
        );
    }
}
