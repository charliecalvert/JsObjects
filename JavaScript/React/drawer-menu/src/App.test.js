import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Bar from './Bar';
import Foo from './Foo';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {configure, shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ElfDebugEnzyme from './ElfDebugEnzyme';

const elfDebugEnzyme = new ElfDebugEnzyme(false, 'App.test.js');

configure({adapter: new Adapter()});

describe('App Tests', function() {
    it('renders App without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<MuiThemeProvider><App/></MuiThemeProvider>, div);
    });

    it('renders and reads H1 text from App', () => {
        const wrapper = shallow(<App/>);
        const welcome = <h1>Waiting</h1>;
        elfDebugEnzyme.getLast(wrapper, 'h1', false);
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders button click message', () => {
        const wrapper = mount(<MuiThemeProvider><App /></MuiThemeProvider>);
        const welcome = <h1>You Picked Foo</h1>;
        wrapper.find('#showFooId').last().simulate('click');
        elfDebugEnzyme.getLast(wrapper, 'h1', true);
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders button click message', () => {
        const wrapper = mount(<MuiThemeProvider><App /></MuiThemeProvider>);
        const welcome = <h1>You Picked Bar</h1>;
        wrapper.find('#showBarId').last().simulate('click');
        elfDebugEnzyme.getLast(wrapper, 'h1', true);
        expect(wrapper.contains(welcome)).toEqual(true);
    });

});


describe('Bar Tests', function() {

    it('renders Bar without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Bar/>, div);
    });

    it('renders and reads H1 text from Bar', () => {
        const wrapper = shallow(<Bar/>);
        const welcome = <h1>You Picked Bar</h1>;
        elfDebugEnzyme.getLast(wrapper, 'h1', false);
        expect(wrapper.contains(welcome)).toEqual(true);
    });
});


describe('Foo Tests', function() {
    it('renders Foo without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Foo/>, div);
    });

    it('renders and reads H1 text from Foo', () => {
        const wrapper = shallow(<Foo/>);
        const welcome = <h1>You Picked Foo</h1>;
        elfDebugEnzyme.getLast(wrapper, 'h1', false);
        expect(wrapper.contains(welcome)).toEqual(true);
    });
});
