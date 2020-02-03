import React, { useState, useCallback } from 'react'
import Dustbin from './Dustbin.jsx'
import Box from './Box'
import ItemTypes from './ItemTypes'
import update from 'immutability-helper'
const Container = () => {
  const [dustbins, setDustbins] = useState([
    { accepts: [ItemTypes.SQUARE_CARD], lastDroppedItem: null },
    { accepts: [ItemTypes.ARROW_CARD], lastDroppedItem: null },
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
    <div>
      <div style={{ overflow: 'hidden', clear: 'both' }}>
        {dustbins.map(({ accepts, lastDroppedItem }, index) => (
          <Dustbin
            accept={accepts}
            lastDroppedItem={lastDroppedItem}
            onDrop={item => handleDrop(index, item)}
            key={index}
          />
        ))}
      </div>

      <div style={{ overflow: 'hidden', clear: 'both' }}>
        {inventory.map(({ name, type }, index) => (
          <Box
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
export default Container
