/* eslint-disable no-undef */

import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import configReducer from './reducers/redux-counter';
import { createStore } from 'redux';

let store = createStore(configReducer);

import Overview from './Overview';
import ElfDebugEnzyme from './ElfDebugEnzyme';
const elfDebugEnzyme = new ElfDebugEnzyme(true, 'App.test.js');

class OverviewDummyWrapper extends React.Component {}
describe('Test overview', () => {
    let wrapper;

    /*beforeEach(() => {
        wrapper = shallow(
            <App />,
        );
    });*/

    it('renders and reads H1 text from App', () => {
        //const wrapper = mount(<Provider store={store}><Overview/></Provider>);
        const wrapper = mount(
            <Overview title="Elven React Redux REST Demo" date="June" />
        );
        //elfDebugEnzyme.getAll(wrapper);
        const welcome = <h1>Elven React Redux REST Demo</h1>;
        elfDebugEnzyme.getLast(wrapper, 'h1', true);
        expect(wrapper.contains(welcome)).toEqual(true);
    });
});
