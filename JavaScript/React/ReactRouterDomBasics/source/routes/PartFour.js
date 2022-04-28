import React from 'react';
/* import { Container, Row, Col } from 'react-bootstrap'; */
import {
    useParams, Route, Routes, Link,
} from 'react-router-dom';
import PartTwo from './PartTwo';

function PartThree() {
    const { id } = useParams();
    //  let match = useMatch();
    return (
        <>
            <h1>Part Four</h1>
            <p>A simple react component.</p>

            <ul>
                <li>
                    <Link to="/:id">
                        part two
                    </Link>
                </li>
            </ul>

            {/*  <Routes>
                <Route path=":id" element={<PartTwo />} />
            </Routes> */}
        </>
    );
}

export default PartThree;
