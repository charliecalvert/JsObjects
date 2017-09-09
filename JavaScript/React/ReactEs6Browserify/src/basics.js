import React from 'react';
import ReactDOM from 'react-dom';
import ShowMe from './show-me';

class SimpleReact extends React.Component {
    render() {
        return <div>This is a react component.</div>;
    };
}

$(document).ready(function() {
    'use strict';
    ReactDOM.render(
        <div>
            <ShowMe/>
            <SimpleReact/>
        </div>,
        document.getElementById('reactStuff')
    );
});