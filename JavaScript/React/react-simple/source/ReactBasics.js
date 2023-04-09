import React from 'react';
import Hello from "./Hello";

//process.env.NODE_ENV = 'development';

export class ReactBasics extends React.Component {
    getTwo(x) {
        console.log(x);
        return <h2>Get Two (2 * {x}): {2 * x}</h2>;
    }

    render() {
        return (
            <div className="elf-show">
                <h1>An H1 element in a React Component</h1>
                <p>Call a local function:</p>
                <p>{this.getTwo(133)}</p>
                <p>Call a remote function/component:</p>
                <p>{<Hello name="Sam" />}</p>
                <p>
                    Run <b>npm run build</b> for webpack. See the
                    <a href="https://github.com/charliecalvert/JsObjects/blob/master/JavaScript/React/react-simple/README.md"> README</a>.
                </p>
            </div>
        );
    }
}
