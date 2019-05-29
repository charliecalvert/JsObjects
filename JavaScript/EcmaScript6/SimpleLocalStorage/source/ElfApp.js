import React, {Component} from 'react';
import {getByIndex} from "./elf-local-storage";

class ElfApp extends Component {
    constructor(props) {
        super(props);
        this.state = { index: 0 }
    }

    getSingleItem = (item) => {
        return (
            <p>Year: {item.year}</p>
        )
    };

    setIndex = () => {
        this.setState({index: this.state.index + 1});
    };

    render() {
        return (
            <div>
                <h1>Welcome to Elf App</h1>
                <p>I do not have range checking so I will blow up if you select the button enough times.</p>
                {this.getSingleItem(getByIndex(this.state.index))}
                <button onClick={this.setIndex}>Next</button>
            </div>
        );
    }
}

export default ElfApp;
