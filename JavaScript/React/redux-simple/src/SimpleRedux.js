/**
 * Created by charlie on 6/1/17.
 *
 * Based on this:
 *
 * https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367
 */

import React, { Component } from 'react';
import spokesman from './spokesman';



class Counter extends Component {
    state = spokesman(undefined, {});

    dispatch(action) {
        this.setState( (prevState) => spokesman(prevState, action));
    }

    verifyStatement = () => {
        this.dispatch({ type: 'VERIFY' });
    };

    denyEverything = () => {
        this.dispatch({ type: 'DENY' });
    };

    noComment = () => {
        this.dispatch({ type: 'NO COMMENT' });
    };

    render() {
        return (
            <div>
                <h1>Political Science</h1>
                {this.state.value}
                <hr />
                <button onClick={this.verifyStatement}>Verify</button>
                <button onClick={this.denyEverything}>Deny</button>
                <button onClick={this.noComment}>No Comment</button>
            </div>
        )
    }
}

export default Counter;