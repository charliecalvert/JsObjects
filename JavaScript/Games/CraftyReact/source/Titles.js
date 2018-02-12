import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component {

    render() {
        return (
            <div>
                <h1>Elven React</h1>
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