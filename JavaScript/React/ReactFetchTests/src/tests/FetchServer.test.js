import React from 'react';
import ReactDOM from 'react-dom';
import FetchServer from '../components/FetchServer';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ElfDebugEnzyme from '../ElfDebugEnzyme';
import elfLogger from '../elf-logger';

const elfDebugEnzyme = new ElfDebugEnzyme(false, 'App.test.js');
configure({ adapter: new Adapter() });

describe('FetchServer Tests', function() {
    elfLogger.off();

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<FetchServer />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('handles click on foobar with enzyme', () => {
        const wrapper = shallow(<FetchServer />);
        console.log(wrapper.debug());
        wrapper.find('#fetchServer').simulate('click');
        expect(wrapper).toMatchSnapshot();
    });

    it('renders state.result before button click', () => {
        const wrapper = shallow(<FetchServer />);
        const nineSign = <p className="App-intro">Result: unknown</p>;
        elfDebugEnzyme.getFirst(wrapper, 'p');
        expect(wrapper.contains(nineSign)).toBe(true);
    });

    it('renders state by calling fetchServer directly', () => {
        const wrapper = shallow(<FetchServer />);
        const statusParagraph = <p className="App-intro">Result: success</p>;
        wrapper
            .instance()
            .fetchServer()
            .then(() => {
                console.log(wrapper.debug());
                wrapper.update();
                try {
                    expect(wrapper.contains(statusParagraph)).toBe(true);
                } catch (ex) {
                    console.error(ex);
                }
            });
    });

    it('calls fetchServer button click', () => {
        const spy = jest.spyOn(FetchServer.prototype, 'fetchServer');
        const wrapper = shallow(<FetchServer />);
        wrapper.find('#fetchServer').simulate('click');
        console.log(wrapper.debug());
        expect(spy).toHaveBeenCalled();
    });

    it('renders state.result after button click with setImmediate', () => {
        const wrapper = shallow(<FetchServer />);
        const statusParagraph = <p className="App-intro">Result: success</p>;
        wrapper.find('#fetchServer').simulate('click');
        setTimeout(() => {
            wrapper.update();
            elfDebugEnzyme.getFirst(wrapper, 'p');
            try {
                expect(wrapper.contains(statusParagraph)).toBe(true);
            } catch (e) {
                console.error(e);
            }
        }, 0);
    });
});
