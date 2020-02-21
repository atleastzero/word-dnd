import React from 'react'
import { useDrop } from 'react-dnd'

import classes from './RoomInfo.css';

import Word from '../Word/Word'
import ItemTypes from '../Word/ItemTypes/ItemTypes'

const RoomInfo = ({ mainItem, mainInfo, mainDefault, mainItemType, accept, lastDroppedItem, onDrop }) => {
    var mainBeginning = mainInfo.substring(0, mainInfo.indexOf("["))
    var mainEnd = mainInfo.substring(mainInfo.indexOf("]")+1)
    var name, removable, word, hasDefault = false
    const [{ isOver, canDrop }, drop] = useDrop({
        accept,
        drop: onDrop,
        collect: monitor => ({
          isOver: monitor.isOver(),
          canDrop: monitor.canDrop(),
        }),
      })
    if (mainItem === null) {
        name = mainDefault
        removable = false
        hasDefault = true
        word = "<" + name + ">" 
        if (mainItemType === ItemTypes.CIRCLE_CARD) {
            word = "(" + name + ")" 
        } else if (mainItemType === ItemTypes.SQUARE_CARD) {
            word = "[" + name + "" 
        }
    } else {
        name = mainItem
        word = "<" + name + ">" 
        if (mainItemType === ItemTypes.CIRCLE_CARD) {
            word = "(" + name + ")" 
        } else if (mainItemType === ItemTypes.SQUARE_CARD) {
            word = "[" + name + "" 
        }
        removable = true
        if (mainDefault) {
            hasDefault = true
        }
        word = (<Word
            name={name}
            type={mainItemType}
            removable={removable}
            isDropped={true}
            key={-1}
        />)
    }
    

    return (
        <div className={classes.RoomInfo}>
            <h1>
                {mainBeginning}
                {word}
                {mainEnd}
            </h1>
        </div>
    );
}

export default RoomInfo;