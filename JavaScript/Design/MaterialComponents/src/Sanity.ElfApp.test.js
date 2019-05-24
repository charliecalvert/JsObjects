import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import App from './App';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

configure({ adapter: new Adapter() });

describe('Sanity GetGist Layout Tests', () => {
    let wrapper = null;

    beforeEach(() => {
        wrapper = shallow(<App />).dive();
    });

    afterEach(() => {
        wrapper = null;
    });

    it('proves we can run a test', () => {
        expect(true).toBe(true);
    });

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('checks that getGist is a function', () => {
        expect(typeof App).toBe('function');
    });

    it('checks that we use CssBaseLine', () => {
        expect(wrapper.find('WithStyles(CssBaseline)').length).toBe(1);
    });

    it('checks that we use backDiv3', () => {
        expect(wrapper.find('div').first().length).toBe(1);
        expect(
            wrapper
                .find('div')
                .first()
                .props()
                .className.includes('backDiv3')
        ).toBe(true);
    });

    it('checks that we use className layout in second item', () => {
        expect(
            wrapper
                .find('div')
                .get(1)
                .props.className.includes('layout')
        ).toBe(true);
    });

    it('checks that the first Grid has a spacing of 24', () => {
        expect(wrapper.find(Grid).get(0).props.spacing).toBe(24);
    });

    it('checks that the second Grid has xs=12', () => {
        expect(wrapper.find(Grid).get(1).props.xs).toBe(12);
    });

    it('checks for Paper', () => {
        expect(
            wrapper
                .find(Paper)
                .get(1)
                .props.className.includes('paperLion')
        ).toBe(true);
    });
});
