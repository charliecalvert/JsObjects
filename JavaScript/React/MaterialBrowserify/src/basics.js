import React from 'react';
import ReactDOM from 'react-dom';
import ShowMe from './show-me';
import MaterialSlider from './material-slider';

class SimpleReact extends React.Component {
    render() {
        return <div>This is a react component.</div>;
    }
}

$(document).ready(function() {
    'use strict';
    ReactDOM.render(
        <div>
            <MaterialSlider />
        </div>,
        document.getElementById('reactStuff')
    );
});
