import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {createStore} from 'redux';
import {connect} from 'react-redux';
 // We change state by "dispatching" an action.
// You can log, serialize or store actions.

let AppConnect = ({ statement, deny, verify }) => {

    // A Redux tracks your app's state.
    // It has the following methods:
    //
    //      subscribe,
    //      dispatch,
    //      getState
    //
    //constructor() {
    //    super();
        // When the state changes, you can update the UI
        // by monitoring calls to subscribe().
        // It can write the current state to localStorage.
  /*      this.state = {
            statement: 'No comment'
        };*/

//        const that = this;
        /*store.subscribe(() => {
            //console.log(this.store.getState());
            that.setState((prevState, ) => {
                const storeState = store.getState();
                console.log(storeState);
                return {statement: storeState.statement}
            });
        });*/

    //}

    const verifyStatement = () => {
        //dispatch({ type: 'VERIFY' });
    };

    const denyEverything = () => {
        //dispatch({ type: 'DENY' });
    };

    const noComment = () => {
       // dispatch({ type: 'NO COMMENT' });
    };

  //render() {

      return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React and Redux</h2>
        </div>
        <p className="App-intro">
          This AppConnect component uses Redux and connect.
        </p>
          <h1>Political Science</h1>
          {statement}
          <hr />
          <button onClick={() => deny()}>To Do Click</button>
          <button onClick={() => verify()}>Verify</button>
          <button onClick={this.denyEverything}>Deny</button>
          <button onClick={this.noComment}>No Comment</button>

      </div>
    );
  //}
};

const mapStateToProps = (state) => {
    return {
        statement: state.statement
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        deny: (id) => {
            dispatch({ type: 'DENY' })
        },
        verify: () => {
            dispatch({type: 'VERIFY'})
        }
    }
};

AppConnect = connect(
    mapStateToProps,
    mapDispatchToProps
)(AppConnect);

/*const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(AppConnect);*/
export default AppConnect;
