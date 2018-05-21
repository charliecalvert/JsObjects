import React from 'react';
import App from './App';
import renderer from 'react-test-renderer';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('App tests', function() {

    const debug = false;

    it('renders without crashing', () => {
        const rendered = renderer.create(<App/>).toJSON();
        expect(rendered).toBeTruthy();
    });

    it('renders default output with react (mount)', () => {
        const tree = renderer.create(<App/>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('handles click on foobar with react', () => {
        const after = renderer.create(<App/>);
        after.getInstance().clickFoobar();
        expect(after.toJSON()).toMatchSnapshot();
    });

    it('renders default output with enzyme shallow', () => {
        const wrapper = shallow(<App/>);
        if (debug) {
            console.log(wrapper.debug());
        }
        expect(wrapper).toMatchSnapshot();

    });

    it('handles click on foobar with enzyme', () => {
        const wrapper = shallow(<App/>);
        if (debug) {
            console.log(wrapper.debug());
        }
        wrapper.find('#textOpen').simulate('click');
        expect(wrapper).toMatchSnapshot();
    });
});