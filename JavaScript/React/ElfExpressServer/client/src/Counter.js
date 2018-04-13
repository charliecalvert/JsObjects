import React from 'react';
import {connect} from 'react-redux';
import {increment, decrement} from './actions';

class App extends React.Component {


    render() {
        return (
            <div>
                <h2>The Counter</h2>


                <p>Creating a counter is a classic way to teach Redux.</p>

                <p>Counter: {this.props.counter}</p>

                <p>{this.props.counterString}</p>

                <button onClick={this.props.counterUp}>Increment Counter</button>
                <button onClick={this.props.counterDown}>Decrement Counter</button>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter,
        counterString: state.counterString
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        counterUp: () => {
            dispatch(increment());
        },
        counterDown: () => {
            dispatch(decrement())
        }
    }
};


App = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default App;