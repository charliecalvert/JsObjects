/**
 * Created by charlie on 3/31/17.
 * This version has the HTML/JSX in this component.
 */

import React from 'react';
import {createStore} from 'redux';
import counter from './reducers/counter';
import {increment, decrement} from './actions';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.getNine = this.getNine.bind(this);
        this.state = {
            origTitle: 'bar',
            counter: 0,
            eight: 0,
            title: 'Title: 0'
        };
        this.setupState();
    }

    work = () => {
        const temp = this.store.getState();
        this.setState(() => ({
            counter: temp.counter,
            title: temp.title,
            eight: temp.eight
        }));
    };


    setupState() {
        this.store = createStore(counter);
        this.store.subscribe(this.work);
    }

    getNine() {
        const that = this;
        return fetch('/getNine', {
            accept: 'application/json',
        }).then(function(response) {
            return response.json();
        }).then(function(json) {
            console.log('parsed json', json);
            that.setState(() => ({nine: json.result}));
        }).catch(function(ex) {
            console.log('parsing failed', ex);
        });
    }

    getEight = () => {
        this.store.dispatch({type: "GET_EIGHT"});
        /*this.setState(() => ({
            eight: '8'
        }));*/
    };

    counterUp = () => {
        console.log('COUNTER UP CALLED');
        this.store.dispatch(increment());
    };

    counterDown = () => {
        this.store.dispatch(decrement());
    };

    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <p>
                    Welcome to {this.state.title}. This is a standard Express
                    app with React and Redux circa March, 2017.
                </p>

                <button onClick={this.getEight}>Get Eight</button>
                <button onClick={this.getNine}>Get Nine</button>


                <p>Eight: {this.state.eight}</p>
                <p>Nine: {this.state.nine}</p>

                <h2>The Countered</h2>

                <button onClick={this.counterUp}>Increment Counter</button>
                <button onClick={this.counterDown}>Decrement Counter</button>

                <p>Counter: {this.state.counter}</p>

                <h2>Debugging Tip</h2>
                <p>
                    To get started debugging your webpack, add this
                    to the <strong>webpack.config.js</strong> config file:
                </p>

                <pre>devtool: 'source-map',</pre>
                <p>Open the debugger and go webpack in the navigation pane.</p>
                <img src="debug-web.png" alt="debugging"/>
            </div>
        )
    }
}

