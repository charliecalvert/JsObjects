import React, { Component, Fragment } from 'react';
// import ReactDOM from 'react-dom'
import { log } from './logger.js';
import './App.css';

log('App component loaded');

class App extends Component {
    constructor(props) {
        super(props);
        log('App component constructor');
        this.state = {
            checkedRadioButton: 'none',
            message: 'none'
        };
    }

    handleRadioChange = event => {
        this.setState({ checkedRadioButton: event.target.value });
    };

    useButtonSelection = () => {
        this.setState({
            message: "You've chosen " + this.state.checkedRadioButton
        });
    };

    bookRadios = (
    <div>
        <input
            type="radio"
            name="book-radio"
            value="RadioOne"
            id="radio-one"
            checked={this.state.checkedRadioButton === 'RadioOne'}
            onChange={this.handleRadioChange}
        />
        <label htmlFor="radio-one" className="book-radio">
            Book Radio 2
        </label>
        <input
            type="radio"
            name="book-radio"
            value="RadioTwo"
            id="radio-two"
            checked={this.state.checkedRadioButton === 'RadioTwo'}
            onChange={this.handleRadioChange}
        />
        <label htmlFor="radio-two" className="book-radio">
            Book Radio 2
        </label>
    </div>
);

render() {

    return (
        <Fragment>
            <div className="App">
                <section>
                    <hr />
                    {bookRadios}
                    <hr />
                    <p>
                        Selected radio button: {this.state.checkedRadioButton}
                    </p>
                    <p>Message: {this.state.message}</p>
                    <button type="button" onClick={this.useButtonSelection}>
                        Use Radio Button to set the message
                    </button>
                </section>
            </div>
        </Fragment>
    );
}
}

export default App;
