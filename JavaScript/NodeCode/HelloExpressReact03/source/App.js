/**
 * Created by charlie on 3/31/17.
 */

import React from 'react';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Elvenware'
        }
    }


    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <p>Welcome to {this.state.title}. This is a standard Express app circa March, 2017.</p>
            </div>
        )
    }
}