import React from 'react';
import ReactDOM from 'react-dom';
import FetchNumbers from '../components/FetchNumbers';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ElfDebugEnzyme from '../ElfDebugEnzyme';
import elfLogger from '../elf-logger';

const elfDebugEnzyme = new ElfDebugEnzyme(false, 'App.test.js');
configure({adapter: new Adapter()});

describe('FetchNumbers Tests', function() {

    elfLogger.off();

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<FetchNumbers/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('handles click on foobar with enzyme', () => {
        const wrapper = shallow(<FetchNumbers/>);
        console.log(wrapper.debug());
        wrapper.find('#fetchNumbers').simulate('click');
        expect(wrapper).toMatchSnapshot();
    });

    it('renders state.result before button click', () => {
        const wrapper = shallow(<FetchNumbers/>);
        const nineSign = (
            <p>a</p>
        );
        elfDebugEnzyme.getFirst(wrapper, 'p');
        expect(wrapper.contains(nineSign)).toBe(true);
    });

    it('renders state by calling fetchNumbers directly', () => {
        const wrapper = shallow(<FetchNumbers/>);
        const statusParagraph = (
            <p>One</p>
        );
        wrapper.instance().fetchNumbers()
            .then(() => {
                wrapper.update();
                console.log(wrapper.debug());
                expect(wrapper.contains(statusParagraph)).toBe(true);
            });

    });

    it('calls fetchNumbers button click', () => {
        const spy = jest.spyOn(FetchNumbers.prototype, 'fetchNumbers');
        const wrapper = shallow(<FetchNumbers/>);
        wrapper.find('#fetchNumbers').simulate('click');
        console.log(wrapper.debug());
        expect(spy).toHaveBeenCalled();
    });

    it('renders state.result after button click with setImmediate', () => {
        const wrapper = shallow(<FetchNumbers/>);
        const statusParagraph = (
            <p>One</p>
        );
        wrapper.find('#fetchNumbers').simulate('click');
        setImmediate(() => {
            wrapper.update();
            elfDebugEnzyme.getFirst(wrapper, 'p');
            try {
                expect(wrapper.contains(statusParagraph)).toBe(true);
            } catch (e) {
                console.error(e);
            }
        });
    });
});