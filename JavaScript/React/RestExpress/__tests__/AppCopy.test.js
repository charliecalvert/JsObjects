const React = require('react');
const { StrictMode } = React;
const { createRoot } = require('react-dom/client');
const { render, screen } = require('@testing-library/react');
const App = require('../src/AppCopy');


describe('App', () => {
    it('renders App component', () => {
        render(<App />);
        screen.debug();
    });


    /* it('renders without crashing', () => {
        const root = createRoot('div');
        root.render(
            <StrictMode>
                <App />
            </StrictMode>
        );
    }); */
});


/*  */
