
import React from 'react';
import { string } from 'prop-types';

const Greeting = (props) => {
    const { name } = props;

    return (
        <strong>Hello {name}!</strong>
    );
}

export default Greeting;

Greeting.propTypes = {
    name: string.isRequired
};
