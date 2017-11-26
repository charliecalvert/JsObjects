/**
 * Created by charlie on 11/25/17.
 * This version has the HTML/JSX in this component.
 */

import React from 'react';
import {connect} from 'react-redux';
import {increment, decrement, getEight} from './actions';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.getNine = this.getNine.bind(this);
    }

    getNine() {
        const that = this;
        return fetch('/getNine', {
            accept: 'application/json',
        }).then(function (response) {
            return response.json();
        }).then(function (json) {
            console.log('parsed json', json);
            that.props.getNine(json.result);
        }).catch(function (ex) {
            console.log('parsing failed', ex);
        });
    }

    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <p>Welcome to {this.props.title}. This program uses:</p>

                <ul>
                    <li>React</li>
                    <li>Redux</li>
                    <li>fetch</li>
                    <li>Express</li>
                </ul>

                <h2>The Main File</h2>
                <p>The code for this file is found in <strong>client/src/App.js</strong></p>
                <p>Redux is initialized in <strong>index.js</strong>.
                    In <strong>src/App.js</strong> you will
                    find <strong>Connect</strong> is used along with:</p>


                <ul>
                    <li>MapStateToProps</li>
                    <li>MapDispatchToProps</li>
                </ul>

                <h2>Get Numbers</h2>
                <p>The number nine is retrieved from an Express Server.
                    The Server is found in a directory called <strong>server</strong>.
                    See <strong>server/routes/index.js</strong> in the server application.</p>

                <ul>
                    <li>Eight: {this.props.eight}</li>
                    <li>Nine: {this.props.nine}</li>
                </ul>

                <button onClick={this.props.getEight}>Get Eight</button>
                <button onClick={this.getNine}>Get Nine</button>

                <h2>The Counter</h2>

                <p>Creating a counter is a classic way to teach Redux.</p>

                <button onClick={this.props.counterUp}>Increment Counter</button>
                <button onClick={this.props.counterDown}>Decrement Counter</button>

                <p>Counter: {this.props.counter}</p>


            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter,
        eight: state.eight,
        nine: state.nine,
        title: state.title
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        counterUp: () => {
            dispatch(increment());
        },
        counterDown: () => {
            dispatch(decrement())
        },
        getEight: () => {
            dispatch(getEight(8));
        },
        getNine: (value) => {
            dispatch({type: "GET_NINE", value: value});
        }
    }
};

App = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default App;