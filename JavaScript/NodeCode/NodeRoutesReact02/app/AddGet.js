import React from 'react';
import 'whatwg-fetch';

export default class AddGet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            operandA: '2',
            operandB: '3',
            addResult: 'Here is the result'
        };
        this.getAddResult = this.getAddResult.bind(this);
    }

    getAddResult() {
        const that = this;
        const params = {
            operandA: this.state.operandA,
            operandB: this.state.operandB
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
        console.log("OPA", this.state.operandA)
        return (
            <div>
                <h2>Add Number with Get</h2>

                <p>On the server side (server.js), use <strong>request.query</strong> to get the paramters.</p>
                <input type='number' defaultValue={this.state.operandA} />
                <input type='number' defaultValue={this.state.operandB} />
                <p>{this.state.addResult}</p>
                <button onClick={this.getAddResult}>Add Numbers</button>

                <hr />
            </div>
        );
    }
}
