import React from 'react';
import App from './App';
import renderer from 'react-test-renderer';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { StyleSheet, Text, Component } from 'react-native';
configure({ adapter: new Adapter() });

describe('App test', function() {
    it('renders without crashing', () => {
        const rendered = renderer.create(<App />).toJSON();
        expect(rendered).toBeTruthy();
    });

    it('test default output of App', () => {
        const wrapper = shallow(<App />);
        expect(wrapper).toMatchSnapshot();
    });

    it('test specific node with property/attribute called bar', () => {
        const wrapper = shallow(<App />);
        console.log(wrapper.debug());
        const foo = <Text bar="3">Open</Text>;
        expect(wrapper.contains(foo)).toBe(true);
    });

    it('test for match element without props (ignores bar)', () => {
        const wrapper = shallow(<App />);
        console.log(wrapper.debug());
        const openText = <Text>Open</Text>;
        expect(wrapper.containsMatchingElement(openText)).toEqual(true);
    });
});
