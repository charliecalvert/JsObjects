import React from 'react';
import './App.css';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { test: 'Test state' };
    }

    render() {
        return (
            <div className="app">
                <h1>Old Boilerplate for React</h1>
                <p>
                    This was one of my first tries at using at react. It was
                    based on an{' '}
                    <a
                        href="https://github.com/christianalfoni/webpack-express-boilerplate"
                        target="_blank"
                    >
                        abandoned git project
                    </a>
                    . I've updated it (March 2018) and kept it around because it
                    has a few useful bits in it. However, I would recommend
                    basing new applications on{' '}
                    <a
                        href="https://github.com/facebook/create-react-app"
                        target="_blank"
                    >
                        create-react-app
                    </a>
                    . Though <strong>create-react-app</strong> is usually the
                    best option, if you want to understand the basics, try my{' '}
                    <a
                        href="https://github.com/charliecalvert/JsObjects/tree/master/JavaScript/React/ReactBasics"
                        target="_blank"
                    >
                        ReactBasics
                    </a>
                    . It is much easier to understand than either{' '}
                    <strong>create-react-app</strong> or this app.
                </p>
                <p>{this.state.test}</p>
            </div>
        );
    }
}
