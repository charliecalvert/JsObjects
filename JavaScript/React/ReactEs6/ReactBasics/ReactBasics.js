import React from 'react';

// process.env.NODE_ENV = 'development';

export class ReactBasics extends React.Component {
    getTwo(x) {
        console.log(x);
        return 2 * x;
    }

    render() {
        return (
            <div className="elf-border">
                <h1>An H1 element in a React Class Component</h1>
                <p>
                    We called getTwo(3) and got:
                    {this.getTwo(3)}
                </p>
            </div>
        );
    }
}
