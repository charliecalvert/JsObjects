import React, {Component, Fragment} from 'react';

export default class CheckBoxes extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const checkBoxes = document.querySelectorAll('input[type="checkbox"]');

        for (let i = 0; i < checkBoxes.length; i++) {
            checkBoxes[i].addEventListener('click', this.props.checkBoxReport);
        }
    }

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
