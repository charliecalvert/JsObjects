import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Face from 'material-ui/svg-icons/action/face';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';

process.env.NODE_ENV = 'development';

const style = {
    margin: 12,
};

export class ReactBasics extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            numberOfPresidents: 0,
            presidents: [],
            listItems: null
        }
    }

    getApiKey = () => {
        const that = this;
        fetch('/get-api-key')
            .then(function(response) {
                return response.json();
            })
            .then(function(result) {
                console.log(result);
                that.getPresidents(result.apiKey)
            });

    };

    getPresidents = (apiKey) => {
        const that = this;
        var query = "https://api.mongolab.com/api/1/databases/elvenlab01/collections/Presidents?apiKey=vUoL-xbE47lbrhEuFZr1xt78oqVFJt7a";
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
                    return president.presidentName + "(" + president.termStart + "-" + president.termEnd + ")";
                });

                const presList = result.map(function(president) {
                   return <ListItem
                       leftAvatar={<Avatar icon={<FileFolder />} />}
                       key={president.presidentName}
                       primaryText={president.presidentName}
                   />
                });
                that.setState({
                    numberOfPresidents: result.length,
                    president: presNames.join('\n'),
                    listItems: presList
                });
            });
    };

    render() {
        return (
            <div>
                <h1>Mongo Lab React</h1>

                <div id="drawHere01" className="draw-target">
                    <div id="drawHere02"></div>
                </div>

                <div id="newZone">
                <p>This project retrieves a small amount of JSON
                    from a node server and some data from the MongoLab
                    cloud based Mongo Database.</p>
                </div>

                <RaisedButton
                    label="Get Presidents"
                    primary={true}
                    style={style}
                    onClick={this.getApiKey}
                    icon={<Face />} />

                <p>Number of Presidents: {this.state.numberOfPresidents}</p>
                <pre>{this.state.president}</pre>

                <List>
                    {this.state.listItems}
                </List>
            </div>
        );
    }
}


