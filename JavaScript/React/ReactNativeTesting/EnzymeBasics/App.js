import React from 'react';
import {Text, View} from 'react-native';
import Address from "./Address";
import elfStyles from './elf-styles';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            foobar: 'barfoo'
        }
    }

    clickFoobar = () => {
        this.setState({foobar: 'foobar1'});
    };

    render() {
        return (
            <View style={elfStyles.container}>
                <Text id="testClosed">{this.state.foobar}</Text>
                <button id="textOpen" onClick={this.clickFoobar}>
                    Foobar
                </button>
                <Address/>
            </View>
        );
    }
}

