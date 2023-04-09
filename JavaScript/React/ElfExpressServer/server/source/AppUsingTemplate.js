/**
 * Created by charlie on 3/31/17.
 */

import React from 'react';
import template from './sam.rt';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Elven Hello Express React'
        };
    }

    getNine() {
        console.log(getNine());
    }

    getEight = () => {
        console.log('Eight');
    };

    /*    render() {
        return template()
    }*/
}

App.prototype.render = template;
