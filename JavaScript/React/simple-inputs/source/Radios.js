import React, {Component, Fragment} from 'react';
import Display from "./Display";

export default class Radios extends Component {

    constructor(props) {
        super(props);
    }


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
                        checked={this.props.radioChecked === 'RadioOne'}
                        onChange={this.props.handleRadioChange}
                    />
                </div>

                <div className="preference">
                    <label htmlFor="horns">Beep</label>
                    <input
                        type="radio"
                        id="horns"
                        name="design"
                        value="RadioTwo"
                        checked={this.props.radioChecked === 'RadioTwo'}
                        onChange={this.props.handleRadioChange}
                    />
                </div>


                <hr/>
                <button type="button" onClick={this.props.radioSelection}>
                    Use Radio Button to set the message
                </button>
            </React.Fragment>
        );
    }
}
