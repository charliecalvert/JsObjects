import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import App from './App';

configure({ adapter: new Adapter() });

describe('Check Gist withStyles Display Suite', () => {
    let wrapper = null;
    beforeEach(() => {
        wrapper = shallow(
            <App
                queryServer={() => {}}
                fetchGistList={() => {}}
                result={'success'}
                gistList={[{ id: 3 }]}
            />
        ).dive();
    });

    afterEach(() => {
        wrapper = null;
    });

    it('proves we can run a test', () => {
        expect(true).toBe(true);
    });

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <App
                queryServer={() => {}}
                fetchGistList={() => {}}
                result={'success'}
                gistList={[{ id: 3 }]}
            />,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    });

    it('checks that one element has an id of ownerLogin', () => {
        expect(wrapper.find('#lo').length).toBe(1);
    });

    it('checks that one element has an id of gitPullUrl', () => {
        expect(wrapper.find('#gridContainerSpace24').length).toBe(1);
    });

    it('checks that one element has an id of files', () => {
        expect(wrapper.find('#gridItem12').length).toBe(1);
    });
});
