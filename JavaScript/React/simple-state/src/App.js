import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: 'unknown'
        };
    }

    handleClick = () => {
        this.setState({ firstName: 'Lisa' });
    };

    render() {
        return (
            <div className="App">
                <section>
                    <p>Checked radio: {this.state.firstName}</p>
                    <button onClick={this.handleClick} type="button">
                        Click Me
                    </button>
                </section>
            </div>
        );
    }
}

export default App;
