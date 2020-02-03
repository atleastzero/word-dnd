import React from 'react'
import { useDrag } from 'react-dnd'
import ItemTypes from './ItemTypes'

const style = {
  border: '1px dashed gray',
  backgroundColor: 'white',
  padding: '0.5rem 1rem',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  cursor: 'move',
  float: 'left',
}
const Box = ({ name, type, isDropped }) => {
  const [{ opacity }, drag] = useDrag({
    item: { name, type },
    collect: monitor => ({
      opacity: monitor.isDragging() ? 0.4 : 1,
    }),
  })
  let viewName = type === ItemTypes.ARROW_CARD ? "<" + name + ">" : "[" + name + "]"
  return (
    <div ref={drag} style={{ ...style, opacity }}>
      {viewName}
    </div>
  )
}
export default Box
