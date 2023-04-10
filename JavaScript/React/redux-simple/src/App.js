import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            statement: 'No comment',
        };

        this.props.store.subscribe(() => {
            this.setState((prevState) => {
                const storeState = this.props.store.getState();
                console.log(storeState);
                return { statement: storeState.statement };
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
                <div className="App-intro">
                    <h2>Welcome to React and Redux App</h2>
                </div>
                <p className="App-intro">
                    This component uses Redux and receives
                    {' '}
                    <strong>store</strong>
                    {' '}
                    as
                    <strong>props</strong>
                    .
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
