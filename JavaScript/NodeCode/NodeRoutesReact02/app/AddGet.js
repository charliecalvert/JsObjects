import React from 'react';
import styles from './App.css';

export default class AddGet extends React.Component {
    constructor(props) {
      super(props);
      this.state = {test: 'foogore One Smith'};
    }
    render() {
      return (
        <div>
        <h2>Add Number with Get</h2>

        <p>On the server side (server.js), use <strong>request.query</strong> to get the paramters.</p>

        <input type="number" id="operandA" value="1" />
        <input type="number" id="operandB" value="2" />
        <p id="addResult"> </p>
        <button id="add">Add Numbers</button>

        <hr />
        </div>
        );
    }
}
