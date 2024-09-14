const React = require('react');
const { render, screen } = require('@testing-library/react');
const App = require('../src/App');
// const prettyDOM = require("pretty-dom");

describe('App', () => {
  it('renders App component', () => {
    render(<App />);
    screen.debug();
  });
});


/* const { StrictMode } = React;
const { createRoot } = require('react-dom/client');
import App from './App';
it('renders without crashing', () => {
    const root = createRoot('div');
    root.render(
        <StrictMode>
            <App />
        </StrictMode>
    );
}); */
