import React from 'react'
import { useDrag } from 'react-dnd'

import ItemTypes from './ItemTypes/ItemTypes'

import classes from './Word.css'

const Word = ({ name, type, isDropped, removable, hasDefault }) => {
    console.log(type)
    const [{ opacity }, drag] = useDrag({
      item: { name, type },
      collect: monitor => ({
        opacity: monitor.isDragging() ? 0.4 : 1,
      }),
    })
    var viewWord = "<" + name + ">" 
    if (type === ItemTypes.CIRCLE_CARD) {
        viewWord = "(" + name + ")" 
    } else if (type === ItemTypes.SQUARE_CARD) {
        viewWord = "[" + name + "]" 
    }

    return (
      <div ref={drag} style={{ opacity }} className={classes.Word}>
        {viewWord}
      </div>
    )
  }
  export default Word