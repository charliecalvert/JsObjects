import React, {Component} from 'react';
import Radios from '@bit/ccalvert.elven-inputs.radios';

class ElfApp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedRadio: 'none',
            radioMessage: 'none',
        };
    }

    handleRadioChange = event => {
        this.setState({ selectedRadio: event.target.value });
    };

    radioSelection = () => {
        this.setState({
            radioMessage: "You've chosen " + this.state.selectedRadio
        });
    };

    render() {
        return (
            <div>
                <h1>Welcome to Elf App</h1>

                <p>Selected: {this.state.selectedRadio}</p>
                <p>Message: {this.state.radioMessage}</p>
                <Radios
                    handleRadioChange={this.handleRadioChange}
                    selectedRadio={this.state.selectedRadio}
                    radioMessage={this.state.radioMessage}
                />
                <button type="button" onClick={this.radioSelection}>
                    Set the Radio Message
                </button>
            </div>
        );
    }
}

export default ElfApp;
