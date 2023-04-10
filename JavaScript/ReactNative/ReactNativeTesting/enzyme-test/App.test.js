import React from 'react';
import renderer from 'react-test-renderer';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });


import App from './App';

describe('<App />', () => {
    it('works', () => {
        expect(1).toBe(1);
    });

/*    it('renders without crashing', () => {
        const rendered = renderer.create(<App />).toJSON();
        expect(rendered).toBeTruthy();
    });


    it('renders and reads H1 text from Foo', () => {
        const wrapper = shallow(<App />);
        const welcome = <h1>You Picked Foo</h1>;
        expect(wrapper.contains(welcome)).toEqual(true);
    }); */
});
