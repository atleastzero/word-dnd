import React from 'react';

import classes from './SettingsButton.css'

const settingsButton = props => {
    
    return (
        <button
            onClick={props.clicked}
            className={classes.Button}
        >
            <i className="fas fa-cog"></i>
        </button>
    );
};

export default settingsButton;