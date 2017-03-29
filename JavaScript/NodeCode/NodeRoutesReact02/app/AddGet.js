import React from 'react';
import 'whatwg-fetch';

export default class AddGet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            addResult: 'Here is the result'
        };
        this.getAddResult = this.getAddResult.bind(this);
    }

    getAddResult() {
        const that = this;
        const params = {
            operandA: document.getElementById('operandA').value,
            operandB: document.getElementById('operandB').value
        };

        const esc = encodeURIComponent;
        const query = Object.keys(params)
            .map(k => esc(k) + '=' + esc(params[k]))
            .join('&');
        const url = '/add?' + query;
        console.log('SENDING:', url);
        fetch(url)
            .then(function(response) {
                return response.json();
            }).then(function(json) {
                console.log('parsed json', json);
                that.setState(() => (json));
            }).catch(function(ex) {
                console.log('parsing failed', ex);
            });
    }

    render() {
        return (
            <div>
                <h2>Add Number with Get</h2>

                <p>On the server side (server.js), use <strong>request.query</strong> to get the paramters.</p>

                <input type='number' id='operandA' defaultValue={'2'} />
                <input type='number' id='operandB' defaultValue={'2'} />
                <p>{this.state.addResult}</p>
                <button onClick={this.getAddResult}>Add Numbers</button>

                <hr />
            </div>
        );
    }
}
