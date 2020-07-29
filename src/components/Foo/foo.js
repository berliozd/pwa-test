import React from 'react';

import classes from './foo.css';
import Greeting from '../Greeting';

const Foo = props => {
    return (
    <div className={classes.root}>
        <h1 className={classes.title}>Foo Component</h1>
        <hr className={classes.spacer} />
        <p className={classes.label}>A child component with propTypes &amp; CSS Modules:</p>
        <Greeting name="Joe Bloggs" className={classes.title} />
    </div>
    );
}

export default Foo;
