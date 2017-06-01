import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
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
    constructor(props) {
        super(props);
        // When the state changes, you can update the UI
        // by monitoring calls to subscribe().
        // It can write the current state to localStorage.
        this.state = {
            statement: 'No comment'
        };

        const that = this;
        this.props.store.subscribe(() => {
            //console.log(this.store.getState());
            that.setState((prevState, ) => {
                const storeState = that.props.store.getState();
                console.log(storeState);
                return {statement: storeState.statement}
            });
        });

    }

    verifyStatement = () => {
        this.props.store.dispatch({ type: 'VERIFY' });
    };

    denyEverything = () => {
        this.props.store.dispatch({ type: 'DENY' });
    };

    noComment = () => {
        this.props.store.dispatch({ type: 'NO COMMENT' });
    };

  render() {

      return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React and Redux</h2>
        </div>
        <p className="App-intro">
          This component uses Redux.
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
