import React, { StrictMode } from 'react';
//import { createRoot } from 'react-dom/client';
import { render, screen } from '@testing-library/react';
import App from '../src/AppCopy';
import '@testing-library/jest-dom'

describe('App', () => {
    it('renders App component', () => {
        render(<App />);
        screen.debug();
    });

    it('renders App component', () => {
        render(<App />);
        const csc = screen.getByText('CSC');
        console.log('csc:', csc);
        expect(screen.getByText('CSC')).toBeTruthy();
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
