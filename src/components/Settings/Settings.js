import React from 'react';

import Aux from '../../hoc/Aux'
import Backdrop from '../Backdrop/Backdrop'

import classes from './Settings.css';

const settings = props => (
    <Aux>
        <Backdrop show={props.show} clicked={props.settingsClosed} />
        <div 
            className={classes.Settings}
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}
        >
            <button>Log Out</button>
        </div>
    </Aux>
);

export default settings;