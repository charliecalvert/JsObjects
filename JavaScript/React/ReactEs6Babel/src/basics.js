import React from 'react';
import ReactDom from 'react-dom';

class SimpleReact extends React.Component {
    render() {
        return <div>This is a react component</div>;
    };
}

ReactDOM.render(
    <SimpleReact/>,
    document.getElementById('root')
);