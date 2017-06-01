/**
 * Created by bcuser on 6/1/17.
 */
import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux';

//let DispatchComponentConnect = ({dispatch, statement}) => {
class DispatchComponentConnect extends Component {

    constructor() {
        super();
        this.state = {
            statement: ''
        };
    }

    verifyStatement = () => {
        this.props.dispatch({type: 'VERIFY'});
    };

    denyEverything = () => {
        this.props.dispatch({type: 'DENY'});
    };

    noComment = () => {
        this.props.dispatch({type: 'NO COMMENT'});
    };


    render() {
        return (
            <div className="App">
                <div className="App-intro">
                    <h2>Welcome Dispatch Component Connect</h2>
                </div>
                <p className="App-intro">
                    This component uses Redux.
                </p>
                <h1>Political Component Science</h1>
                <p>SpokesPerson: {this.props.statement}</p>
                <hr />
                <button onClick={this.verifyStatement}>Verify</button>
                <button onClick={this.denyEverything}>Deny</button>
                <button onClick={this.noComment}>No Comment</button>

            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        statement: state.statement
    }
};

DispatchComponentConnect = connect(mapStateToProps)(DispatchComponentConnect);
//DispatchComponentConnect = connect()(DispatchComponentConnect);

export default DispatchComponentConnect;
