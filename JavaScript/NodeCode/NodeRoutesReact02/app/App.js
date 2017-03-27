import React from 'react';
import styles from './App.css';

export default class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {test: 'foogore One Smith'};
    }

    render() {
      return (
            <div className={styles.app}>
                bar
                <p>{this.state.test}</p>

            <h1>Node Routes 02</h1>
        <p>
            A simple Node Express program. This one differs from Version 01
            in that it breaks the code up into different folders:
        </p>

        <ul>
            <li>Public: Client side code</li>
            <li>Source: Server side "business" logic.</li>
            <li>Routes: The place where the server handles URLs (routes) sent from client</li>
            <li>bin: A stub for starting the application. Start it with one of these options:
            <ul>
                <li>node bin/www</li>
                <li>npm start</li>
            </ul></li>
        </ul>
                <button id="getNine">Get Nine</button>
        <p id="getNineResult">Get Nine Result will be placed here.</p>

        <hr />

        <button id="getNineParse">Get Nine Parse</button>
        <p id="getNineParseResult">Get Nine Result will be placed here.</p>

        <hr />

        <h2>Add Number with Get</h2>

        <p>On the server side (server.js), use <strong>request.query</strong> to get the paramters.</p>

        <input type="number" id="operandA" value="1" />
        <input type="number" id="operandB" value="2" />
        <p id="addResult"> </p>
        <button id="add">Add Numbers</button>

        <hr />

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
