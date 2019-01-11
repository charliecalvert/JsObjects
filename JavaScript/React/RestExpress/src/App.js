import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ''
        };
    }

    callFoo = () => {
        const that = this;
        fetch('/foo')
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                console.log('parsed json', json);
                that.setState(json);
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
                    <p>Welcome to {this.state.title}</p>
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
