/**
 * Created by charlie on 3/31/17.
 * This version has the HTML/JSX in this component.
 */

import React from 'react';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Elven Hello Express React'
        };
    }

    getNine() {
        console.log(getNine());
    }

    getEight = () => {
        console.log('Eight');
    };

    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <p>Welcome to {this.state.title}. This is a standard Express app circa March, 2017.</p>
                <button onClick={this.getNine}>Get Nine</button>
                <button onClick={this.getEight}>Get Eight</button>

                <p>
                    To get started debugging your webpack, add this
                    to the <strong>webpack.config.js</strong> config file:
                </p>

                <pre>devtool: 'source-map',</pre>
                <p>Open the debugger and go webpack in the navigation pane.</p>
                <img src="debug-web.png" alt="debugging" />
            </div>
        )
    }
}

