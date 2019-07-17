import React, { Component } from 'react';
import '../css/App.css';

class FetchServer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: 'unknown',
            error: 'none'
        };
        this.fetchServer = this.fetchServer.bind(this);
    }

    fetchServer() {
        const that = this;
        return fetch('/fetch-tests/get-info')
            .then(response => response.json())
            .then(function(result) {
                console.log(result);
                that.setState({
                    result: result.result,
                    error: 'none',
                    fetchServerCalled: true
                });
            })
            .catch(function(ex) {
                console.log('ERROR', ex.message);
                console.log('ERROR', ex.stack);
                console.log('ERROR', JSON.stringify(ex, null, 4));
                that.setState({ error: ex.message });
            });
    }

    render() {
        console.log('RENDER STATE', this.state);
        return (
            <div className="App">
                <p className="App-intro">Result: {this.state.result}</p>
                <p className="App-intro">Error: {this.state.error}</p>
                <button id="fetchServer" onClick={this.fetchServer}>
                    Fetch Server Information
                </button>
                <hr />
            </div>
        );
    }
}

export default FetchServer;
