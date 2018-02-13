import React from 'react';
import ReactDom from 'react-dom';
const bc = new BroadcastChannel('test_channel');

class App extends React.Component {
    constructor(props) {
        super(props);
        const that = this;
        bc.onmessage = function (ev) {
            console.log(ev);
            that.setState(() => {
                return {message: ev.data.message }
            });
        };
        this.state = {
            name: 'ElfPlayer',
            message: ''
        }
    }

    render() {
        return (
            <div>
                <h1>Elven React Game</h1>

                <p>{this.state.name}</p>
                <p>{this.state.message}</p>
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