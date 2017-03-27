import React from 'react';
import styles from './App.css';

export default class AddPost extends React.Component {
    constructor(props) {
      super(props);
      this.state = {test: 'foogore One Smith'};
    }
    render() {
      return (
        <div>

        <h2>Add Number with Post</h2>

        <p>On the server side (server.js), use <strong>request.body</strong> to get the paramters. You must
        also include <strong>app.use(express.bodyParser());</strong></p>
        <input type="number" id="operandAPost" value="1" />
        <input type="number" id="operandBPost" value="2" />
        <p id="addResultPost"> </p>
        <button id="addPost">Add Numbers</button>
        </div>
        );
    }
}
