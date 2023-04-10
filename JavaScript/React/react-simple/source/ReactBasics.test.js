import React from 'react';
import ReactDOM from 'react-dom';
import { ReactBasics } from './ReactBasics';

describe('<ReactBasics />', function() {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ReactBasics/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });


    /* it('checks that we use className elf-show in second item', () => {
        const wrapper = shallow(<ReactBasics/>);
        expect(
            wrapper
                .find('div')
                .get(0)
                .props.className.includes('elf-show')
        ).toBe(true);
    }); */

});
