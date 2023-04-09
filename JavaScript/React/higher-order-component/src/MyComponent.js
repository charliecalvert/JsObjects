import React from 'react';
import PropTypes from 'prop-types';

function MyComponent({ className }) {
    return (
        <div className={className}>
            <p>My Component</p>
        </div>
    );
}

MyComponent.propTypes = {
    className: PropTypes.string,
};

export default MyComponent;
