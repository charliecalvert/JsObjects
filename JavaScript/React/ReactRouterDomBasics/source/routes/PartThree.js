import React from 'react';
/* import { Container, Row, Col } from 'react-bootstrap'; */
import {
    useParams, Route, Routes, Link
} from 'react-router-dom'; 
import PartTwo from './PartTwo';

function PartThree() {
    const { id } = useParams();
    return (
        <React.Fragment>
            <h1>Part Three</h1>
            <p>A second simple react component.</p>
            <h3>
                Requested ID:{' '}{id}
            </h3>
        </React.Fragment>
    )
}

export default PartThree;
