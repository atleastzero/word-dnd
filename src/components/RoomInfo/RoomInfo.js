import React from 'react';

import classes from './RoomInfo.css';

import Word from '../Word/Word'

const roomInfo = props => {
    var mainBeginning = props.mainInfo.substring(0, props.mainInfo.indexOf("["))
    var mainEnd = props.mainInfo.substring(props.mainInfo.indexOf("]")+1)

    return (
        <div className={classes.RoomInfo}>
            <h1>
                {mainBeginning}
                <Word
                    name={props.mainItem.name}
                    type={props.mainItem.type}
                />
                {mainEnd}
            </h1>
        </div>
    );
}

export default roomInfo;