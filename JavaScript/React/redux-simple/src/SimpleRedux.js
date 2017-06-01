/**
 * Created by charlie on 6/1/17.
 * This example does not use Redux. It is Redux-like, but not really redux.
 * Based on this:
 *
 * https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367
 */

import React, { Component } from 'react';
import spokesman from './spokesman';



class SimpleRedux extends Component {
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
                <h1>Political Science Fake Redux</h1>

                <p>This component does not use redux. It uses something redux-like.</p>
                {this.state.value}
                <hr />
                <button onClick={this.verifyStatement}>Verify</button>
                <button onClick={this.denyEverything}>Deny</button>
                <button onClick={this.noComment}>No Comment</button>
            </div>
        )
    }
}

export default SimpleRedux;