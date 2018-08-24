import React from 'react';
import PropTypes from 'prop-types';

const ElfComponent = ({ className, id }) => (
    <div className={className} id={id}>
        <p>Elf Component</p>
        <a href="https://react-styleguidist.js.org/docs/getting-started.html">
            Style Guidest Component
        </a>
    </div>
);

ElfComponent.propTypes = {
    className: PropTypes.string
};

export default ElfComponent;
