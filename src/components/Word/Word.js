import React from 'react'
import { useDrag } from 'react-dnd'

import ItemTypes from './ItemTypes/ItemTypes'

// import classes from './Word.css'

const Word = ({ name, type, isDropped, removable, hasDefault }) => {
    console.log(type)
    const [{ opacity }, drag] = useDrag({
      item: { name, type },
      collect: monitor => ({
        opacity: monitor.isDragging() ? 0.4 : 1,
      }),
    })
    let viewName = type === ItemTypes.ARROW_CARD ? "<" + name + ">" : "[" + name + "]"
    return (
      <div ref={drag} style={{ opacity }}>
        {viewName}
      </div>
    )
  }
  export default Word