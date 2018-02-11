import React from "react";
import {getEight} from "./actions";
import {connect} from "react-redux";

class GetNumbers extends React.Component {
    constructor(props) {
        super(props);
        this.getNine = this.getNine.bind(this);
    }

    getNine() {
        const that = this;
        return fetch('/getNine', {
            accept: 'application/json',
        }).then(function(response) {
            return response.json();
        }).then(function(json) {
            console.log('parsed json', json);
            that.props.getNine(json.result);
        }).catch(function(ex) {
            console.log('parsing failed', ex);
        });
    }

    render() {
        return (
            <div>
                <h2>Get Numbers</h2>
                <p>Date: {this.props.date}</p>
                <p>{this.props.counter}</p>
                <p>The number nine is retrieved from an Express Server.
                    The Server is found in a directory called <strong>server</strong>.
                    See <strong>server/routes/index.js</strong> in the server application.</p>

                <ul>
                    <li>Eight: {this.props.eight}</li>
                    <li>Nine: {this.props.nine}</li>
                </ul>

                <button onClick={this.props.getEight}>Get Eight</button>
                <button onClick={this.getNine}>Get Nine</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        eight: state.eight,
        nine: state.nine,
        date: state.date,
        counter: state.counterString

    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getEight: () => {
            dispatch(getEight(8));
        },
        getNine: (value) => {
            dispatch({type: "GET_NINE", value: value});
        }
    }
};

GetNumbers = connect(
    mapStateToProps,
    mapDispatchToProps
)(GetNumbers);

export default GetNumbers;