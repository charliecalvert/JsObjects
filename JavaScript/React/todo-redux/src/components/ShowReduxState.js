/**
 * Created by charlie on 5/1/17.
 * This is one of the few parts of this app that I wrote.
 * It does not use the Provider and connect, and hence
 * would be considered beyond the pale by purists...
 *
 * It is based on this:
 *
 *
 * If state were an array of items then do this:
     {this.state.reduxState.map((item, i) =>
        <pre key={i}> [ {JSON.stringify(item, null, 4)}] </pre> )}
 */

import React, { Component } from 'react';

class ShowReduxState extends Component {
    constructor(props) {
        super(props);

        this.state = {
            reduxState: {},
        };

        /*
         * We subscribe to changes in the store
         * We setState, saving Redux state and calling render
         * In the render method, our state is the Redux state
         */
        this.props.store.subscribe(() => {
            this.setState({
                reduxState: this.getReduxState(),
            });
        });
    }

    getReduxState = () => {
        const reduxStateInit = this.props.store.getState();
        return reduxStateInit;
    };

    render() {
        return (
            <div>
                <h1>The Redux State</h1>
                <p>Here is the current Redux state:</p>
                <pre key={0}>
                    {JSON.stringify(this.state.reduxState, null, 4)}
                </pre>
            </div>
        );
    }
}

export default ShowReduxState;
