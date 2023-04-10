/*
import React from 'react';
import ReactDOM from 'react-dom';
*/

$(document).ready(() => {
    class SimpleReact extends React.Component {
        getTwo(x) {
            console.log(x);
            return 2 * x;
        }

        render() {
            return (
                <div>
                    <h1>This is a react component</h1>
                    <p>
                        Here is the number two times three:
                        {this.getTwo(3)}
                    </p>
                </div>
            );
        }
    }

    ReactDOM.render(<SimpleReact />, document.getElementById('root'));
});
