import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'waiting for you to click...',
            query: [],
            queryBar: 'waiting for you to click...',
            queryCount: 'waiting for you to click...',
            params: 'waiting for you to click...'
        };
    }

    callFoo = () => {
        const that = this;
        fetch('/foo?bar=qux&count=5')
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                console.log('parsed json', json);
                const query = Object.keys(json.query).map(function(key) {
                    return [key, ' ', json.query[key], ' '];
                });
                that.setState({
                    title: json.title,
                    query: query,
                    queryBar: json.query.bar,
                    queryCount: json.query.count,
                    params: JSON.stringify(json.params),
                });
            })
            .catch(function(ex) {
                console.log(
                    'parsing failed, URL bad, network down, or similar',
                    ex
                );
            });
    };

    render() {
        return (
            <div className="App">
                <header>
                    <h1>Simple React and Express</h1>
                    <p>Title: {this.state.title}</p>
                    <p>Query: {this.state.query}</p>
                    <p>Query Bar: {this.state.queryBar}</p>
                    <p>Query Count: {this.state.queryCount}</p>
                    <p>Params: {this.state.params}</p>
                </header>
                <main>
                    <button onClick={this.callFoo}>Call Foo</button>
                </main>
                <footer>
                    <p>&copy; by Charlie Calvert</p>
                </footer>
            </div>
        );
    }
}

export default App;
