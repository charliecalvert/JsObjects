import React from 'react';
import { Text, View, Button } from 'react-native';
import Address from './Address';
import elfStyles from './elf-styles';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            test: 'unknown',
            result: 'unknown',
            ex: 'ff'
        };
        this.fetchMicro = this.fetchMicro.bind(this);
    }

    clickTest = () => {
        this.setState({ test: 'foo is known' });
    };

    fetchMicro() {
        const that = this;
        const ips = ['ccalvert.com', '168.156.43.39'];
        return fetch('http://' + ips[0] + ':30027/you-rang')
            .then(response => response.json())
            .then(function(result) {
                console.log(result);
                that.setState({
                    result: result.result
                });
            })
            .catch(function() {
                that.setState({ foo: 'qux error' });
            });
    }

    render() {
        return (
            <View style={elfStyles.container}>
                <Text id="testClosed">Test: {this.state.test}</Text>
                <Text>You Rang: {this.state.result}</Text>
                <Button id="clickTest" title="Test" onPress={this.clickTest}>
                    Foobar
                </Button>
                <Button
                    id="fetchMicro"
                    title="Fetch Micro"
                    onPress={this.fetchMicro}
                >
                    Foobar
                </Button>
                <Address />
            </View>
        );
    }
}
