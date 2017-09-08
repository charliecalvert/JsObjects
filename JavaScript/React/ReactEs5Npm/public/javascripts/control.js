
$(document).ready(function() { 'use strict';
    class SimpleReact extends React.Component {
        render() {
            return <div>This is a react component</div>;
        };
    }

    ReactDOM.render(
        <SimpleReact/>,
        document.getElementById('root')
    );

});
