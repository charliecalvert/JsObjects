/**
 * Created by bcuser on 6/1/17.
 */
import React from 'react';
import './App.css';
import {connect} from 'react-redux';

let DispatchConnect = ({dispatch, statement}) => {

    const verifyStatement = () => {
        dispatch({type: 'VERIFY'});
    };

    const denyEverything = () => {
        dispatch({type: 'DENY'});
    };

    const noComment = () => {
        dispatch({type: 'NO COMMENT'});
    };


    return (
        <div className="App">
            <div className="App-intro">
                <h2>Welcome to React and Dispatch Connect</h2>
            </div>
            <p className="App-intro">
                This component uses Redux.
            </p>
            <h1>Political Science</h1>
            {statement}
            <hr />
            <div>
            <button onClick={verifyStatement}>Verify</button>
            <button onClick={denyEverything}>Deny</button>
            <button onClick={noComment}>No Comment</button>
            </div>

        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        statement: state.statement
    }
};

DispatchConnect = connect(mapStateToProps)(DispatchConnect);

export default DispatchConnect;
