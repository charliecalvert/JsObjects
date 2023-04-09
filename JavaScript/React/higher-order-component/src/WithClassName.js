import React from 'react';

const withClassName = (Component) => function (props) {
    return <Component {...props} className="my-class" />;
};

export default withClassName;
