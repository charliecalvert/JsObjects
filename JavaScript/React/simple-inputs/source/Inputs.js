import React from 'react';

export default class Inputs extends React.Component {

    constructor(props) {
        super(props);
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

    render() {
        return (
            <form>
                <p>Hello from the server</p>

                <p id="intro Test"></p>

                <ul>
                    <li className="listItem">Item01</li>
                    <li className="listItem">Item02</li>
                    <li className="listItem">Item03</li>
                </ul>



                <div className="preference bordered">
                    <label htmlFor="name-search">Timer Name</label>
                    <input type="text" id="name-search"></input>
                </div>

                <div className="preference bordered">
                    <label htmlFor="username">Time</label>
                    <input type="number" id="time-search" defaultValue="0"></input>
                </div>

                <h3>Appearance Type:</h3>

                <div className="preference">
                    <label htmlFor="borders">Borders</label>
                    <input
                        checked={this.state.checkedRadioButton === 'RadioOne'}
                        onChange={this.handleRadioChange}
                        type="checkbox" name="borders" id="borders"/>
                </div>

                <div className="preference">
                    <label htmlFor="colors">Colors</label>
                    <input
                        type="checkbox" name="colors" id="colorss"/>
                </div>

                <h3>Sound Type:</h3>

                <div  className="preference">
                    <label htmlFor="scales">Ring</label>
                    <input
                        type="radio"
                        id="scales"
                        name="design"
                        value="RadioOne"
                        checked={this.state.checkedRadioButton === 'RadioOne'}
                        onChange={this.handleRadioChange}
                    />
                </div>

                <div  className="preference">
                    <label htmlFor="horns">Beep</label>
                    <input
                        type="radio"
                        id="horns"
                        name="design"
                        value="RadioTwo"
                        checked={this.state.checkedRadioButton === 'RadioTwo'}
                        onChange={this.handleRadioChange}
                    />
                </div>


                <hr />
                <p>
                    Selected radio button: {this.state.checkedRadioButton}
                </p>
                <p>Message: {this.state.message}</p>
                <button type="button" onClick={this.useButtonSelection}>
                    Use Radio Button to set the message
                </button>
            </form>
        );
    }
}
