import React, { useState, useCallback } from 'react';
import RoomInfo from '../../components/RoomInfo/RoomInfo'
import Word from '../../components/Word/Word'
import ItemTypes from '../../components/Word/ItemTypes/ItemTypes'
import update from 'immutability-helper'

import classes from './Room.css';

const Room = props => {
  const [dustbins, setDustbins] = useState([
    { accepts: [ItemTypes.SQUARE_CARD], lastDroppedItem: null },
    // { accepts: [ItemTypes.ARROW_CARD], lastDroppedItem: null },
  ])
  const [inventory] = useState([
    { name: 'dark', type: ItemTypes.SQUARE_CARD },
    { name: 'scary', type: ItemTypes.SQUARE_CARD },
    { name: 'shelf', type: ItemTypes.ARROW_CARD },
  ])
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
      <div style={{ overflow: 'hidden', clear: 'both' }}>
        {dustbins.map(({ accepts, lastDroppedItem }, index) => (
          <RoomInfo
            accept={accepts}
            lastDroppedItem={lastDroppedItem}
            onDrop={item => handleDrop(index, item)}
            key={index}
            mainInfo={props.mainInfo}
            mainItem={props.mainItem}
            mainItemType={props.mainItemType}
            mainDefault={props.mainDefault}
          >
          </RoomInfo>
        ))}
      </div>

      <div style={{ overflow: 'hidden', clear: 'both' }}>
        {inventory.map(({ name, type }, index) => (
          <Word
            name={name}
            type={type}
            isDropped={isDropped(name)}
            key={index}
            removable={false}
          />
        ))}
      </div>
    </div>
  )
}

export default Room