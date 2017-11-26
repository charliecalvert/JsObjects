import react from 'react';

class DebugTip extends React.Component {
    render() {
        return (
            <div>
                <h2>Debugging Tip</h2>
                <p>
                    To get started debugging your webpack, add this
                    to the <strong>webpack.config.js</strong> config file:
                </p>
                <pre>devtool: 'source-map',</pre>
                <p>Open the debugger and go webpack in the navigation pane.</p>
                <img src="debug-web.png" alt="debugging"/>
            </div>
        )

    }
}