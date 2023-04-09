import React, { Component } from 'react';
import Display from './Display';

export default class Guide extends Component {
    render() {
        return (
            <article className="content">
                <h2>Inputs Display</h2>
                <p>
                    In this window we display information about the state of the
                    input controls
                </p>
                <Display
                    timerName={this.props.timerName}
                    timerNumber={this.props.timerNumber}
                    selectedRadio={this.props.selectedRadio}
                    radioMessage={this.props.radioMessage}
                    checkSelected={this.props.checkSelected}
                    checkedCount={this.props.checkedCount}
                />

                <hr />
                <button type="button" onClick={this.props.radioSelection}>
                    Set the Radio Message
                </button>
                <hr />
            </article>
        );
    }
}
