import React, { useState, useCallback } from 'react';
import RoomInfo from '../../components/RoomInfo/RoomInfo'
import Word from '../../components/Word/Word'
import ItemTypes from '../../components/Word/ItemTypes/ItemTypes'
import update from 'immutability-helper'

import classes from './Room.css';

const Room = props => {
  const [dustbins, setDustbins] = useState([
    { accepts: [ItemTypes.SQUARE_CARD], lastDroppedItem: null },
  ])
  let currentInventory = []
  for(let i=0; i < props.inventory.length; i++) {
    var dict = {}
    if (props.inventory[i].charAt(0) === "[") {
      dict.name = props.inventory[i].substring(1, props.inventory[i].length-1);
      dict.type = props.SQUARE_CARD
    } else {
      dict.name = props.inventory[i].substring(1, props.inventory[i].length-1);
      dict.type = props.ARROW_CARD
    }
    currentInventory.push(dict)
  }
  
  const [inventory] = useState(currentInventory)
  const [droppedBoxNames, setDroppedBoxNames] = useState([])
  function isDropped(boxName) {
    return droppedBoxNames.indexOf(boxName) > -1
  }
  const handleDrop = useCallback(
    (index, item) => {
      const { name } = item
      setDroppedBoxNames(
        update(droppedBoxNames, name ? { $push: [name] } : { $push: [] }),
      )
      setDustbins(
        update(dustbins, {
          [index]: {
            lastDroppedItem: {
              $set: item,
            },
          },
        }),
      )
    },
    [droppedBoxNames, dustbins],
  )
  return (
    <div className={classes.Room}>
      {props.children}
      <div style={{ overflow: 'hidden', clear: 'both' }}>
        {dustbins.map(({ accepts, lastDroppedItem }, index) => (
          <RoomInfo
            accept={accepts}
            lastDroppedItem={lastDroppedItem}
            onDrop={item => handleDrop(index, item)}
            key={index}
            mainInfo={props.mainInfo}
            mainItem={props.mainItem}
          />
          //     {/* <Word 
          //       name="dark"
          //       type={ItemTypes.SQUARE_CARD}
          //       isDropped={isDropped("dark")}
          //       key={-1}
          //     />
          // </RoomInfo> */}
        ))}
      </div>

      <div style={{ overflow: 'hidden', clear: 'both' }}>
        {inventory.map(({ name, type }, index) => (
          <Word
            name={name}
            type={type}
            isDropped={isDropped(name)}
            key={index}
          />
        ))}
      </div>
    </div>
  )
}

export default Room