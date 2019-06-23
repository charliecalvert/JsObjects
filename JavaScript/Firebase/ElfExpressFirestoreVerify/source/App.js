import React, { Component } from 'react';
import { getFirebaseToken, makeParams } from './get-firebase-token';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: 'none',
            result: 'unknown',
            name: 'unknown',
            email: 'unknown',
            photoUrl: 'unknown',
            stack: 'none',
            items: [{ id: -4, data: 'none' }]
        };
    }

    setData = (result) => {
        console.log('FETCH RESULT', result);
        this.setState(result);
    };

    runQuery = event => {
        const url = event.currentTarget.dataset.url;
        getFirebaseToken(this.setData)
            .then(response => {
                fetch(url + makeParams({ token: response.token }))
                    .then(response => {
                        return response.json();
                    })
                    .then(result => {
                        this.setData(result);
                    })
                    .catch(ex => {
                        console.log(ex);
                        this.setState({ error: ex.message, stack: ex.stack });
                    });
            })
            .catch(ex => {
                console.log(ex);
            });
    };

    runBatchRead = event => {
        const url = event.currentTarget.dataset.url;
        getFirebaseToken(this.setData)
            .then(response => {
                fetch(url + makeParams({ token: response.token }))
                    .then(response => {
                        return response.json();
                    })
                    .then(result => {
                        this.setData({ items: result });
                    })
                    .catch(ex => {
                        console.log(ex);
                        this.setState({ error: ex.message, stack: ex.stack });
                    });
            })
            .catch(ex => {
                console.log(ex);
            });
    };

    render() {
        return (
            <div>
                <h1>Elf Express Firestore Verify</h1>
                <button onClick={() => window.open('elf-sign-in.html')}>
                    Login
                </button>
                <a href="/worker?title=FirebaseLogout">Logout</a>

                <h2>Batch and Snapshot</h2>
                <button onClick={this.runQuery} data-url="/write-batch">
                    Test Write Batch
                </button>
                <button onClick={this.runBatchRead} data-url="/read-snapshot">
                    Test Read Snapshot
                </button>

                <h2>Writes</h2>
                <p>
                    <b>Result</b>: {this.state.result}
                </p>

                <h2>Reads</h2>
                <p>
                    <b>ID</b>: {this.state.items[0].id}
                </p>
                <p>
                    <b>Data</b>: {this.state.items[0].data}
                </p>

                <h2>Errors</h2>
                <p>
                    <b>Status Message</b>: {this.state.error}
                </p>
                <p>
                    <b>Stack</b>: {this.state.stack}
                </p>
            </div>
        );
    }
}

export default App;
