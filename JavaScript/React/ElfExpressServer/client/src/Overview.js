import React from 'react';
import {connect} from 'react-redux';
import {getTitle} from "./actions";

class Overview extends React.Component {

    constructor(props) {
        super(props);
        this.props.dispatchTitle();

    }
    render() {

        return (
            <div>
                <h1>{this.props.title}</h1>
                <p> Welcome to the <strong>{this.props.title}</strong>. This program uses:</p>

                <ul>
                    <li>React</li>
                    <li>Redux</li>
                    <li>fetch</li>
                    <li>Express</li>
                </ul>

                <h2>The Main File</h2>

                <p>The code for this file is found in <strong>client/src/App.js</strong></p>
                <p>Redux is initialized in <strong>index.js</strong>.
                    In <strong>src/App.js</strong> and <strong>src/Counter.js</strong> you will
                    find <strong>Connect</strong> is used along with:</p>


                <ul>
                    <li>MapStateToProps</li>
                    <li>MapDispatchToProps</li>
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        title: state.title
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchTitle: () => {
            dispatch(getTitle());
        }
    }
};

Overview = connect(
    mapStateToProps,
    mapDispatchToProps
)(Overview);

export default Overview;