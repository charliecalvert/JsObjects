import React from 'react';
import PropTypes from 'prop-types';

class Overview extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <p>The date is: {this.props.date}</p>
                <p>
                    {' '}
                    Welcome to the <strong>{this.props.title}</strong>. This
                    program uses:
                </p>

                <ul>
                    <li>React</li>
                    <li>Redux</li>
                    <li>fetch</li>
                    <li>Express</li>
                </ul>

                <p>
                    Redux data like the <strong>date</strong> and the{' '}
                    <strong>counter</strong> are shared across multiple modules.
                    The various sections of the main page are broken up into
                    separate React modules. The goal is{' '}
                    <b>divide and conquor</b>. Each object should be short and
                    do only one thing.
                </p>

                <p>
                    The React code for this program is found in{' '}
                    <strong>client/src/App.js</strong> and its dependencies.
                </p>
                <p>
                    Redux is initialized in <strong>index.js</strong>. In{' '}
                    <strong>src/App.js</strong> and{' '}
                    <strong>src/Counter.js</strong> you will find{' '}
                    <strong>Connect</strong> is used along with:
                </p>

                <ul>
                    <li>MapStateToProps</li>
                    <li>MapDispatchToProps</li>
                </ul>
            </div>
        );
    }
}

Overview.propTypes = {
    title: PropTypes.string,
    date: PropTypes.instanceOf(Date)
};

export default Overview;
