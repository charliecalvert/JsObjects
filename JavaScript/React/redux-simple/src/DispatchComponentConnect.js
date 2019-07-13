/**
 * Created by bcuser on 6/1/17.
 */
import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

class DispatchComponentConnect extends Component {
    verifyStatement = () => {
        this.props.dispatch({ type: 'VERIFY' });
    };

    denyEverything = () => {
        this.props.dispatch({ type: 'DENY' });
    };

    noComment = () => {
        this.props.dispatch({ type: 'NO COMMENT' });
    };

    render() {
        return (
            <div className="App">
                <h1>Dispatch Component Connect</h1>
                <p className="App-intro">
                    This component uses <strong>connect</strong> and{' '}
                    <strong>mapStateToProps</strong>. It uses{' '}
                    <strong>class</strong> syntax rather than{' '}
                    <strong>arrow</strong> functions.
                </p>

                <p>SpokesPerson: {this.props.statement}</p>
                <hr />
                <button onClick={this.verifyStatement}>Verify</button>
                <button onClick={this.denyEverything}>Deny</button>
                <button onClick={this.noComment}>No Comment</button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        statement: state.statement
    };
};

DispatchComponentConnect = connect(mapStateToProps)(DispatchComponentConnect);

export default DispatchComponentConnect;
