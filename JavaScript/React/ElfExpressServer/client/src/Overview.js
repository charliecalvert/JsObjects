import React from 'react';
import {connect} from 'react-redux';
import {getDate, getTitle} from "./actions";

class Overview extends React.Component {

    constructor(props) {
        super(props);
        this.props.dispatchTitle();
        this.props.dispatchDate();

    }
    render() {

        return (
            <div>
                <h1>{this.props.title}</h1>
                <p>The date is: {this.props.date}</p>
                <p> Welcome to the <strong>{this.props.title}</strong>. This program uses:</p>

                <ul>
                    <li>React</li>
                    <li>Redux</li>
                    <li>fetch</li>
                    <li>Express</li>
                </ul>

                <p>Redux data like the <strong>date</strong> and
                   the <strong>counter</strong> are shared across
                   multiple modules. The various sections of the main
                   page are broken up into separate React modules. The
                   goal is "divide and conquor". Each object should be
                   short and do only one thing.</p>

                <p>The React code for this program is found
                    in <strong>client/src/App.js</strong> and
                    its dependencies.</p>
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
        title: state.title,
        date: state.date
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchTitle: () => {
            dispatch(getTitle());
        },
        dispatchDate: () => {
            dispatch(getDate())
        }
    }
};

Overview = connect(
    mapStateToProps,
    mapDispatchToProps
)(Overview);

export default Overview;