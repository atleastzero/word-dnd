import React from 'react';

import classes from './RoomInfo.css';

import Word from '../Word/Word'

const RoomInfo = ({ mainItem, mainInfo, mainDefault, mainItemType }) => {
    var mainBeginning = mainInfo.substring(0, mainInfo.indexOf("["))
    var mainEnd = mainInfo.substring(mainInfo.indexOf("]")+1)
    var name, removable, hasDefault = false
    if (mainItem === null) {
        name = mainDefault
        removable = false
        hasDefault = true
    } else {
        name = mainItem
        removable = true
        if (mainDefault) {
            hasDefault = true
        }
    }

    return (
        <div className={classes.RoomInfo}>
            <h1>
                {mainBeginning}
                <Word
                    name={name}
                    type={mainItemType}
                    removable={removable}
                    isDropped={true}
                    key={-1}
                />
                {mainEnd}
            </h1>
        </div>
    );
}

export default RoomInfo;