import React, {Component} from 'react';
import countries from "./countries";
import './styles.css';

export class ElfComponent extends Component {

    render() {

        const listItems = countries.map( (country,index) => {
            return (<li key={index}>{country}</li>)
        });

        return (
            <div className="elf-show">
                <h1>Countries</h1>
                <p>This is a React Component with a map from a list of countries:</p>
                <ul>{listItems}</ul>
            </div>
        )
    }
}
