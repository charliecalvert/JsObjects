import React from 'react';
import styles from './App.css';

export default class GetNine extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nine: 'Get Nine Result will be placed here.',
            serverNine: 'Get Nine from server will be shown here.'
        };
        this.getNine = this.getNine.bind(this);
        this.getNineFromServer = this.getNineFromServer.bind(this);
    }

    getNine() {
        this.setState(() => ({
            nine: '9'
        }));
    }

    getNineFromServer() {
        const that = this;
        fetch('/nine')
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                console.log('parsed json', json);
                that.setState(() => json);
            })
            .catch(function(ex) {
                console.log('parsing failed', ex);
            });
    }

    render() {
        return (
            <div className={styles.app}>
                <p>{this.state.nine}</p>
                <a id="getNine" className="button elf" onClick={this.getNine}>
                    Get Nine
                </a>
                <hr />
                <p>{this.state.serverNine}</p>
                <a
                    id="getNineParse"
                    className="button elf"
                    onClick={this.getNineFromServer}
                >
                    Get Nine Parse
                </a>
                <hr />
            </div>
        );
    }
}
