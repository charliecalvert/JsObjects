const { StrictMode } = require('react');
const { createRoot } = require('react-dom/client');

import App from './App';
it('renders without crashing', () => {
    const root = createRoot('div');
    root.render(
        <StrictMode>
            <App />
        </StrictMode>
    );
});
