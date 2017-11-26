/* eslint-disable no-undef */

import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import { shallow } from 'enzyme';
import App from '../src/App';

describe('App', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(
            <App />,
        );
    });

    it('Check for header', () => {
        //expect(wrapper.toContain('<h2>The Main File</h2>');
    });

});
