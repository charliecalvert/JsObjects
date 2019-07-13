/*
import React from 'react';
import ReactDOM from 'react-dom';
*/

$(document).ready(function() {
    'use strict';

    class SimpleReact extends React.Component {
        getTwo(x) {
            console.log(x);
            return 2 * x;
        }

        render() {
            return (
                <div>
                    <div>This is a react component</div>
                    <p>Here is the number two: {this.getTwo(3)}</p>
                </div>
            );
        }
    }

    ReactDOM.render(<SimpleReact />, document.getElementById('root'));
});
