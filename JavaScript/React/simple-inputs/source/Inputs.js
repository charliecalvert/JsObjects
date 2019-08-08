import React from 'react';
import Radios from './Radios';
import CheckBoxes from './CheckBoxes';
import Display from './Display';

export default class Inputs extends React.Component {
    render() {
        return (
            <div className="inputs">
                <form>
                    <h2>Inputs</h2>
                    <p>Here you can see various input controls.</p>

                    <h3>Text and Number Inputs</h3>
                    <div className="preference bordered">
                        <label htmlFor="name-search">Timer Name</label>
                        <input
                            type="text"
                            id="name-search"
                            onInput={this.props.nameInputAction}
                        ></input>
                    </div>

                    <div className="preference bordered">
                        <label htmlFor="username">Time</label>
                        <input
                            type="number"
                            id="time-search"
                            defaultValue="0"
                            onInput={this.props.timerNumberAction}
                        ></input>
                    </div>

                    <CheckBoxes
                        checkBoxes={this.props.checkBoxes}
                        checkBoxReport={this.props.checkBoxReport}
                    />

                    <Radios
                        handleRadioChange={this.props.handleRadioChange}
                        radioSelection={this.props.radioSelection}
                        selectedRadio={this.props.selectedRadio}
                        radioMessage={this.props.radioMessage}
                    />
                </form>
            </div>
        );
    }
}
