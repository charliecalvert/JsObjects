/**
 * @jest-environment jsdom
 */
const React = require('react');
const { render, screen } = require('@testing-library/react');
const App = require('../src/App');
/* const { StrictMode } = React;
const { createRoot } = require('react-dom/client'); */

describe('App', () => {
  it('renders App component', () => {
    render(<App />);
    screen.debug();
  });
});


/* test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
}); */