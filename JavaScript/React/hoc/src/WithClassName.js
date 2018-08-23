import React from 'react';

const withClassName = Component => props => (
    <Component {...props} className="my-class"/>
);

export default withClassName;
