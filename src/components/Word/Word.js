import React from 'react';

import ItemTypes from './ItemTypes/ItemTypes'

import classes from './Word.css'

const word = props => {
    
    let viewName = props.type === ItemTypes.ARROW_CARD ? "<" + props.name + ">" : "[" + props.name + "]"

    return (
        <span className={classes.Word}>{viewName}</span>
    );
};

export default word;