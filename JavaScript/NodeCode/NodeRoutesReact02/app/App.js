import React from 'react';
import styles from './App.css';

export default class App extends React.Component {

    render() {
        return (
            <div className={styles.app}>

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
                        </ul>
                    </li>
                </ul>

                <hr />


            </div>
        );
    }
}
