import React, {Component, Fragment} from 'react';
import Display from "./Display";

export default class Radios extends Component {

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
            <React.Fragment>
                <h3>Sound Type:</h3>

                <div className="preference">
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

                <div className="preference">
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


                <hr/>
                <Display checkedRadioButton={this.state.checkedRadioButton} message={this.state.message}/>
                <button type="button" onClick={this.useButtonSelection}>
                    Use Radio Button to set the message
                </button>
            </React.Fragment>
        );
    }
}
