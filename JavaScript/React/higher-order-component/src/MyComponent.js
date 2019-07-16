import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = ({ className }) => (
    <div className={className}>
        <p>My Component</p>
    </div>
);

MyComponent.propTypes = {
    className: PropTypes.string
};

export default MyComponent;
