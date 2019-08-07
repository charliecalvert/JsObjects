import React, {Component, Fragment} from 'react';

export default class Display extends Component {

    render() {
        return (
            <Fragment>
                <p>
                    Selected radio button: {this.props.checkedRadioButton}
                </p>
                <p>Message: {this.props.message}</p>
                <p>Checked: {this.props.checkedCount}</p>
                <p>Check Selected: {this.props.checkSelected}</p>
            </Fragment>
        )
    }
}
