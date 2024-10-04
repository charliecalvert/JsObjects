/**
 * @jest-environment jsdom
 */
const React = require('react');
const { render, screen } = require('@testing-library/react');
require('@testing-library/jest-dom')
const App = require('../src/App');
/* const { StrictMode } = React;
const { createRoot } = require('react-dom/client'); */

describe('App', () => {
    it('renders App component', () => {
        render(<App />);
        screen.debug();
    });

    test('renders learn react link', () => {
        console.log('renders learn react link');

        render(<App />);
        screen.debug();
        const linkElement = screen.getByText(/Hello/i);
        console.log('linkElement:', linkElement);
        // Why can't i use toBeInTheDocument here?
        console.log("toBeInTheD", (linkElement).toBeInTheDocument());
        expect(linkElement).toBeInTheDocument();
    });
});


