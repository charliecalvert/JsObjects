import React, {Component, Fragment} from 'react';

export default class CheckBoxes extends Component {

    constructor(props) {
        super(props);
        this.state = {
            checkedCount: 0,
            selected: 'none'
        };
        this.checkBoxes = [];
    }

    componentDidMount() {
        this.checkBoxes = document.querySelectorAll('input[type="checkbox"]');

        for (let i = 0; i < this.checkBoxes.length; i++) {
            this.checkBoxes[i].addEventListener('click', this.report);
        }
    }

    report = () => {
        let checkedCount = 0;
        let selected = '';
        for (let i = 0; i < this.checkBoxes.length; i++) {
            if (this.checkBoxes[i].checked) {
                checkedCount++;
                selected += this.checkBoxes[i].name
                console.log('checked', checkedCount, this.checkBoxes[i].name);
            } else {
                console.log('checked', checkedCount);
            }
            this.setState({selected: selected})
        }
    };

    render() {
        return (
            <Fragment>
                <h3>Appearance Type:</h3>

                <fieldset>
                    <legend>Choose your interests</legend>
                    <div className="preference">
                        <label htmlFor="borders">Borders</label>
                        <input type="checkbox" name="borders" id="borders"/>
                    </div>

                    <div className="preference">
                        <label htmlFor="colors">Colors</label>
                        <input type="checkbox" name="colors" id="colors"/>
                    </div>
                </fieldset>
            </Fragment>
        )
    }
}
