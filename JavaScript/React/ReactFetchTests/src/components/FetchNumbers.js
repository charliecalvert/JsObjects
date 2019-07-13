import React, { Component } from 'react';
import '../css/App.css';

class FetchServerInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numbers: ['a', 'b'],
            error: 'none'
        };

        this.fetchNumbers = this.fetchNumbers.bind(this);
    }

    fetchNumbers() {
        const that = this;
        return fetch('/api/numbers')
            .then(response => response.json())
            .then(function(result) {
                console.log(result);
                that.setState({
                    numbers: result.numbers,
                    error: 'none'
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
        console.log('RENDER FETCH NUMBERS', this.state);
        return (
            <div className="App">
                {this.state.numbers.map(value => {
                    return <p key={value}>{value}</p>;
                })}
                <p className="App-intro">Error: {this.state.error}</p>
                <button id="fetchNumbers" onClick={this.fetchNumbers}>
                    Fetch Numbers
                </button>

                <hr />
            </div>
        );
    }
}

export default FetchServerInfo;
