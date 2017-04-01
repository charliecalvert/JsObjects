/**
 * Created by charlie on 3/31/17.
 * This version has the HTML/JSX in this component.
 */

import React from 'react';
import {createStore} from 'redux';

// Reducer
/*
 const data = {
 title: 'Elven Initial',
 counter: 0
 };
 */

const data = {
    title: 'Elven Hello Express React',
    eight: '0',
    nine: '0',
    counter: 0
};

const counter = (state = data, action) => {
    switch (action.type) {
        case 'INCREMENT':
            state.counter++;
            return state;
        case 'DECREMENT':
            state.counter--;
            return state;
        default:
            return state;
    }
};

export default class App extends React.Component {
    constructor(props) {
        super(props);
        //this.state =
        this.counterUp = this.counterUp.bind(this);
        this.getNine = this.getNine.bind(this);
        this.store = createStore(counter);
        this.state = this.store.getState();
        this.store.subscribe(() => {
            //const temp = this.store.getState();
            this.setState(() => ({
                counter: this.store.getState().counter
            }));
        });



        //this.store.subscribe(() => {});
    }

    getNine() {
        const nine = getNine();
        console.log(nine);
        this.setState(() => ({
            nine: nine
        }));
    }

    getEight = () => {
        this.setState(() => ({
            eight: '8'
        }));
    };

    counterUp = () => {
        this.store.dispatch({type: 'INCREMENT'});
    };

    counterDown = () => {
        this.store.dispatch({type: 'DECREMENT'});
    };

    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <p>Welcome to {this.state.title}. This is a standard Express app circa March, 2017.</p>
                <button onClick={this.getNine}>Get Nine</button>
                <button onClick={this.getEight}>Get Eight</button>
                <button onClick={this.counterUp}>Increment Counter</button>
                <button onClick={this.counterDown}>Decrement Counter</button>

                <p>
                    To get started debugging your webpack, add this
                    to the <strong>webpack.config.js</strong> config file:
                </p>

                <p>Eight: {this.state.eight}</p>
                <p>Nine: {this.state.nine}</p>
                <p>Counter: {this.state.counter}</p>
                <pre>devtool: 'source-map',</pre>
                <p>Open the debugger and go webpack in the navigation pane.</p>
                <img src="debug-web.png" alt="debugging"/>
            </div>
        )
    }
}

