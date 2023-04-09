import React, { Component, Fragment } from 'react';
import Inputs from './Inputs';
import Guide from './Guide';
import Display from './Display';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timerName: 'none',
            timerNumber: -1,
            selectedRadio: 'none',
            radioMessage: 'none',
            checkBoxes: { borders: false, colors: false },
            checkedCount: 0,
            checkSelected: 'none'
        };
    }

    nameInputAction = event => {
        console.log('TIMER NAME', event.target.value);
        this.setState({ timerName: event.target.value });
    };

    timerNumberAction = event => {
        this.setState({ timerNumber: event.target.value });
    };

    handleRadioChange = event => {
        this.setState({ selectedRadio: event.target.value });
    };

    radioSelection = () => {
        this.setState({
            radioMessage: "You've chosen " + this.state.selectedRadio
        });
    };

    checkBoxReport = event => {
        this.state.checkBoxes[event.target.name] = event.target.checked;
        let selected = [];
        let checkedCount = 0;
        for (let box in this.state.checkBoxes) {
            if (this.state.checkBoxes[box]) {
                checkedCount++;
                selected.push(box);
            }
        }
        this.setState({
            checkSelected: selected.join(),
            checkedCount: checkedCount,
            checkBoxes: this.state.checkBoxes
        });
    };

    render() {
        return (
            <Fragment>
                <div className="wrapper">
                    <div className="main-head">
                        <h1>React Inputs</h1>
                    </div>
                    <Guide
                        timerName={this.state.timerName}
                        timerNumber={this.state.timerNumber}
                        selectedRadio={this.state.selectedRadio}
                        radioMessage={this.state.radioMessage}
                        checkSelected={this.state.checkSelected}
                        checkedCount={this.state.checkedCount}
                        radioSelection={this.radioSelection}
                    />
                    <div className="side">
                        <Inputs
                            selectedRadio={this.state.selectedRadio}
                            radioMessage={this.state.radioMessage}
                            checkSelected={this.state.checkSelected}
                            checkedCount={this.state.checkedCount}
                            checkBoxes={this.state.checkBoxes}
                            nameInputAction={this.nameInputAction}
                            timerNumberAction={this.timerNumberAction}
                            checkBoxReport={this.checkBoxReport}
                            handleRadioChange={this.handleRadioChange}
                        />
                    </div>
                </div>
            </Fragment>
        );
    }
}
