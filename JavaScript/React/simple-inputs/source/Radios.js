import React, { Component } from 'react';

export default class Radios extends Component {
    render() {
        return (
            <React.Fragment>
                <h3>Radio Inputs</h3>

                <div className="preference">
                    <label htmlFor="scales">Ring</label>
                    <input
                        type="radio"
                        id="scales"
                        name="design"
                        value="RadioOne"
                        checked={this.props.selectedRadio === 'RadioOne'}
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
                        checked={this.props.selectedRadio === 'RadioTwo'}
                        onChange={this.props.handleRadioChange}
                    />
                </div>
            </React.Fragment>
        );
    }
}
