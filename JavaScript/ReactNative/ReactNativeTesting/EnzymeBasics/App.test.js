import React from 'react';
import App from './App';
import renderer from 'react-test-renderer';
import { configure, shallow } from 'enzyme';
import { Text } from 'react-native';
import Adapter from 'enzyme-adapter-react-16';
import elfLogger from './elf-logger';

configure({ adapter: new Adapter() });

describe('App tests', function() {
    elfLogger.off();

    beforeEach(() => {
        global.fetch = jest.fn().mockImplementation(() => {
            const promise = new Promise(resolve => {
                resolve({
                    ok: true,
                    json: function() {
                        return {
                            test: 'status did go here',
                            result: 'hello'
                        };
                    }
                });
            });
            return promise;
        });
    });

    it('renders without crashing', () => {
        const rendered = renderer.create(<App />).toJSON();
        expect(rendered).toBeTruthy();
    });

    it('renders default output with react (mount)', () => {
        const tree = renderer.create(<App />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('handles click on foobar with react', () => {
        const after = renderer.create(<App />);
        after.getInstance().clickTest();
        expect(after.toJSON()).toMatchSnapshot();
    });

    it('renders default output with enzyme shallow', () => {
        const wrapper = shallow(<App />);
        console.log(wrapper.debug());
        expect(wrapper).toMatchSnapshot();
    });

    it('handles click on foobar with enzyme', () => {
        const wrapper = shallow(<App />);
        console.log(wrapper.debug());
        wrapper.find('#clickTest').simulate('click');
        expect(wrapper).toMatchSnapshot();
    });

    it('renders state of File paragraph after button click setimeout', () => {
        const wrapper = shallow(<App />);
        const statusParagraph = <Text>You Rang: hello</Text>;

        return wrapper
            .instance()
            .fetchMicro()
            .then(() => {
                wrapper.update();
                console.log(wrapper.debug());
                expect(wrapper.contains(statusParagraph)).toBe(true);
            });
    });

    it('calls queryServer button click', () => {
        const spy = jest.spyOn(App.prototype, 'fetchMicro');
        const wrapper = shallow(<App />);
        wrapper
            .find('#fetchMicro')
            .props()
            .onPress();
        console.log(wrapper.debug());
        expect(spy).toHaveBeenCalled();
    });
});
