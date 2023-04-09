import React, { Component } from 'react';
import '../css/App.css';

class Instructions extends Component {
    showServerInfo = () => {
        const info = {
            result: 'success'
        };
        return JSON.stringify(info, null, 4);
    };

    showNumbersInfo = () => {
        const info = {
            numbers: ['One', 'Two', 'Three']
        };
        return JSON.stringify(info, null, 4);
    };

    getUrls = offset => {
        const urls = [
            'https://www.elvenware.com/teach/assignments/react/ReactPropsMocks.html#create-mock-data',
            'https://www.elvenware.com/teach/assignments/react/ReactPropsMocks.html#mocking-fetch',
            'https://www.elvenware.com/teach/assignments/react/ReactPropsMocks.html#working-with-create-react-app'
        ];
        return urls[offset];
    };

    render() {
        return (
            <section>
                <div className="Instructions">
                    <h2 className="Code">Instructions</h2>
                    <p className="Code">
                        A server for this program is found in <strong>ElfExpressServer/server</strong>.
                    </p>
                    <p className="Code">
                        See the proxy key in <strong>package.json</strong>.
                    </p>
                    <p className="Code">
                        This program assumes you have a server running. The
                        server should respond to queries to these routes:{' '}
                        <strong>/api/foo</strong> and{' '}
                        <strong>/api/numbers</strong>. When that endpoint is
                        called, the server should send at least this much
                        information:
                    </p>
                    <p>
                        For <strong>/api/foo</strong>:
                    </p>
                    <pre className="Code">{this.showServerInfo()}</pre>
                    <p>
                        For <strong>/numbers</strong>:
                    </p>
                    <pre className="Code">{this.showNumbersInfo()}</pre>
                    <p>
                        See also the <strong>__mocks__</strong> directory and{' '}
                        <strong>src/setupTests.js</strong>.
                    </p>
                    <ul>
                        <li>
                            <a
                                href={this.getUrls(0)}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Mocking Data
                            </a>
                        </li>
                        <li>
                            <a
                                href={this.getUrls(1)}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Mocking Fetch
                            </a>
                        </li>
                        <li>
                            <a
                                href={this.getUrls(2)}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Setup
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
        );
    }
}

export default Instructions;
