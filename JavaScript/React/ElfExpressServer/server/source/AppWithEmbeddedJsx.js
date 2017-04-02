/**
 * Created by charlie on 3/31/17.
 * This version has the HTML/JSX in this component.
 */

import React from 'react';
import {createStore} from 'redux';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.getNine = this.getNine.bind(this);
        this.setupState();
        this.state = this.store.getState();
    }

    setupState() {
        const startTitle = 'Elven Hello Express React ';
        const data = {
            origTitle: startTitle,
            title: startTitle,
            eight: '0',
            nine: '0',
            counter: 0
        };

        // Redux Reducer
        const counter = (state = data, action) => {
            switch (action.type) {
                case 'INCREMENT':
                    state.counter++;
                    break;
                case 'DECREMENT':
                    state.counter--;
                    break;
                default:
                    return state;
            }
            state.title = state.origTitle + state.counter;
            return state;
        };

        this.store = createStore(counter);
        this.store.subscribe(() => {
            const temp = this.store.getState();
            this.setState(() => ({
                counter: temp.counter,
                title: temp.title
            }));
        });

    }

    getNine() {
        const nine = getNine();
        console.log("A NINE:", nine);
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

