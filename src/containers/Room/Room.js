import React from 'react';

import classes from './Room.css';

const room = props => (
    <div 
        className={classes.Room}
    >{props.children}</div> 
);

export default room;