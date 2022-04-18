/**
 * Created by charlie on 3/26/17.
 */
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Routing from './Routing';
import './styles.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <BrowserRouter>
        <Routing />
    </BrowserRouter>,
);
