import React from 'react';

import Aux from '../../hoc/Aux'
import Backdrop from './Settings.css'

import classes from './Settings.css';

const settings = props => (
    <Aux>
        <Backdrop show={props.show} clicked={props.closed} />
        <div 
            className={classes.Settings}
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}
        >
            {props.children}
        </div>
    </Aux>
);

export default settings;