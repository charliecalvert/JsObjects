import { render, screen } from '@testing-library/react';
import React from 'react';

const App = require('../src/AppElf.jsx');

describe('App', () => {

    it('should contains the heading 1', () => {
		render(<App />);
		const heading = screen.getByText(/Hello React/i);
		expect(heading).toBeInTheDocument();
	});

    it('renders App component', () => {
        render(<App />);
        screen.debug();
    });

    test('renders learn react link', () => {
        console.log('renders learn react link');

        render(<App />);
        screen.debug();
        const heading = screen.getByText(/Hello/i);
        console.log('linkElement:', heading);
        // Why can't i use toBeInTheDocument here?
        // console.log("toBeInTheD", (heading).toBeInTheDocument());
        expect(heading).toBeInTheDocument();
    });
});


