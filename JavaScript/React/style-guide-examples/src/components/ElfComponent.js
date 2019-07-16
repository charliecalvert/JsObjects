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
    /**
     * Description of prop "className".
     */
    className: PropTypes.string,
    /** The id of the div wrapping the output */
    id: PropTypes.number
};

export default ElfComponent;
