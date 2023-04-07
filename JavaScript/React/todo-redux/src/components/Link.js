import React from 'react';
import PropTypes from 'prop-types';

function Link({ active, children, onClick }) {
    if (active) {
        return <span>{children}</span>;
    }

    return (
        <a
            href="#ignore_me"
            onClick={(e) => {
                e.preventDefault();
                onClick();
            }}
        >
            {children}
        </a>
    );
}

Link.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default Link;
