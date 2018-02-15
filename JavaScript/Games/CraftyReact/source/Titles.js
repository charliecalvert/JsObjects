import React from 'react';
import ReactDom from 'react-dom';
const bc = new BroadcastChannel('test_channel');

class App extends React.Component {
    constructor(props) {
        super(props);
        const that = this;
        bc.onmessage = function (ev) {
            console.log(ev);
            that.setState((prev) => {
                let debugBroadcast = prev.debugMessage;
                let encounterMessage = prev.encounterMessage;
                let changeDirectionBroadcast = prev.changeDirectionBroadcast;
                let unknownMessage = prev.unknownMessage;
                let message = 'Could not convert message';

                if (typeof ev.data.message === 'string') {
                    message = ev.data.message;
                } else {
                    message = JSON.stringify(ev.data.message);
                }

                const previousMessageType = prev.messageType;
                const thirdMessageType = prev.previousMessageType;
                if (ev.data.type === 'debugBroadcast') {
                    debugBroadcast = message;
                } else if (ev.data.type === 'encounterBroadcast') {
                    encounterMessage = message;
                } else if (ev.data.type === 'changeDirectionBroadcast') {
                    changeDirectionBroadcast = message;
                } else {
                    unknownMessage = message;
                }
                return {
                    message: message,
                    messageType: ev.data.type,
                    debugBroadcast: debugBroadcast,
                    encounterMessage: encounterMessage,
                    changeDirectionBroadcast: changeDirectionBroadcast,
                    unknownMessage: unknownMessage,
                    previousMessageType: previousMessageType,
                    thirdMessageType: thirdMessageType
                }
            })
        };
        this.state = {
            name: 'ElfPlayer',
            message: '',
            messageType: '',
            changeDirectionBroadcast: '',
            debugBroadcast: '',
            encounterMessage: '',
            previousMessageType: '',
            thisMessageType: '',
            unknownMessage: ''
        }
    }

    render() {
        return (
            <div>
                <h1>Elven React Game</h1>

                <p>Name: {this.state.name}</p>
                <p>Message: {this.state.message}</p>
                <p>MessageType: {this.state.messageType}</p>
                <p>PreviousMessageType: {this.state.previousMessageType}</p>
                <p>ThirdMessageType: {this.state.thirdMessageType}</p>
                <p>ChangeDirectionBroadcast: {this.state.changeDirectionBroadcast}</p>
                <p>DebugBroadcast: {this.state.debugBroadcast}</p>
                <p>EncounterMesssage: {this.state.encounterMessage}</p>
                <p>UnknownMessage: {this.state.unknownMessage}</p>

            </div>
        )
    }
}

const root = document.getElementById('root');

ReactDom.render(
    <div>
        <App/>
    </div>,
    root
);


//export default App;