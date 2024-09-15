import React, { useState, Fragment } from 'react';
// import ReactDOM from 'react-dom'
import { log } from './logger.js';
import './App.css';

log('App component loaded');

// class App extends Component {
function App() {
    log('App component loaded');
    // log('App component loaded', props
    /*     constructor(props) {
            super(props);
            log('App component constructor', props);
            this.state = {
                checkedRadioButton: 'none',
                message: 'none'
            };
            this.useState({ checkedRadioButton: 'none', message: 'none' });
        } */

    const [checkedRadioButton, setCheckedRadioButton] = useState('none');
    const [message, setMessage] = useState('none');

    const handleRadioChange = event => {
        setCheckedRadioButton(event.target.value);
    };

    const useButtonSelection = () => {
        setMessage("You've chosen " + checkedRadioButton);
    };


    const bookRadios = (
        <div>
            <input
                type="radio"
                name="book-radio"
                value="RadioOne"
                id="radio-one"
                checked={checkedRadioButton === 'RadioOne'}
                onChange={handleRadioChange}
            />
            <label htmlFor="radio-one" className="book-radio">
                Book Radio 1
            </label>
            <input
                type="radio"
                name="book-radio"
                value="RadioTwo"
                id="radio-two"
                checked={checkedRadioButton === 'RadioTwo'}
                onChange={handleRadioChange}
            />
            <label htmlFor="radio-two" className="book-radio">
                Book Radio 2
            </label>
        </div>
    );

    return (
        <Fragment>
            <div className="App">
                <section>
                    <hr />
                    {bookRadios}
                    <hr />
                    <p>
                        Selected radio button: {checkedRadioButton}
                    </p>
                    <p>Message: {message}</p>
                    <button type="button" onClick={useButtonSelection}>
                        Use Radio Button to set the message
                    </button>
                </section>
            </div>
        </Fragment>
    );
}

export default App;
