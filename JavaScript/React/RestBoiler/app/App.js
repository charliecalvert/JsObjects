import React from 'react';
import styles from './App.css';
import 'whatwg-fetch';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.getNine = this.getNine.bind(this);
        this.state = {
            nine: 'Get Nine Result will be placed here.',
            foo: 'waiting for server'
        };
    }

    getNine() {
        const that = this;
        this.setState(() => ({
            nine: '9'
        }));
        fetch('/foo')
            .then(function(response) {
                return response.json();
            }).then(function(json) {
                console.log('parsed json', json);
                that.setState(foo => (json));
            }).catch(function(ex) {
                console.log('parsing failed', ex);
            });
    }

    render() {
        return (
            <div className={styles.app}>
                <button id="getNine" onClick={this.getNine}>Get Nine</button>
                <p>NINE: {this.state.nine}</p>
                <p>FOO: {this.state.foo}</p>
            </div>
        );
    }
}