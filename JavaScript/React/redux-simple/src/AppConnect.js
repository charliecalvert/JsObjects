import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
// We change state by "dispatching" an action.
// You can log, serialize or store actions.

function AppConnect({
    statement, deny, verify, noComment,
}) {
    return (
        <div className="App">
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>Welcome to React and Redux</h2>
            </div>
            <p className="App-intro">
                This AppConnect component
                {' '}
                <strong>mapStateToProps</strong>
                {' '}
                and
                {' '}
                <strong>mapDispatchToProps</strong>
                . It uses an
                {' '}
                <strong>arrow</strong>
                {' '}
                function rather than
                {' '}
                <strong>class</strong>
                {' '}
                syntax.
            </p>
            <h1>Political Science</h1>
            {statement}
            <hr />
            <button onClick={verify}>Verify</button>
            <button onClick={deny}>Deny</button>
            <button onClick={noComment}>No Comment</button>
        </div>
    );
    // }
}

const mapStateToProps = (state) => ({
    statement: state.statement,
});

const mapDispatchToProps = (dispatch) => ({
    deny: () => {
        dispatch({ type: 'DENY' });
    },
    verify: () => {
        dispatch({ type: 'VERIFY' });
    },
    noComment: () => {
        dispatch({ type: 'NO COMMENT' });
    },
});

AppConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
)(AppConnect);

export default AppConnect;
