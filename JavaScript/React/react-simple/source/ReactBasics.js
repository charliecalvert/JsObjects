import React from 'react';

//process.env.NODE_ENV = 'development';

export class ReactBasics extends React.Component {
    getTwo(x) {
        console.log(x);
        return 2 * x;
    }

    render() {
        return (
            <div className="elf-show">
                <h1>An H1 element in a React Component</h1>
                <p>{this.getTwo(3)}</p>
                <p>
                    Run <b>npm run build</b> for webpack. See the
                    <a href="https://github.com/charliecalvert/JsObjects/blob/master/JavaScript/React/react-simple/README.md"> README</a>.
                </p>
            </div>
        );
    }
}
