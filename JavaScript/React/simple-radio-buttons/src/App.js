import React, {Component} from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkedRadioButton: 'none',
            message: 'none'
        };
    }

    handleRadioChange = (event) => {
        this.setState({checkedRadioButton: event.target.value});
    };

    useRadioButtonSelection = (event) => {
        this.setState({message: "You've chosen " + this.state.checkedRadioButton})
    };

    render() {
        var bookRadios = (
            <div>
                <input
                    type="radio"
                    name="book-radio"
                    value="RadioOne"
                    id="radio-one"
                    checked={this.state.checkedRadioButton === 'RadioOne'}
                    onChange={this.handleRadioChange}
                />
                <label htmlFor="radio-one" className="book-radio">Book Radio 2</label>
                <input
                    type="radio"
                    name="book-radio"
                    value="RadioTwo"
                    id="radio-two"
                    checked={this.state.checkedRadioButton === 'RadioTwo'}
                    onChange={this.handleRadioChange}
                />
                <label htmlFor="radio-two" className="book-radio">Book Radio 2</label>
            </div>
        );

        return (
            <div className="App">
                <section>
                    <hr/>
                    {bookRadios}
                    <hr/>
                    <p>Selected radio button: {this.state.checkedRadioButton}</p>
                    <p>Message: {this.state.message}</p>
                    <button type="button" onClick={this.useRadioButtonSelection}>Use Radio Button to set the message</button>
                </section>
            </div>
        );
    }
}

export default App;
