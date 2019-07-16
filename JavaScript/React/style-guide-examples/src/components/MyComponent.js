import React from 'react';
import PropTypes from 'prop-types';

export const MyComponent = ({ className }) => (
    <div className={className}>
        <p>My Component</p>
    </div>
);

MyComponent.propTypes = {
    /**
     * Description of prop "foo".
     */
    className: PropTypes.string
};


