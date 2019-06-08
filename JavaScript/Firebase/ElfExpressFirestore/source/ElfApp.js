import React, {Component} from 'react';

class ElfApp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: 'none',
            result: 'unknown',
            name: 'unknown',
            email: 'unknown',
            photoUrl: 'unknown',
            stack: 'none'
        }
    }

    runQuery = (event) => {
        const url = event.currentTarget.dataset.url;
        fetch(url)
            .then(response => {
                return response.json();
            })
            .then(result => {
                console.log('FETCH RESULT', result);
                this.setState(result);
            })
            .catch(ex => {
                console.log(ex);
                this.setState({error: ex.message, stack: ex.stack});
            })
    };

    render() {
        return (
            <div>
                <h1>Welcome to ElfExpressFirestore</h1>
                <button onClick={this.runQuery} data-url="/read">Test Read</button>
                <button onClick={this.runQuery} data-url="/write">Test Write</button>
                <h2>Writes</h2>
                <p><b>Result</b>: {this.state.result}</p>
                <h2>Reads</h2>
                <p><b>Name</b>: {this.state.name}</p>
                <p><b>Email</b>: {this.state.email}</p>
                <p><b>Photo URL</b>: {this.state.photoUrl}</p>
                <h2>Errors</h2>
                <p><b>Status Message</b>: {this.state.error}</p>
                <p><b>Stack</b>: {this.state.stack}</p>
            </div>
        );
    }
}

export default ElfApp;
