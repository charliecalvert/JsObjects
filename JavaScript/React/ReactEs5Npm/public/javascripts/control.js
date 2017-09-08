
$(document).ready(function() { 'use strict';
    class HelloComponent extends React.Component {
        render() {

            return <div>Hello {this.props.name}</div>;

        };
    }

    ReactDOM.render(
        <HelloComponent/>,
        document.getElementById('root')
    );

});
