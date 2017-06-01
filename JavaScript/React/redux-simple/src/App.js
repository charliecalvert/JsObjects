import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import spokesman from './spokesman';
import {createStore} from 'redux';

// We change state by "dispatching" an action.
// You can log, serialize or store actions.

class App extends Component {

    // A Redux tracks your app's state.
    // It has the following methods:
    //
    //      subscribe,
    //      dispatch,
    //      getState
    //
    constructor() {
        super();
        // When the state changes, you can update the UI
        // by monitoring calls to subscribe().
        // It can write the current state to localStorage.
        this.state = {
            statement: 'No comment'
        };

        const that = this;
        this.store.subscribe(() => {
            //console.log(this.store.getState());
            that.setState((prevState, ) => {
                const storeState = that.store.getState();
                console.log(storeState);
                return {statement: storeState.statement}
            });
        });

    }

    verifyStatement = () => {
        this.store.dispatch({ type: 'VERIFY' });
    };

    denyEverything = () => {
        this.store.dispatch({ type: 'DENY' });
    };

    noComment = () => {
        this.store.dispatch({ type: 'NO COMMENT' });
    };

  render() {

      return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <h1>Political Science</h1>
          {this.state.statement}
          <hr />
          <button onClick={this.verifyStatement}>Verify</button>
          <button onClick={this.denyEverything}>Deny</button>
          <button onClick={this.noComment}>No Comment</button>

      </div>
    );
  }
}

export default App;
