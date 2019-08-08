import React, { Component, Fragment } from 'react';

export default class Display extends Component {
    render() {
        return (
            <Fragment>
                <h3>Text Inputs</h3>
                <p>Timer Name: {this.props.timerName}</p>
                <p>Timer Number: {this.props.timerNumber}</p>

                <h3>Check Boxes</h3>
                <p>Checked: {this.props.checkedCount}</p>
                <p>Check Selected: {this.props.checkSelected}</p>

                <h3>Radio Buttons</h3>
                <p>Selected radio button: {this.props.selectedRadio}</p>
                <p>Message: {this.props.radioMessage}</p>
            </Fragment>
        );
    }
}
