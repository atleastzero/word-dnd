import React from 'react';

import classes from './Word.css'

const word = props => {
    
    return (
        <span className={classes.Word}>{props.children}</span>
    );
};

export default word;