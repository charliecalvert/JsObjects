import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Face from 'material-ui/svg-icons/action/face';
import Code from 'material-ui/svg-icons/action/code';

process.env.NODE_ENV = 'development';

const style = {
    margin: 12
};

export class ReactBasics extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            presidents: []
        };
    }

    loadData = () => {
        const that = this;
        fetch('/data.json')
            .then(function(response) {
                return response.json();
            })
            .then(function(result) {
                console.log(result);
                that.setState({ data: JSON.stringify(result) });
            });
    };

    getApiKey = () => {
        const that = this;
        fetch('/get-api-key')
            .then(function(response) {
                return response.json();
            })
            .then(function(result) {
                console.log(result);
                that.getPresidents(result.apiKey);
            });
    };

    getPresidents = apiKey => {
        const that = this;
        var query =
            'https://api.mongolab.com/api/1/databases/elvenlab01/collections/Presidents?apiKey=vUoL-xbE47lbrhEuFZr1xt78oqVFJt7a';
        fetch(query, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
            .then(function(response) {
                return response.json();
            })
            .then(function(result) {
                console.log(result);
                const presNames = result.map(function(president) {
                    return president.presidentName;
                });
                that.setState({ president: presNames.join('\n') });
            });
    };

    render() {
        return (
            <div>
                <h1>Mongo Lab React</h1>

                <p>
                    This project retrieves a small amount of JSON from a node
                    server and some data from the MongoLab cloud based Mongo
                    Database.
                </p>

                <RaisedButton
                    label="Load Data"
                    icon={<Code />}
                    secondary={true}
                    style={style}
                    onClick={this.loadData}
                />

                <RaisedButton
                    label="Get Presidents"
                    primary={true}
                    style={style}
                    onClick={this.getApiKey}
                    icon={<Face />}
                />

                <pre>{this.state.president}</pre>
                <pre>{this.state.data}</pre>
            </div>
        );
    }
}
